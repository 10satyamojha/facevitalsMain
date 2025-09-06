import React, { useState } from 'react';
import './Register.css';
import '../../App.css'
import { Link, useNavigate} from 'react-router-dom';
import Axios from 'axios'
import video from '../../Assets/video.mp4'
import logo from '../../Assets/logo.png'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { MdMarkEmailRead } from 'react-icons/md'

const Register = () => {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigateTo = useNavigate();

    const createUser = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        
        try {
            // Send lowercase keys as expected by backend
            const response = await Axios.post('https://facevital-backend-1.onrender.com/api/auth/register', {
                email: email,        // lowercase 'email'
                userName: userName,  // lowercase 'userName'
                password: password   // lowercase 'password'
            })
            
            // Show success message
            alert(response.data.message || 'Registration successful! Please check your email to verify your account.')
            
            // Clear form and navigate
            setEmail('')
            setUserName('')
            setPassword('')
            navigateTo('/')
            
        } catch (error) {
            // Handle error response
            if (error.response) {
                setError(error.response.data.message || 'Registration failed')
                
                // If password validation failed, show requirements
                if (error.response.data.requirements) {
                    const reqList = error.response.data.requirements.join('\n')
                    setError(`Password requirements:\n${reqList}`)
                }
            } else if (error.request) {
                setError('No response from server. Please check if backend is running.')
            } else {
                setError('An error occurred. Please try again.')
            }
            console.error('Registration error:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="registerPage flex">
            <div className="container flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title">Create And Sell Extraordinary Products</h2>
                        <p>Adopt the peace of nature!</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Have an account?</span>
                        <Link to={'/'}>
                            <button className="btn">Login</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Let Us Know You!</h3>
                    </div>

                    <form onSubmit={createUser} className="form grid">
                        {error && (
                            <div className="errorDiv" style={{
                                color: 'red',
                                padding: '10px',
                                marginBottom: '10px',
                                border: '1px solid red',
                                borderRadius: '5px',
                                backgroundColor: '#ffebee',
                                whiteSpace: 'pre-line'
                            }}>
                                {error}
                            </div>
                        )}

                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <MdMarkEmailRead className="icon" />
                                <input 
                                    type="email" 
                                    id='email' 
                                    placeholder='Enter Email'
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required 
                                />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input 
                                    type="text" 
                                    id='username' 
                                    placeholder='Enter Username'
                                    value={userName}
                                    onChange={(event) => setUserName(event.target.value)}
                                    required 
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
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required 
                                />
                            </div>
                        </div>

                        <button 
                            type='submit' 
                            className='btn flex' 
                            disabled={loading}
                        >
                            <span>{loading ? 'Registering...' : 'Register'}</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>

                        <span className="forgotPassword">
                            Forgot your password? <a href="/forgot-password">Click Here</a>
                        </span>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Register;