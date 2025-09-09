import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, Camera, Heart, Activity, Play, Square, RotateCcw, Save, X, Clock, Loader } from 'lucide-react';
import axios from "axios";

export default function CameraSection() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const cameraInstance = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordingTimerRef = useRef(null);
  const recordedBlobRef = useRef(null);
  
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [errorInfo, setErrorInfo] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [recordedVideoUrl, setRecordedVideoUrl] = useState(null);
  const [aiPrediction, setAiPrediction] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [stream, setStream] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  // Scan history states
  const [scanHistory, setScanHistory] = useState([]);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [selectedScan, setSelectedScan] = useState(null);
  const [isViewingDetail, setIsViewingDetail] = useState(false);

  // User data states
  const [isUserLoading, setIsUserLoading] = useState(true);

  // Backend server ka base URL
  const API_BASE_URL = 'https://facevital-backend-3.onrender.com';
  const AI_API_URL = 'https://anurudh-268064419384.asia-east1.run.app/analyze';

  // Helper function to get authentication headers
  const getAuthHeaders = () => {
    const token = localStorage.getItem('token') || 
                  localStorage.getItem('authToken') || 
                  localStorage.getItem('accessToken');
    if (!token) {
        console.error("Auth token is not available for API call.");
        return null;
    }
    return {
      'Authorization': `Bearer ${token}`
    };
  };
  
  // User data fetch karna ab mandatory nahi hai
  useEffect(() => {
    const tryFetchingData = async () => {
      try {
        const token = localStorage.getItem('token') || 
                      localStorage.getItem('authToken') || 
                      localStorage.getItem('accessToken');

        if (!token) {
          console.log("No auth token found, proceeding as guest.");
          return;
        }
        
        console.log("Attempting to fetch user profile...");
        
        const response = await axios.get(`${API_BASE_URL}/api/profile/getProfile`, {
          headers: { 'Authorization': `Bearer ${token}` },
        });

        console.log("Received profile data:", response.data);
        
      } catch (error) {
        // Fetch fail hone par error dikhana zaroori nahi hai
        console.warn("Could not fetch user profile, but continuing. This might be normal for new users.", error.message);
      } finally {
        setIsUserLoading(false);
      }
    };

    tryFetchingData();
  }, []);


  const WIDTH = 384;
  const HEIGHT = 518;

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.crossOrigin = 'anonymous';
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    Promise.all([
      loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js'),
      loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js'),
      loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js'),
    ]).then(() => {
      setScriptsLoaded(true);
    }).catch(err => {
        console.error("Failed to load MediaPipe scripts", err);
        setErrorInfo({ message: "Failed to load required scripts. Please check your internet connection." });
    });
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const onResults = (results) => {
    if (!window.drawConnectors || !window.drawLandmarks) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx || !videoRef.current) return;
    
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    ctx.save();
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.scale(-1, 1);
    ctx.translate(-WIDTH, 0);
    
    if (results.multiFaceLandmarks?.length) {
      const landmarks = results.multiFaceLandmarks[0];
      
      ctx.shadowColor = 'rgba(0,0,0,0.35)';
      ctx.shadowBlur = 8;
      window.drawConnectors(ctx, landmarks, window.FACEMESH_FACE_OVAL, { color: '#FFF', lineWidth: 2 });
      ctx.shadowBlur = 0;
      window.drawConnectors(ctx, landmarks, window.FACEMESH_LEFT_EYE, { color: 'rgba(255,255,255,0.75)', lineWidth: 1.3 });
      window.drawConnectors(ctx, landmarks, window.FACEMESH_RIGHT_EYE, { color: 'rgba(255,255,255,0.75)', lineWidth: 1.3 });
      window.drawConnectors(ctx, landmarks, window.FACEMESH_LIPS, { color: 'rgba(255,255,255,0.8)', lineWidth: 1.3 });
      window.drawLandmarks(ctx, landmarks, { color: '#FFF', lineWidth: 0.7, radius: 0.8 });
    }
    ctx.restore();
  };

  const startRecording = () => {
    if (!stream) return;
    resetAll();
    setIsRecording(true);
    setRecordingDuration(0);

    const chunks = [];
    // MP4 format use karte hain better compatibility ke liye
    const mediaRecorder = new MediaRecorder(stream, { 
      mimeType: 'video/webm;codecs=vp9' 
    });

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) chunks.push(event.data);
    };

    mediaRecorder.onstop = async () => {
      if (recordingTimerRef.current) {
        clearInterval(recordingTimerRef.current);
        recordingTimerRef.current = null;
      }
      setIsRecording(false);

      const blob = new Blob(chunks, { type: 'video/webm' });
      const videoUrl = URL.createObjectURL(blob);
      recordedBlobRef.current = blob;
      setRecordedVideoUrl(videoUrl);
      
      // Recording stop hone ke baad seedha analysis shuru karein
      callAIAPI(blob);
    };

    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();

    recordingTimerRef.current = setInterval(() => {
      setRecordingDuration(prev => {
        const newDuration = prev + 1;
        if (newDuration >= 30) {
          if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
            mediaRecorderRef.current.stop();
          }
          if (recordingTimerRef.current) {
            clearInterval(recordingTimerRef.current);
            recordingTimerRef.current = null;
          }
          return 30;
        }
        return newDuration;
      });
    }, 1000);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    }
  };

  const callAIAPI = async (videoBlob) => {
    setIsAnalyzing(true);
    setAiPrediction(null);
    setAnalysisComplete(false);
    
    try {
      console.log('Starting AI analysis...');
      
      const formData = new FormData();
      // Backend expects 'file' field name based on your Flask code
      formData.append('file', videoBlob, 'health-scan.webm');
      
      console.log('Sending video to AI API...');
      
      const response = await axios.post(AI_API_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        timeout: 120000, // 2 minute timeout
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          console.log(`Upload progress: ${percentCompleted}%`);
        }
      });
      
      console.log('AI API Response:', response.data);
      
      const prediction = response.data;

      if (typeof prediction === 'object' && prediction !== null && !prediction.error) {
          // Map the response to match your frontend expectations
          const mappedPrediction = {
            heartRate: prediction.heart_rate_bpm,
            bloodPressure: {
              systolic: prediction.blood_pressure?.systolic,
              diastolic: prediction.blood_pressure?.diastolic
            },
            oxygenSaturation: prediction.spo2_percent,
            stressLevel: prediction.stress_indicator ? (prediction.stress_indicator * 100).toFixed(1) : null,
            respiratoryRate: prediction.respiratory_rate_bpm,
            age: prediction.age,
            gender: prediction.gender,
            healthRisk: prediction.health_risk_indicator
          };
          
          setAiPrediction(mappedPrediction);
          await saveToDatabase(mappedPrediction, videoBlob);
      } else {
          throw new Error(prediction.error || "AI API से अनुपयुक्त response structure मिला।");
      }

    } catch (error) {
      console.error('AI API Error:', error);
      let errorMessage = 'Analysis failed';
      
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        errorMessage = `Analysis failed: ${error.response.status} - ${error.response.data?.error || 'Server error'}`;
      } else if (error.request) {
        console.error('Request error:', error.request);
        errorMessage = 'Analysis failed: No response from server. Please check your internet connection.';
      } else {
        console.error('Error message:', error.message);
        errorMessage = `Analysis failed: ${error.message}`;
      }
      
      setAiPrediction({ error: errorMessage });
    } finally {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }
  };

  const saveToDatabase = async (predictionData, videoBlob) => {
    const authHeaders = getAuthHeaders();
    if (!authHeaders) {
        console.log("No auth token, skipping database save");
        return;
    }

    setIsSaving(true);
    setSaveSuccess(false);
    
    try {
      const formData = new FormData();
      formData.append('video', videoBlob, 'health-scan.webm');
      
      // Send the mapped prediction data
      formData.append('predictions', JSON.stringify(predictionData));
      formData.append('heartRate', predictionData.heartRate || '');
      formData.append('bloodPressureSystolic', predictionData.bloodPressure?.systolic || '');
      formData.append('bloodPressureDiastolic', predictionData.bloodPressure?.diastolic || '');
      formData.append('oxygenSaturation', predictionData.oxygenSaturation || '');
      formData.append('stressLevel', predictionData.stressLevel || '');
      formData.append('scanDuration', recordingDuration);

      await axios.post(`${API_BASE_URL}/api/scan/saveHealthData`, formData, {
        headers: {
          ...authHeaders,
          'Content-Type': 'multipart/form-data'
        },
      });

      setSaveSuccess(true);
      fetchScanHistory();
      
    } catch (error) {
      console.error('Error saving to database:', error);
      setSaveSuccess(false);
    } finally {
      setIsSaving(false);
    }
  };

  const fetchScanHistory = async () => {
    const authHeaders = getAuthHeaders();
    if (!authHeaders) return;

    setIsLoadingHistory(true);
    try {
        const response = await axios.get(`${API_BASE_URL}/api/scan/getScanHistory?limit=5`, {
            headers: authHeaders,
        });
        setScanHistory(response.data.results || []);
    } catch (error) {
        console.error("Error fetching history:", error);
        setScanHistory([]);
    } finally {
        setIsLoadingHistory(false);
    }
  };

  const fetchScanDetails = async (scanId) => {
    const authHeaders = getAuthHeaders();
    if (!authHeaders) return;

    setIsViewingDetail(true);
    setSelectedScan(null);
    try {
        const response = await axios.get(`${API_BASE_URL}/api/scan/${scanId}`, {
            headers: authHeaders,
        });
        setSelectedScan(response.data.result);
    } catch (error) {
        console.error("Error fetching details:", error);
    }
  };

  const resetAll = () => {
    setIsRecording(false);
    setRecordingDuration(0);
    setRecordedVideoUrl(null);
    setAiPrediction(null);
    setIsAnalyzing(false);
    setAnalysisComplete(false);
    setSaveSuccess(false);
    setIsSaving(false);
    recordedBlobRef.current = null;
    if (recordingTimerRef.current) {
        clearInterval(recordingTimerRef.current);
        recordingTimerRef.current = null;
    }
  };

  useEffect(() => {
    if (!scriptsLoaded || isUserLoading) return;
    fetchScanHistory();
    let isMounted = true;
    const startCamera = async () => {
      try {
        if (stream) stream.getTracks().forEach(track => track.stop());
        const mediaStream = await navigator.mediaDevices.getUserMedia({ 
          video: { width: WIDTH, height: HEIGHT, facingMode: 'user' }, audio: false
        });
        if (isMounted && videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          setStream(mediaStream);
          setErrorInfo(null);
          videoRef.current.onloadedmetadata = () => {
            if (!isMounted || !window.FaceMesh || !window.Camera) return;
            const faceMesh = new window.FaceMesh({ locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`});
            faceMesh.setOptions({ selfieMode: true, maxNumFaces: 1, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });
            faceMesh.onResults(onResults);
            if (cameraInstance.current) cameraInstance.current.close();
            if (videoRef.current) {
              cameraInstance.current = new window.Camera(videoRef.current, {
                onFrame: async () => {
                  if (videoRef.current) await faceMesh.send({ image: videoRef.current });
                }, width: WIDTH, height: HEIGHT,
              });
              cameraInstance.current.start();
            }
          };
        } else {
            mediaStream.getTracks().forEach(track => track.stop());
        }
      } catch (error) {
        console.error('Failed to acquire camera feed:', error);
        if (isMounted) setErrorInfo({ message: "Could not access the camera. Please grant permission in your browser." });
      }
    };
    startCamera();
    return () => {
      isMounted = false;
      if (stream) stream.getTracks().forEach(track => track.stop());
      if (cameraInstance.current) {
        cameraInstance.current.close();
        cameraInstance.current = null;
      }
      if (recordingTimerRef.current) clearInterval(recordingTimerRef.current);
    };
  }, [scriptsLoaded, isUserLoading]);

  const styles = `
    :root {
      --PrimaryColor: #5eaa3c; --HoverColor: #4a8530; --paleGreen: #f0f8eb;
      --whiteColor: #ffffff; --blackColor: #2c3e50; --greyText: #718096;
      --textColor: #64748b; --bgColor: #f8fafc; --inputColor: #f1f5f9;
      --itemCardHover: #e2e8f0; --successColor: #10b981; --warningColor: #f59e0b;
      --h1FontSize: 2rem; --h2FontSize: 1.5rem; --h3FontSize: 1.25rem;
      --normalFontSize: 1rem; --smallFontSize: 0.875rem; --smallestFontSize: 0.75rem;
    }
    .cameraSection { min-height: 100vh; background: var(--bgColor); padding: 1.5rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; }
    .cameraHeader { background: var(--whiteColor); padding: 2rem; border-radius: 16px; margin-bottom: 2rem; box-shadow: 0 4px 20px rgba(0,0,0,0.08); text-align: center; }
    .cameraHeader h1 { font-size: var(--h1FontSize); color: var(--blackColor); font-weight: 700; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem; justify-content: center; }
    .cameraHeader p { font-size: var(--normalFontSize); color: var(--textColor); margin: 0; }
    .cameraContainer { background: var(--whiteColor); border-radius: 16px; padding: 2rem; box-shadow: 0 4px 20px rgba(0,0,0,0.08); margin-bottom: 2rem; display: flex; flex-direction: column; align-items: center; gap: 2rem; }
    .cameraWrapper { position: relative; display: inline-block; }
    .errorState { background: var(--inputColor); border-radius: 16px; padding: 4rem 2rem; text-align: center; border: 2px dashed var(--greyText); width: 384px; height: 518px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    .errorIcon { color: #ff4757; margin-bottom: 1rem; }
    .errorText { font-size: var(--normalFontSize); color: var(--textColor); margin-bottom: 1.5rem; }
    .controlsGrid { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
    .controlBtn { background: var(--PrimaryColor); color: var(--whiteColor); border: none; padding: 0.875rem 1.75rem; border-radius: 8px; font-size: var(--normalFontSize); font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; gap: 0.75rem; min-width: 160px; justify-content: center; }
    .controlBtn:hover { background: var(--HoverColor); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.15); }
    .controlBtn:disabled { background: var(--greyText); cursor: not-allowed; transform: none; box-shadow: none; }
    .controlBtn.secondary { background: var(--inputColor); color: var(--blackColor); border: 2px solid var(--itemCardHover); }
    .controlBtn.secondary:hover { background: var(--itemCardHover); border-color: var(--greyText); }
    .controlBtn.danger { background: #ff4757; color: var(--whiteColor); }
    .controlBtn.danger:hover { background: #ff3742; }
    .recordingIndicator { background: #ff4757; color: var(--whiteColor); padding: 0.5rem 1rem; border-radius: 12px; font-size: var(--smallFontSize); font-weight: 600; display: flex; align-items: center; gap: 0.5rem; position: absolute; top: 1rem; left: 1rem; z-index: 100; }
    .recordingDot { width: 8px; height: 8px; background: var(--whiteColor); border-radius: 50%; animation: pulse 1.5s infinite; }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    .statusIndicator { padding: 0.75rem 1rem; border-radius: 8px; font-size: var(--normalFontSize); font-weight: 600; display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem; width: 100%; max-width: 384px; justify-content: center; }
    .statusIndicator.success { background: rgba(16, 185, 129, 0.1); color: var(--successColor); }
    .statusIndicator.warning { background: rgba(245, 158, 11, 0.1); color: var(--warningColor); }
    .statusIndicator.error { background: rgba(255, 71, 87, 0.1); color: #ff4757; }
    .resultsSection, .historySection { background: var(--whiteColor); border-radius: 16px; padding: 2rem; box-shadow: 0 4px 20px rgba(0,0,0,0.08); margin-top: 2rem; width: 100%; max-width: 900px; }
    .sectionHeader { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; color: var(--blackColor); }
    .sectionHeader h3 { font-size: var(--h2FontSize); font-weight: 700; margin: 0; }
    .videoPreview { margin-bottom: 2rem; }
    .previewVideo { width: 300px; height: 200px; border-radius: 12px; object-fit: cover; border: 2px solid var(--inputColor); }
    .loadingState { text-align: center; padding: 2rem; color: var(--textColor); }
    .loadingSpinner { width: 24px; height: 24px; border: 3px solid var(--inputColor); border-top: 3px solid var(--PrimaryColor); border-radius: 50%; animation: spin 1s linear infinite; margin-right: 0.5rem; }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    .predictionGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; }
    .predictionCard { background: var(--paleGreen); border: 1px solid var(--PrimaryColor); border-radius: 12px; padding: 1.5rem; text-align: center; transition: transform 0.2s ease; }
    .predictionCard:hover { transform: translateY(-2px); }
    .predictionValue { font-size: 2.5rem; font-weight: 700; color: var(--PrimaryColor); margin-bottom: 0.5rem; }
    .predictionLabel { font-size: var(--normalFontSize); color: var(--blackColor); font-weight: 600; margin-bottom: 0.25rem; }
    .predictionUnit { font-size: var(--smallFontSize); color: var(--textColor); }
    .historyList { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem; }
    .historyItem { display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--inputColor); border-radius: 8px; transition: background 0.2s; }
    .historyItem:hover { background: var(--itemCardHover); }
    .historyInfo { display: flex; flex-direction: column; }
    .historyDate { font-weight: 600; color: var(--blackColor); }
    .historyVitals { font-size: var(--smallFontSize); color: var(--textColor); }
    .modalOverlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .modalContent { background: var(--whiteColor); padding: 2rem; border-radius: 16px; width: 90%; max-width: 600px; max-height: 80vh; overflow-y: auto; position: relative; }
    .modalClose { position: absolute; top: 1rem; right: 1rem; background: none; border: none; cursor: pointer; color: var(--greyText); }
    .modalBody .predictionGrid { margin-top: 1.5rem; }
    @media screen and (max-width: 768px) {
      .cameraSection { padding: 1rem; }
      .cameraHeader { padding: 1.5rem; }
      .cameraHeader h1 { font-size: 1.5rem; }
      .cameraContainer { padding: 1rem; }
      .cameraWrapper { transform: scale(0.85); }
      .controlsGrid { flex-direction: column; align-items: center; }
      .controlBtn { width: 100%; max-width: 280px; }
      .predictionGrid { grid-template-columns: 1fr; }
      .previewVideo { width: 100%; max-width: 300px; }
    }
  `;

  const renderAnalysisStatus = () => {
    if (isAnalyzing) {
      return (
        <div className="statusIndicator warning">
          <div className="loadingSpinner" style={{width: '20px', height: '20px', borderTop: '3px solid var(--warningColor)'}}></div>
          <span>Analyzing your video...</span>
        </div>
      );
    }
    
    if (analysisComplete) {
      if (aiPrediction?.error) {
        return (
          <div className="statusIndicator error">
            <AlertCircle size={18} />
            <span>Analysis failed. Please try again.</span>
          </div>
        );
      }
      if (saveSuccess) {
        return (
          <div className="statusIndicator success">
            <Save size={18} />
            <span>Analysis complete and data saved.</span>
          </div>
        );
      }
       if (isSaving) {
        return (
          <div className="statusIndicator warning">
             <div className="loadingSpinner" style={{width: '20px', height: '20px', borderTop: '3px solid var(--warningColor)'}}></div>
            <span>Saving results...</span>
          </div>
        );
      }
      return (
        <div className="statusIndicator success">
          <Save size={18} />
          <span>Analysis complete!</span>
        </div>
      );
    }
    
    return null;
  }

  const renderModal = () => (
    <div className="modalOverlay" onClick={() => setIsViewingDetail(false)}>
        <div className="modalContent" onClick={e => e.stopPropagation()}>
            <button className="modalClose" onClick={() => setIsViewingDetail(false)}><X size={24} /></button>
            {selectedScan ? (
                <>
                    <div className="sectionHeader"><h3>Scan Details</h3></div>
                    <p><strong>Date:</strong> {new Date(selectedScan.timestamp).toLocaleString()}</p>
                    <div className="predictionGrid">
                        <div className="predictionCard"><div className="predictionValue">{selectedScan.heartRate || '--'}</div><div className="predictionLabel">Heart Rate</div><div className="predictionUnit">BPM</div></div>
                        <div className="predictionCard"><div className="predictionValue">{selectedScan.bloodPressureSystolic && selectedScan.bloodPressureDiastolic ? `${selectedScan.bloodPressureSystolic}/${selectedScan.bloodPressureDiastolic}` : '--/--'}</div><div className="predictionLabel">Blood Pressure</div><div className="predictionUnit">mmHg</div></div>
                        <div className="predictionCard"><div className="predictionValue">{selectedScan.oxygenSaturation || '--'}</div><div className="predictionLabel">Oxygen Saturation</div><div className="predictionUnit">%</div></div>
                        <div className="predictionCard"><div className="predictionValue">{selectedScan.stressIndex || '--'}</div><div className="predictionLabel">Stress Level</div><div className="predictionUnit">%</div></div>
                    </div>
                </>
            ) : (
                <div className="loadingState"><div className="loadingSpinner"></div><p>Loading Details...</p></div>
            )}
        </div>
    </div>
  );

  if (!scriptsLoaded || isUserLoading) {
      return (<><style>{styles}</style><div className="cameraSection"><div className="loadingState" style={{paddingTop: '5rem'}}><div className="loadingSpinner"></div><p>Loading scanner...</p></div></div></>);
  }

  if (errorInfo) {
    return (<><style>{styles}</style><div className="cameraSection"><div className="cameraHeader"><h1><Heart size={28}/>Health Vitals Scanner</h1></div><div className="cameraContainer"><div className="errorState"><AlertCircle className="errorIcon" size={64} /><p className="errorText">{errorInfo.message}</p><button className="controlBtn" onClick={() => window.location.reload()}><RotateCcw size={16}/> Try Again</button></div></div></div></>);
  }

  return (
    <>
      <style>{styles}</style>
      {isViewingDetail && renderModal()}
      <div className="cameraSection">
        <div className="cameraHeader">
          <h1><Heart size={28}/>Health Vitals Scanner</h1>
          <p>Position your face in the oval and record for 30 seconds.</p>
        </div>
        <div className="cameraContainer">
          <div className="cameraWrapper" style={{ width: WIDTH, height: HEIGHT }}>
            <div style={{ position: 'relative', width: WIDTH, height: HEIGHT, borderRadius: '1.5rem', overflow: 'hidden', border: isRecording ? '4px solid #ff4757' : '2px solid #e5e7eb', boxShadow: isRecording ? '0 0 20px rgba(255, 71, 87, 0.3)' : '0 4px 20px rgba(0,0,0,0.08)' }}>
              <video ref={videoRef} autoPlay playsInline muted style={{ width: WIDTH, height: HEIGHT, objectFit: 'cover' }}/>
              <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: WIDTH, height: HEIGHT, pointerEvents: 'none', zIndex: 20 }}/>
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 30, backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(16px)', WebkitMaskImage: 'radial-gradient(ellipse 61% 68% at 50% 50%, transparent 69%, black 71%)', maskImage: 'radial-gradient(ellipse 61% 68% at 50% 50%, transparent 69%, black 71%)', background: 'rgba(255,255,255,0.10)' }}/>
              <div style={{ position: 'absolute', left: '6%', top: '4%', width: '88%', height: '92%', border: '5px dashed #fff', borderRadius: '50%', boxSizing: 'border-box', zIndex: 31, pointerEvents: 'none' }}/>
              <div style={{ position: 'absolute', width: '100%', textAlign: 'center', color: '#fff', fontWeight: 600, fontSize: '1.15rem', textShadow: '0 2px 12px #003046cc', letterSpacing: '0.02em', top: '14px', left: 0, zIndex: 40, pointerEvents: 'none' }}>Place your face in the oval</div>
              {isRecording && (<div className="recordingIndicator"><div className="recordingDot"></div>REC {formatTime(recordingDuration)}</div>)}
            </div>
          </div>
          
          {renderAnalysisStatus()}

          <div className="controlsGrid">
            {!isRecording && !recordedVideoUrl && (<button className="controlBtn" onClick={startRecording} disabled={!!errorInfo || isUserLoading}><Play size={18}/> Start Recording</button>)}
            {isRecording && (<button className="controlBtn danger" onClick={stopRecording}><Square size={18}/> Stop Recording</button>)}

            {recordedVideoUrl && (
                <button className="controlBtn" onClick={startRecording} disabled={isAnalyzing || isSaving}>
                    <Play size={18}/> Record Again
                </button>
            )}
          </div>
        </div>

        {analysisComplete && aiPrediction && !aiPrediction.error && (
          <div className="resultsSection">
            <div className="sectionHeader"><Activity size={24}/><h3>Analysis Results</h3></div>
            <div className="videoPreview"><h4 style={{ color: 'var(--blackColor)', marginBottom: '1rem' }}>Recorded Video:</h4><video className="previewVideo" controls src={recordedVideoUrl} /></div>
            <div className="predictionGrid">
                <div className="predictionCard"><div className="predictionValue">{aiPrediction.heartRate || '--'}</div><div className="predictionLabel">Heart Rate</div><div className="predictionUnit">BPM</div></div>
                <div className="predictionCard"><div className="predictionValue">{aiPrediction.bloodPressure?.systolic && aiPrediction.bloodPressure?.diastolic ? `${aiPrediction.bloodPressure.systolic}/${aiPrediction.bloodPressure.diastolic}`: '--/--'}</div><div className="predictionLabel">Blood Pressure</div><div className="predictionUnit">mmHg</div></div>
                <div className="predictionCard"><div className="predictionValue">{aiPrediction.oxygenSaturation || '--'}</div><div className="predictionLabel">Oxygen Saturation</div><div className="predictionUnit">%</div></div>
                <div className="predictionCard"><div className="predictionValue">{aiPrediction.stressLevel || '--'}</div><div className="predictionLabel">Stress Level</div><div className="predictionUnit">%</div></div>
            </div>
          </div>
        )}

        <div className="historySection">
            <div className="sectionHeader"><Clock size={24} /><h3>Recent Scans</h3></div>
            {isLoadingHistory ? (<div className="loadingState"><div className="loadingSpinner" style={{width: '24px', height: '24px'}}></div> Loading history...</div>) : 
                scanHistory.length > 0 ? (
                    <ul className="historyList">
                        {scanHistory.map(scan => (
                            <li key={scan._id} className="historyItem">
                                <div className="historyInfo">
                                    <span className="historyDate">{new Date(scan.timestamp).toLocaleString()}</span>
                                    <span className="historyVitals">HR: {scan.heartRate || 'N/A'}</span>
                                </div>
                                <button className="controlBtn secondary" style={{minWidth: '120px', padding: '0.5rem 1rem'}} onClick={() => fetchScanDetails(scan._id)}>View Details</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p style={{textAlign: 'center', color: 'var(--textColor)'}}>No scan history found.</p>
                )
            }
        </div>
      </div>
    </>
  );
}
