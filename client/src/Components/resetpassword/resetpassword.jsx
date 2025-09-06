import React, { useState, useEffect } from 'react';
import '../Register/Register.css'; // Same CSS file for consistent styling
import '../../App.css';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Axios from 'axios';
import video from '../../Assets/video.mp4';
import logo from '../../Assets/logo.png';
import { BsFillShieldLockFill, BsCheckCircleFill } from 'react-icons/bs';
import { MdLockReset } from 'react-icons/md';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [status, setStatus] = useState(''); // '', 'resetting', 'success', 'error'
    const [message, setMessage] = useState('');
    const [passwordErrors, setPasswordErrors] = useState([]);
    const navigateTo = useNavigate();
    const token = searchParams.get('token');

    useEffect(() => {
        if (!token) {
            setStatus('error');
            setMessage('Invalid reset link. Please request a new password reset.');
        }
    }, [token]);

    const validatePasswordMatch = () => {
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return false;
        }
        return true;
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        
        if (!validatePasswordMatch()) {
            setStatus('error');
            return;
        }

        setStatus('resetting');
        setMessage('');
        setPasswordErrors([]);

        try {
            const response = await Axios.post('https://facevital-backend-1.onrender.com/api/auth/reset-password', {
                token: token,
                password: password
            });
            
            setStatus('success');
            setMessage(response.data.message || 'Password reset successfully!');
            
            // Redirect to login after 3 seconds
            setTimeout(() => {
                navigateTo('/');
            }, 3000);
            
        } catch (error) {
            setStatus('error');
            if (error.response) {
                setMessage(error.response.data.message || 'Failed to reset password');
                if (error.response.data.requirements) {
                    setPasswordErrors(error.response.data.requirements);
                }
            } else {
                setMessage('Unable to connect to server. Please try again later.');
            }
        }
    };

    if (!token) {
        return (
            <div className="registerPage flex">
                <div className="container flex">
                    <div className="videoDiv">
                        <video src={video} autoPlay muted loop></video>
                    </div>
                    <div className="formDiv flex">
                        <div style={{
                            textAlign: 'center',
                            padding: '40px'
                        }}>
                            <BiErrorCircle style={{ fontSize: '60px', color: '#ff4d4f', marginBottom: '20px' }} />
                            <h3 style={{ color: '#333', marginBottom: '20px' }}>Invalid Reset Link</h3>
                            <p style={{ color: '#666', marginBottom: '30px' }}>
                                This password reset link is invalid or has expired.
                            </p>
                            <Link to="/forgot-password">
                                <button className="btn">Request New Reset Link</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="registerPage flex">
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title">Create New Password</h2>
                        <p>Choose a strong password to secure your account</p>
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
                        <h3>Reset Your Password</h3>
                    </div>

                    <form onSubmit={handleResetPassword} className="form grid">
                        {/* Instructions */}
                        <div style={{
                            padding: '15px',
                            backgroundColor: '#f0f5ff',
                            borderRadius: '8px',
                            border: '1px solid #adc6ff',
                            marginBottom: '20px'
                        }}>
                            <MdLockReset style={{ fontSize: '30px', color: '#2f54eb', marginBottom: '10px' }} />
                            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
                                Enter your new password below. Make sure it's strong and unique.
                            </p>
                        </div>

                        {/* New Password Input */}
                        <div className="inputDiv">
                            <label htmlFor="password">New Password</label>
                            <div className="input flex" style={{ position: 'relative' }}>
                                <BsFillShieldLockFill className="icon" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Enter new password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    disabled={status === 'resetting'}
                                    style={{ paddingRight: '40px' }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        padding: '5px'
                                    }}
                                >
                                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password Input */}
                        <div className="inputDiv">
                            <label htmlFor="confirmPassword">Confirm New Password</label>
                            <div className="input flex" style={{ position: 'relative' }}>
                                <BsFillShieldLockFill className="icon" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    placeholder="Confirm new password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    disabled={status === 'resetting'}
                                    style={{ paddingRight: '40px' }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        padding: '5px'
                                    }}
                                >
                                    {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                </button>
                            </div>
                        </div>

                        {/* Password Requirements */}
                        {passwordErrors.length > 0 && (
                            <div style={{
                                padding: '15px',
                                backgroundColor: '#fff2e8',
                                border: '1px solid #ffbb96',
                                borderRadius: '8px',
                                marginBottom: '15px'
                            }}>
                                <p style={{ color: '#ff4d4f', fontWeight: '500', marginBottom: '10px' }}>
                                    Password Requirements:
                                </p>
                                <ul style={{ marginLeft: '20px', color: '#666' }}>
                                    {passwordErrors.map((error, index) => (
                                        <li key={index} style={{ fontSize: '14px', marginBottom: '5px' }}>
                                            {error}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

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
                                <BsCheckCircleFill style={{ 
                                    fontSize: '24px', 
                                    color: '#52c41a', 
                                    marginBottom: '8px' 
                                }} />
                                <p style={{ color: '#52c41a', fontWeight: '500' }}>
                                    Password Reset Successful!
                                </p>
                                <p style={{ color: '#666', fontSize: '14px', marginTop: '5px' }}>
                                    {message}
                                </p>
                                <p style={{ color: '#999', fontSize: '12px', marginTop: '10px' }}>
                                    Redirecting to login page...
                                </p>
                            </div>
                        )}

                        {status === 'error' && message && !passwordErrors.length && (
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
                            disabled={status === 'resetting' || status === 'success'}
                            style={{ justifyContent: 'center' }}
                        >
                            <MdLockReset className="icon" style={{ marginRight: '10px' }} />
                            <span>
                                {status === 'resetting' ? 'Resetting...' : 'Reset Password'}
                            </span>
                        </button>

                        {/* Password Strength Tips */}
                        <div style={{
                            marginTop: '20px',
                            padding: '10px',
                            backgroundColor: '#fafafa',
                            borderRadius: '5px',
                            fontSize: '12px',
                            color: '#666'
                        }}>
                            <strong>Tips for a strong password:</strong>
                            <ul style={{ marginLeft: '20px', marginTop: '5px' }}>
                                <li>At least 8 characters long</li>
                                <li>Include uppercase and lowercase letters</li>
                                <li>Include numbers and special characters</li>
                                <li>Avoid common words or personal information</li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;