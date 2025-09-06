import React, { useState, useEffect } from 'react'
import './sidebar.css'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../../Assets/logo.png'
import { IoMdSpeedometer } from 'react-icons/io'
import { MdHealthAndSafety } from 'react-icons/md'
import { BsActivity, BsQuestionCircle, BsClipboardData } from 'react-icons/bs'
import { AiOutlineBarChart } from 'react-icons/ai'
import { BiLogOutCircle, BiKey, BiUser } from 'react-icons/bi'
import { FaHeartbeat, FaWeight, FaRulerVertical } from 'react-icons/fa'
import { RiDashboardLine } from 'react-icons/ri'

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('dashboard')
  const [userProfile, setUserProfile] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Set active menu based on pathname
    const path = location.pathname
    if (path === '/dashboard') setActiveItem('dashboard')
    else if (path === '/dashboard/Camera') setActiveItem('camera')
    else if (path.startsWith('/dashboard/vitals')) setActiveItem('vitals')
    else if (path.startsWith('/dashboard/analytics')) setActiveItem('analytics')
    else if (path.startsWith('/dashboard/api-keys')) setActiveItem('api-keys')
    else if (path.startsWith('/dashboard/profile')) setActiveItem('profile')
    else if (path.startsWith('/dashboard/results')) setActiveItem('results')
    else if (path.startsWith('/dashboard/insights')) setActiveItem('insights')

    // Get user profile from localStorage
    const profile = localStorage.getItem('userProfile')
    if (profile) {
      setUserProfile(JSON.parse(profile))
    }
  }, [location.pathname])

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
    localStorage.removeItem('userProfile')
    navigate('/')
  }

  const handleNavigation = (path, itemName) => {
    setActiveItem(itemName)
    navigate(path)
  }

  return (
    <div className='sideBar grid'>
      <div className="logoDiv flex">
        <img src={logo} alt="Health Vitals Logo" />
        <h2>Health Vitals</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          MAIN MENU
        </h3>
        <ul className="menuLists grid">
          <li className={`listItem ${activeItem === 'dashboard' ? 'active' : ''}`}>
            <a 
              href="#" 
              className="menuLink flex"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('/dashboard', 'dashboard')
              }}
            >
              <RiDashboardLine className="icon" />
              <span className="smallText">
                Dashboard
              </span>
            </a>
          </li>
          <li className={`listItem ${activeItem === 'camera' ? 'active' : ''}`}>
            <a 
              href="#" 
              className="menuLink flex"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('/dashboard/Camera', 'camera')
              }}
            >
              <RiDashboardLine className="icon" />
              <span className="smallText">
                Live Health CheckUp
              </span>
            </a>
          </li>
          <li className={`listItem ${activeItem === 'vitals' ? 'active' : ''}`}>
            <a 
              href="#" 
              className="menuLink flex"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('/dashboard/vitals', 'vitals')
              }}
            >
              <FaHeartbeat className="icon" />
              <span className="smallText">
                Health Vitals
              </span>
            </a>
          </li>
          <li className={`listItem ${activeItem === 'analytics' ? 'active' : ''}`}>
            <a 
              href="#" 
              className="menuLink flex"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('/dashboard/analytics', 'analytics')
              }}
            >
              <AiOutlineBarChart className="icon" />
              <span className="smallText">
                Analytics
              </span>
            </a>
          </li>
          <li className={`listItem ${activeItem === 'results' ? 'active' : ''}`}>
            <a 
              href="#" 
              className="menuLink flex"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('/dashboard/results', 'results')
              }}
            >
              <BsClipboardData className="icon" />
              <span className="smallText">
                My Results
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS & API
        </h3>
        <ul className="menuLists grid">
          <li className={`listItem ${activeItem === 'api-keys' ? 'active' : ''}`}>
            <a 
              href="#" 
              className="menuLink flex"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('/dashboard/api-keys', 'api-keys')
              }}
            >
              <BiKey className="icon" />
              <span className="smallText">
                API Keys
              </span>
            </a>
          </li>
          <li className={`listItem ${activeItem === 'profile' ? 'active' : ''}`}>
            <a 
              href="#" 
              className="menuLink flex"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('/dashboard/profile', 'profile')
              }}
            >
              <BiUser className="icon" />
              <span className="smallText">
                Profile
              </span>
            </a>
          </li>
          <li className="listItem">
            <a 
              href="#" 
              className="menuLink flex"
              onClick={(e) => {
                e.preventDefault()
                window.open('https://docs.anura.ai', '_blank')
              }}
            >
              <BsQuestionCircle className="icon" />
              <span className="smallText">
                Help Center
              </span>
            </a>
          </li>
          <li className="listItem logout">
            <a 
              href="#" 
              className="menuLink flex"
              onClick={(e) => {
                e.preventDefault()
                handleLogout()
              }}
            >
              <BiLogOutCircle className="icon" />
              <span className="smallText">
                Log Out
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <MdHealthAndSafety className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Health Insights</h3>
          <p>Get AI-powered health recommendations based on your vitals and lifestyle.</p>
          <button 
            className="btn"
            onClick={() => handleNavigation('/dashboard/insights', 'insights')}
          >
            View Insights
          </button>
        </div>
      </div>
      {/* User Profile Summary */}
      {userProfile && (
        <div className="profileSummary">
          <div className="profileStats">
            <div className="stat">
              <FaWeight className="icon" />
              <span>{userProfile.weight} {userProfile.unit === 'metric' ? 'kg' : 'lbs'}</span>
            </div>
            <div className="stat">
              <FaRulerVertical className="icon" />
              <span>{userProfile.height} {userProfile.unit === 'metric' ? 'cm' : 'in'}</span>
            </div>
            {userProfile.bmi && (
              <div className="stat">
                <BsActivity className="icon" />
                <span>BMI: {userProfile.bmi}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar
