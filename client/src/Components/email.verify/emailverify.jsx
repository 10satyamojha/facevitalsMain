import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams, useParams } from 'react-router-dom';
import Axios from 'axios';
import video from '../../Assets/video.mp4';
import logo from '../../Assets/logo.png';
import { BsCheckCircleFill } from 'react-icons/bs';
import { BiErrorCircle, BiLoaderAlt } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import '../Register/Register.css'; // Same CSS for consistent styling

const EmailVerification = () => {
    const [searchParams] = useSearchParams();
    const { token: paramToken } = useParams();
    const [status, setStatus] = useState('verifying'); // 'verifying', 'success', 'error'
    const [message, setMessage] = useState('');
    const [isResending, setIsResending] = useState(false);
    const [resendMessage, setResendMessage] = useState('');
    const navigateTo = useNavigate();

    // Get token from either query parameter or URL parameter
    const token = searchParams.get('token') || paramToken;

    useEffect(() => {
        if (!token) {
            setStatus('error');
            setMessage('Invalid verification link. No token found.');
            return;
        }

        verifyEmail();
    }, [token]);

    const verifyEmail = async () => {
        try {
            setStatus('verifying');
            setMessage('Verifying your email...');

            const response = await Axios.get(`https://facevital-backend-3.onrender.com/api/auth/verify-email?token=${token}`);
            
            setStatus('success');
            setMessage(response.data.message || 'Email verified successfully!');
            
            // Redirect to login after 3 seconds
            setTimeout(() => {
                navigateTo('/');
            }, 3000);
            
        } catch (error) {
            setStatus('error');
            if (error.response) {
                setMessage(error.response.data.message || 'Email verification failed');
            } else {
                setMessage('Unable to connect to server. Please try again later.');
            }
        }
    };

    const handleResendVerification = async () => {
        try {
            setIsResending(true);
            setResendMessage('');

            // You'll need to get email from somewhere - maybe ask user to enter it
            // For now, showing a simple message
            setResendMessage('Please go to the registration page to resend verification email.');
            
        } catch (error) {
            setResendMessage('Failed to resend verification email. Please try again.');
        } finally {
            setIsResending(false);
        }
    };

    return (
        <div className="registerPage flex">
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>
                    
                    <div className="textDiv">
                        <h2 className="title">Email Verification</h2>
                        <p>Verifying your account to get started</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Already verified?</span>
                        <Link to={'/'}>
                            <button className="btn">Login</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Email Verification</h3>
                    </div>

                    <div className="form grid" style={{ textAlign: 'center', padding: '40px' }}>
                        {status === 'verifying' && (
                            <div>
                                <BiLoaderAlt style={{ 
                                    fontSize: '60px', 
                                    color: '#1890ff', 
                                    marginBottom: '20px',
                                    animation: 'spin 1s linear infinite'
                                }} />
                                <h3 style={{ color: '#333', marginBottom: '20px' }}>
                                    Verifying Your Email
                                </h3>
                                <p style={{ color: '#666', marginBottom: '30px' }}>
                                    Please wait while we verify your email address...
                                </p>
                            </div>
                        )}

                        {status === 'success' && (
                            <div>
                                <BsCheckCircleFill style={{ 
                                    fontSize: '60px', 
                                    color: '#52c41a', 
                                    marginBottom: '20px' 
                                }} />
                                <h3 style={{ color: '#52c41a', marginBottom: '20px' }}>
                                    Email Verified Successfully!
                                </h3>
                                <p style={{ color: '#666', marginBottom: '20px' }}>
                                    {message}
                                </p>
                                <p style={{ color: '#999', fontSize: '14px', marginBottom: '30px' }}>
                                    You will be redirected to login page in a few seconds...
                                </p>
                                <Link to="/">
                                    <button className="btn">Go to Login</button>
                                </Link>
                            </div>
                        )}

                        {status === 'error' && (
                            <div>
                                <BiErrorCircle style={{ 
                                    fontSize: '60px', 
                                    color: '#ff4d4f', 
                                    marginBottom: '20px' 
                                }} />
                                <h3 style={{ color: '#ff4d4f', marginBottom: '20px' }}>
                                    Verification Failed
                                </h3>
                                <p style={{ color: '#666', marginBottom: '30px' }}>
                                    {message}
                                </p>
                                
                                <div style={{ marginBottom: '20px' }}>
                                    <button 
                                        className="btn"
                                        onClick={handleResendVerification}
                                        disabled={isResending}
                                        style={{ marginRight: '10px' }}
                                    >
                                        <MdEmail style={{ marginRight: '5px' }} />
                                        {isResending ? 'Sending...' : 'Resend Verification'}
                                    </button>
                                    
                                    <Link to="/register">
                                        <button className="btn" style={{ backgroundColor: '#666' }}>
                                            Back to Register
                                        </button>
                                    </Link>
                                </div>

                                {resendMessage && (
                                    <p style={{ 
                                        color: resendMessage.includes('Failed') ? '#ff4d4f' : '#52c41a',
                                        fontSize: '14px',
                                        marginTop: '15px'
                                    }}>
                                        {resendMessage}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Token Debug Info (remove in production) */}
                        {process.env.NODE_ENV === 'development' && (
                            <div style={{ 
                                marginTop: '30px', 
                                padding: '10px', 
                                backgroundColor: '#f5f5f5', 
                                borderRadius: '5px',
                                fontSize: '12px',
                                color: '#666'
                            }}>
                                <strong>Debug Info:</strong><br />
                                Token: {token ? `${token.substring(0, 20)}...` : 'No token found'}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default EmailVerification;