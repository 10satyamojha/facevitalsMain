import React, { useState, useEffect } from 'react';
import './profileform.css';
import '../../App.css'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
import video from '../../Assets/video.mp4'
import logo from '../../Assets/logo.png'
import { FaUser, FaWeight, FaRulerVertical, FaBirthdayCake, FaVenusMars } from 'react-icons/fa'
import { MdHealthAndSafety } from 'react-icons/md'
import { AiOutlineSwapRight } from 'react-icons/ai'

const ProfileForm = () => {
    const [formData, setFormData] = useState({
        nickname: '',
        age: '',
        height: '',
        weight: '',
        unit: 'metric',
        sex: ''
    });
    const [status, setStatus] = useState('');
    const [statusHolder, setStatusHolder] = useState('message');
    const [isLoading, setIsLoading] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const navigateTo = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigateTo('/');
            return;
        }

        // Check if user already has a profile
        checkExistingProfile();
    }, [navigateTo]);

    const checkExistingProfile = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await Axios.get(
                'https://facevital-backend-3.onrender.com/api/profile/check',
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            if (response.data.hasProfile && response.data.profile) {
                const profile = response.data.profile;
                setFormData({
                    nickname: profile.nickname || '',
                    age: profile.age ? profile.age.toString() : '',
                    height: profile.height ? profile.height.toString() : '',
                    weight: profile.weight ? profile.weight.toString() : '',
                    unit: profile.unit || 'metric',
                    sex: profile.sex || ''
                });
                setIsUpdating(true);
            }
        } catch (error) {
            console.log('No existing profile found or error:', error.message);
            // Continue with empty form for new profile
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const { nickname, age, height, weight, sex } = formData;
        
        if (!nickname.trim()) {
            setStatus('Please enter your nickname');
            return false;
        }
        
        if (!age || parseInt(age) < 18) {
            setStatus('Age must be 18 or older');
            return false;
        }
        
        if (!height || parseFloat(height) <= 0) {
            setStatus('Please enter valid height');
            return false;
        }
        
        if (!weight || parseFloat(weight) <= 0) {
            setStatus('Please enter valid weight');
            return false;
        }
        
        if (!sex) {
            setStatus('Please select your gender');
            return false;
        }
        
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setStatus('');

        try {
            const token = localStorage.getItem('authToken');
            const response = await Axios.post(
                'https://facevital-backend-3.onrender.com/api/profile/create-update',
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            setStatus('Profile saved successfully! Redirecting to dashboard...');
            
            // Store profile data if needed
            localStorage.setItem('userProfile', JSON.stringify(response.data.profile));
            
            setTimeout(() => {
                navigateTo('/dashboard');
            }, 2000);

        } catch (error) {
            console.error('Profile creation error:', error);
            
            if (error.response) {
                if (error.response.status === 401) {
                    setStatus('Session expired. Please login again.');
                    localStorage.removeItem('authToken');
                    localStorage.removeItem('user');
                    setTimeout(() => navigateTo('/'), 2000);
                } else {
                    setStatus(error.response.data.message || 'Failed to create profile');
                }
            } else {
                setStatus('Unable to connect to server. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (status !== '') {
            setStatusHolder('showMessage');
            setTimeout(() => {
                setStatusHolder('message');
            }, 4000);
        }
    }, [status]);

    return (
        <div className="loginPage flex">
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title">Health Profile Setup</h2>
                        <p>Complete your health vitals for personalized care!</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Need to logout?</span>
                        <button 
                            className="btn" 
                            onClick={() => {
                                localStorage.clear();
                                navigateTo('/');
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>{isUpdating ? 'Update Your Profile' : 'Complete Your Profile'}</h3>
                        <p style={{ color: '#666', fontSize: '14px', marginTop: '5px' }}>
                            {isUpdating ? 
                                'Update your health information for better insights' : 
                                'Help us provide personalized health insights'
                            }
                        </p>
                    </div>

                    <form className="form grid" onSubmit={handleSubmit}>
                        <span className={statusHolder}>{status}</span>

                        {/* Nickname */}
                        <div className="inputDiv">
                            <label htmlFor="nickname">Nickname / Display Name</label>
                            <div className="input flex">
                                <FaUser className="icon" />
                                <input
                                    type="text"
                                    id="nickname"
                                    name="nickname"
                                    placeholder="Enter your preferred name"
                                    value={formData.nickname}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                    required
                                />
                            </div>
                        </div>

                        {/* Age */}
                        <div className="inputDiv">
                            <label htmlFor="age">Age</label>
                            <div className="input flex">
                                <FaBirthdayCake className="icon" />
                                <input
                                    type="number"
                                    id="age"
                                    name="age"
                                    placeholder="Enter your age"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                    min="18"
                                    max="120"
                                    required
                                />
                            </div>
                        </div>

                        {/* Gender */}
                        <div className="inputDiv">
                            <label htmlFor="sex">Gender</label>
                            <div className="input flex">
                                <FaVenusMars className="icon" />
                                <select
                                    id="sex"
                                    name="sex"
                                    value={formData.sex}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                    required
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        flex: 1,
                                        color: '#333'
                                    }}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Unit System */}
                        <div className="inputDiv">
                            <label htmlFor="unit">Measurement Unit</label>
                            <div className="input flex">
                                <MdHealthAndSafety className="icon" />
                                <select
                                    id="unit"
                                    name="unit"
                                    value={formData.unit}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                    required
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        flex: 1,
                                        color: '#333'
                                    }}
                                >
                                    <option value="metric">Metric (cm, kg)</option>
                                    <option value="imperial">Imperial (ft/in, lbs)</option>
                                </select>
                            </div>
                        </div>

                        {/* Height */}
                        <div className="inputDiv">
                            <label htmlFor="height">
                                Height {formData.unit === 'metric' ? '(cm)' : '(inches)'}
                            </label>
                            <div className="input flex">
                                <FaRulerVertical className="icon" />
                                <input
                                    type="number"
                                    id="height"
                                    name="height"
                                    placeholder={formData.unit === 'metric' ? 'Enter height in cm' : 'Enter height in inches'}
                                    value={formData.height}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                    min={formData.unit === 'metric' ? '100' : '36'}
                                    max={formData.unit === 'metric' ? '250' : '96'}
                                    step="0.1"
                                    required
                                />
                            </div>
                        </div>

                        {/* Weight */}
                        <div className="inputDiv">
                            <label htmlFor="weight">
                                Weight {formData.unit === 'metric' ? '(kg)' : '(lbs)'}
                            </label>
                            <div className="input flex">
                                <FaWeight className="icon" />
                                <input
                                    type="number"
                                    id="weight"
                                    name="weight"
                                    placeholder={formData.unit === 'metric' ? 'Enter weight in kg' : 'Enter weight in lbs'}
                                    value={formData.weight}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                    min={formData.unit === 'metric' ? '30' : '66'}
                                    max={formData.unit === 'metric' ? '300' : '660'}
                                    step="0.1"
                                    required
                                />
                            </div>
                        </div>

                        {/* Health Tips */}
                        <div style={{
                            padding: '15px',
                            backgroundColor: '#f0f5ff',
                            borderRadius: '8px',
                            border: '1px solid #adc6ff',
                            marginBottom: '15px'
                        }}>
                            <MdHealthAndSafety style={{ color: '#2f54eb', marginRight: '8px' }} />
                            <span style={{ color: '#666', fontSize: '14px' }}>
                                Your information helps us provide personalized health insights and recommendations.
                            </span>
                        </div>

                        <button
                            type="submit"
                            className="btn flex"
                            disabled={isLoading}
                        >
                            <span>{isLoading ? 'Saving Profile...' : (isUpdating ? 'Update Profile' : 'Complete Setup')}</span>
                            {!isLoading && <AiOutlineSwapRight className="icon" />}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;