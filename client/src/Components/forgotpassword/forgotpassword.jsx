import React, { useState } from 'react';
import '../Register/Register.css'; // Same CSS file for consistent styling
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import video from '../../Assets/video.mp4';
import logo from '../../Assets/logo.png';
import { MdMarkEmailRead, MdLockReset } from 'react-icons/md';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
    const [message, setMessage] = useState('');
    const navigateTo = useNavigate();

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        
        if (!email) {
            setMessage('Please enter your email address');
            setStatus('error');
            return;
        }

        setStatus('sending');
        setMessage('');

        try {
            const response = await Axios.post('https://facevital-backend-1.onrender.com/api/auth/forgot-password', {
                email: email
            });
            
            setStatus('success');
            setMessage(response.data.message || 'If an account exists with this email, we have sent a password reset link.');
            setEmail('');
            
            // Optional: Redirect to login after 5 seconds
            setTimeout(() => {
                navigateTo('/');
            }, 5000);
            
        } catch (error) {
            setStatus('error');
            if (error.response) {
                setMessage(error.response.data.message || 'Failed to send reset email');
            } else {
                setMessage('Unable to connect to server. Please try again later.');
            }
        }
    };

    return (
        <div className="registerPage flex">
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title">Reset Your Password</h2>
                        <p>We'll help you get back to your account!</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Remember your password?</span>
                        <Link to={'/'}>
                            <button className="btn">Login</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Forgot Password?</h3>
                    </div>

                    <form onSubmit={handleForgotPassword} className="form grid">
                        {/* Instructions */}
                        <div style={{
                            padding: '15px',
                            backgroundColor: '#e6f7ff',
                            borderRadius: '8px',
                            border: '1px solid #91d5ff',
                            marginBottom: '20px'
                        }}>
                            <MdLockReset style={{ fontSize: '30px', color: '#1890ff', marginBottom: '10px' }} />
                            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
                                Enter your registered email address below. We'll send you a link to reset your password.
                            </p>
                        </div>

                        {/* Email Input */}
                        <div className="inputDiv">
                            <label htmlFor="email">Email Address</label>
                            <div className="input flex">
                                <MdMarkEmailRead className="icon" />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your registered email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={status === 'sending'}
                                />
                            </div>
                        </div>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <div style={{
                                padding: '15px',
                                backgroundColor: '#f6ffed',
                                border: '1px solid #b7eb8f',
                                borderRadius: '8px',
                                marginBottom: '15px',
                                textAlign: 'center'
                            }}>
                                <AiOutlineCheckCircle style={{ 
                                    fontSize: '24px', 
                                    color: '#52c41a', 
                                    marginBottom: '8px' 
                                }} />
                                <p style={{ color: '#52c41a', fontWeight: '500' }}>Email Sent Successfully!</p>
                                <p style={{ color: '#666', fontSize: '14px', marginTop: '5px' }}>
                                    {message}
                                </p>
                                <p style={{ color: '#999', fontSize: '12px', marginTop: '10px' }}>
                                    Redirecting to login page in 5 seconds...
                                </p>
                            </div>
                        )}

                        {status === 'error' && (
                            <div style={{
                                padding: '15px',
                                backgroundColor: '#fff2e8',
                                border: '1px solid #ffbb96',
                                borderRadius: '8px',
                                marginBottom: '15px',
                                textAlign: 'center'
                            }}>
                                <p style={{ color: '#ff4d4f' }}>{message}</p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="btn flex"
                            disabled={status === 'sending'}
                            style={{ justifyContent: 'center' }}
                        >
                            <AiOutlineSend className="icon" style={{ marginRight: '10px' }} />
                            <span>
                                {status === 'sending' ? 'Sending...' : 'Send Reset Link'}
                            </span>
                        </button>

                        {/* Links */}
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            marginTop: '20px',
                            fontSize: '14px'
                        }}>
                            <Link to="/register" style={{ 
                                color: '#666', 
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <BiArrowBack style={{ marginRight: '5px' }} />
                                Back to Register
                            </Link>
                            
                            <Link to="/" style={{ 
                                color: '#1890ff', 
                                textDecoration: 'none' 
                            }}>
                                Back to Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;