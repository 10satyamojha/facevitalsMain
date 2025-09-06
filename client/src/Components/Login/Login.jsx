import React, { useEffect, useState } from 'react';
import './Login.css';
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'
import video from '../../Assets/video.mp4'
import logo from '../../Assets/logo.png'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

const Login = () => {
  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigateTo = useNavigate();
  const [loginStatus, setLoginStatus] = useState('');
  const [statusHolder, setStatusHolder] = useState('message');
  const [isLoading, setIsLoading] = useState(false);

  const loginUser = (e) => {
    e.preventDefault();

    if (loginUserName.trim() === '' || loginPassword.trim() === '') {
      setLoginStatus('Please enter both username and password!');
      return;
    }

    setIsLoading(true);
    setLoginStatus('');

    Axios.post('https://facevital-backend-3.onrender.com/api/auth/login', {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword
    })
      .then((response) => {
        console.log('Login response:', response.data);

        if (response.data.success || response.data.token) {
          if (response.data.token) {
            localStorage.setItem('authToken', response.data.token);  // Store token as 'authToken'
            localStorage.setItem('user', JSON.stringify(response.data.user));
            console.log("token", response.data.token);
          }

          setLoginStatus('Login successful! Redirecting...');
          setTimeout(() => {
            navigateTo('/dashboard');
          }, 1500);
        } else {
          setLoginStatus('Login failed. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        if (error.response) {
          const errorMessage = error.response.data.message || 'Login failed';
          setLoginStatus(errorMessage);
        } else if (error.request) {
          setLoginStatus('Unable to connect to server. Please try again.');
        } else {
          setLoginStatus('An error occurred. Please try again.');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (loginStatus !== '') {
      setStatusHolder('showMessage');
      const timer = setTimeout(() => {
        setStatusHolder('message');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [loginStatus]);

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(e);
  }

    return (
        <div className="loginPage flex">
            <div className="container flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title">Health Vitals</h2>
                        <p>Adopt the peace of nature!</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Don't have an account?</span>
                        <Link to={'/register'}>
                            <button className="btn">Sign Up</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Welcome Back!</h3>
                    </div>

                    <form className="form grid" onSubmit={onSubmit}>
                        <span className={statusHolder}>{loginStatus}</span>

                        <div className="inputDiv">
                            <label htmlFor="username">Username or Email</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input 
                                    type="text" 
                                    id='username' 
                                    placeholder='Enter Username or Email'
                                    value={loginUserName}
                                    onChange={(event) => setLoginUserName(event.target.value)}
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className="icon" />
                                <input 
                                    type="password" 
                                    id='password' 
                                    placeholder='Enter Password'
                                    value={loginPassword}
                                    onChange={(event) => setLoginPassword(event.target.value)}
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <button 
                            type='submit' 
                            className='btn flex' 
                            disabled={isLoading}
                        >
                            <span>{isLoading ? 'Logging in...' : 'Login'}</span>
                            {!isLoading && <AiOutlineSwapRight className="icon" />}
                        </button>

                        <span className="forgotPassword">
                            Forgot your password? <Link to="/forgot-password">Click Here</Link>
                        </span>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login