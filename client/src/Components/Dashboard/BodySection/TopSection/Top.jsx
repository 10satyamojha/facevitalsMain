import React, { useState, useEffect } from 'react';
import { Heart, Activity, Droplet, Wind, TrendingUp, TrendingDown, Calendar, Clock, User, AlertCircle, ChevronRight, MoreVertical, Search, MessageCircle, Bell, Plus, BarChart3, Weight, Ruler, ArrowRight, Loader } from 'lucide-react';

const HealthVitalsDashboard = () => {
  const [activeTab, setActiveTab] = useState('vitals');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // State for API data
  const [vitalsData, setVitalsData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [activityData, setActivityData] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [apiUsage, setApiUsage] = useState(null);

  // Updated fetch using absolute URL to backend API
  const fetchProfileData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('http://localhost:5000/api/profile/getProfile', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Failed to fetch profile');
      const data = await response.json();
      setProfileData(data);
    } catch (err) {
      console.error('Profile fetch error:', err);
      setProfileData(null);
    }
  };

  const fetchVitalsData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('http://localhost:5000/api/vitals/latest', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Failed to fetch vitals');
      const data = await response.json();
      setVitalsData(data);
    } catch (err) {
      console.error('Vitals fetch error:', err);
      setVitalsData(null);
    }
  };

  const fetchActivityData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('http://localhost:5000/api/activity/recent', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Failed to fetch activity');
      const data = await response.json();
      setActivityData(data);
    } catch (err) {
      console.error('Activity fetch error:', err);
      setActivityData([]);
    }
  };

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('http://localhost:5000/api/notifications', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Failed to fetch notifications');
      const data = await response.json();
      setNotifications(data);
    } catch (err) {
      console.error('Notifications fetch error:', err);
      setNotifications([]);
    }
  };

  const fetchApiUsage = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('http://localhost:5000/api/usage-stats', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Failed to fetch API usage');
      const data = await response.json();
      setApiUsage(data);
    } catch (err) {
      console.error('API usage fetch error:', err);
      setApiUsage(null);
    }
  };

  useEffect(() => {
    const initializeData = async () => {
      setLoading(true);
      try {
        await Promise.all([
          fetchProfileData(),
          fetchVitalsData(),
          fetchActivityData(),
          fetchNotifications(),
          fetchApiUsage()
        ]);
      } catch (err) {
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    initializeData();
  }, []);

  // Helper functions
  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getBMIStatus = (bmi) => {
    if (!bmi) return 'Not calculated';
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  const getBMIColor = (bmi) => {
    if (!bmi) return '#718096';
    if (bmi < 18.5) return '#f39c12';
    if (bmi < 25) return '#5eaa3c';
    if (bmi < 30) return '#e67e22';
    return '#e74c3c';
  };

  // Add new vitals entry
  const addVitals = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('/api/vitals', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          // Add vital signs data here
        })
      });
      
      if (!response.ok) throw new Error('Failed to add vitals');
      await fetchVitalsData(); // Refresh data
    } catch (err) {
      console.error('Add vitals error:', err);
    }
  };

  if (loading) {
    return (
      <div className="dashboard-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <Loader className="spinner" size={48} />
          <p style={{ marginTop: '1rem', color: 'var(--textColor)' }}>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <AlertCircle size={48} color="#e74c3c" />
          <p style={{ marginTop: '1rem', color: '#e74c3c' }}>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: 'var(--PrimaryColor)', color: 'white', border: 'none', borderRadius: '8px' }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const TopSection = () => (
    <div className="topSection">
      <div className="headerSection">
        <div className="title">
          <h1>{getTimeGreeting()}, {profileData?.nickname || 'User'}!</h1>
          <p>Monitor your health vitals and get AI-powered insights</p>
        </div>

        <div className="searchBar">
          <input 
            type="text" 
            placeholder="Search health data, insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="icon" size={20} />
        </div>

        <div className="adminDiv">
          <div className="icon-btn">
            <MessageCircle size={20} />
          </div>
          <div className="notification-wrapper">
            <div className="icon-btn">
              <Bell size={20} />
            </div>
            {notifications.filter(n => !n.read).length > 0 && (
              <span className="notification-badge">
                {notifications.filter(n => !n.read).length}
              </span>
            )}
          </div>
          <div className="adminImage">
            <img src="https://i.pravatar.cc/150?img=8" alt="User Avatar" />
          </div>
        </div>
      </div>

      <div className="cardSection">
        <div className="rightCard">
          <h1>AI-Powered Health Monitoring</h1>
          <p>Get personalized health insights based on your vitals, lifestyle, and medical history using advanced AI technology!</p>
          
          <div className="buttons">
            <button className="btn primary" onClick={addVitals}>
              <Plus size={18} />
              Add Vitals
            </button>
            <button className="btn transparent" onClick={() => setActiveTab('activity')}>
              <BarChart3 size={18} />
              View Analytics
            </button>
          </div>

          <div className="health-animation">
            <Heart className="heartbeat-icon" />
          </div>
        </div>

        <div className="leftCard">
          <div className="health-stats">
            <h1>My Health Stats</h1>
            
            <div className="stats-grid">
              <div className="stat-item">
                <Weight className="stat-icon" />
                <span className="stat-value">{profileData?.weight || 'N/A'}</span>
                <span className="stat-unit">{profileData?.unit === 'metric' ? 'kg' : 'lbs'}</span>
              </div>
              
              <div className="stat-item">
                <Ruler className="stat-icon" />
                <span className="stat-value">{profileData?.height || 'N/A'}</span>
                <span className="stat-unit">{profileData?.unit === 'metric' ? 'cm' : 'in'}</span>
              </div>
              
              <div className="stat-item">
                <Activity className="stat-icon" />
                <span className="stat-value" style={{ color: getBMIColor(profileData?.bmi) }}>
                  {profileData?.bmi || 'N/A'}
                </span>
                <span className="stat-unit">BMI</span>
                <small className="bmi-status" style={{ color: getBMIColor(profileData?.bmi) }}>
                  {getBMIStatus(profileData?.bmi)}
                </small>
              </div>
            </div>

            <span className="link" onClick={() => setActiveTab('activity')}>
              <BarChart3 size={18} />
              View detailed analytics
              <ArrowRight size={18} />
            </span>
          </div>

          <div className="api-stats">
            <h3>API Usage</h3>
            <div className="usage-item">
              <span className="usage-label">This Month</span>
              <span className="usage-value">{apiUsage?.currentMonth || 0} requests</span>
            </div>
            <div className="usage-item">
              <span className="usage-label">Rate Limit</span>
              <span className="usage-value">{apiUsage?.limit || 10000}/month</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${apiUsage?.percentage || 0}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const VitalCard = ({ title, icon, value, unit, status, color, trend = [] }) => (
    <div className="vital-card">
      <div className="vital-header">
        <div className="vital-title">
          {icon}
          <span>{title}</span>
        </div>
        <span className={`vital-status status-${status === 'normal' || status === 'optimal' || status === 'excellent' ? 'normal' : 'warning'}`}>
          {status}
        </span>
      </div>
      <div className="vital-value" style={{ color }}>
        {value} <span className="vital-unit">{unit}</span>
      </div>
      {trend.length > 0 && (
        <div className="mini-chart">
          <svg viewBox="0 0 300 80" width="100%" height="100%">
            <polyline
              points={trend.map((val, i) => {
                const baseValue = Math.min(...trend);
                const maxValue = Math.max(...trend);
                const range = maxValue - baseValue || 1;
                return `${i * (300 / (trend.length - 1))},${80 - ((val - baseValue) / range) * 60}`;
              }).join(' ')}
              stroke={color}
              strokeWidth="2"
              fill="none"
            />
            {trend.map((val, i) => {
              const baseValue = Math.min(...trend);
              const maxValue = Math.max(...trend);
              const range = maxValue - baseValue || 1;
              return (
                <circle 
                  key={i} 
                  cx={i * (300 / (trend.length - 1))} 
                  cy={80 - ((val - baseValue) / range) * 60} 
                  r="3" 
                  fill={color} 
                />
              );
            })}
          </svg>
        </div>
      )}
    </div>
  );

  const VitalsTab = () => (
    <>
      <TopSection />
      
      <div className="vitals-grid">
        {vitalsData && (
          <>
            <VitalCard
              title="Heart Rate"
              icon={<Heart size={20} color="#ff4757" />}
              value={vitalsData.heartRate?.current}
              unit="bpm"
              status={vitalsData.heartRate?.status}
              color="#ff4757"
              trend={vitalsData.heartRate?.trend}
            />
            <VitalCard
              title="Blood Pressure"
              icon={<Droplet size={20} color="#5f27cd" />}
              value={`${vitalsData.bloodPressure?.systolic}/${vitalsData.bloodPressure?.diastolic}`}
              unit="mmHg"
              status={vitalsData.bloodPressure?.status}
              color="#5f27cd"
              trend={vitalsData.bloodPressure?.trend?.systolic}
            />
            <VitalCard
              title="Oxygen Saturation"
              icon={<Wind size={20} color="#00d2d3" />}
              value={vitalsData.oxygenSaturation?.current}
              unit="%"
              status={vitalsData.oxygenSaturation?.status}
              color="#00d2d3"
              trend={vitalsData.oxygenSaturation?.trend}
            />
            <VitalCard
              title="Temperature"
              icon={<Activity size={20} color="#ff9ff3" />}
              value={vitalsData.temperature?.current}
              unit="°F"
              status={vitalsData.temperature?.status}
              color="#ff9ff3"
              trend={vitalsData.temperature?.trend}
            />
          </>
        )}
      </div>

      <div className="two-column-layout">
        <div className="activitySection">
          <div className="heading">
            <h1>Recent Activity</h1>
            <button className="btn-secondary" onClick={fetchActivityData}>
              Refresh
              <ChevronRight size={16} />
            </button>
          </div>
          <div className="secContainer">
            {activityData.map(activity => (
              <div key={activity.id} className="singleCustomer">
                <img src={activity.avatar} alt={activity.user} />
                <div className="customerDetails">
                  <span className="name">{activity.user}</span>
                  <small>{activity.activity}</small>
                </div>
                <div className="duration">{activity.timestamp}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lisitingSection">
          <div className="heading">
            <h1>Health Insights</h1>
            <button className="btn-secondary">
              View All
              <ChevronRight size={16} />
            </button>
          </div>
          <div className="insights-container">
            <div className="insight-card">
              <Heart className="insight-icon" />
              <div className="insight-content">
                <h4>Heart Rate Trend</h4>
                <p>Your resting heart rate has improved by 5% this month</p>
                <span className="insight-date">Today</span>
              </div>
            </div>
            <div className="insight-card">
              <Activity className="insight-icon" />
              <div className="insight-content">
                <h4>BMI Status</h4>
                <p>Maintaining healthy BMI range consistently</p>
                <span className="insight-date">This week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const ActivityListingTab = () => (
    <>
      <TopSection />
      
      <div className="two-column-layout">
        <div className="activitySection">
          <div className="heading">
            <h1>All Activities</h1>
            <button className="btn-secondary" onClick={fetchActivityData}>
              Refresh
              <ChevronRight size={16} />
            </button>
          </div>
          <div className="secContainer">
            {activityData.map((activity, index) => (
              <div key={`${activity.id}-${index}`} className="singleCustomer">
                <img src={activity.avatar} alt={activity.user} />
                <div className="customerDetails">
                  <span className="name">{activity.user}</span>
                  <small>{activity.activity}</small>
                </div>
                <div className="duration">{activity.timestamp}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lisitingSection">
          <div className="heading">
            <h1>Health Analytics</h1>
            <button className="btn-secondary">
              Export Data
              <ChevronRight size={16} />
            </button>
          </div>
          <div className="analytics-summary">
            <div className="summary-card">
              <div className="summary-header">
                <h4>Weekly Summary</h4>
                <TrendingUp className="trend-icon" color="var(--PrimaryColor)" />
              </div>
              <div className="summary-stats">
                <div className="stat">
                  <span className="stat-label">Avg Heart Rate</span>
                  <span className="stat-value">74 bpm</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Blood Pressure</span>
                  <span className="stat-value">120/80</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="dashboard-container">
      <div className="tabs-container">
        <button 
          className={`tab-btn ${activeTab === 'vitals' ? 'active' : ''}`}
          onClick={() => setActiveTab('vitals')}
        >
          Health Vitals Dashboard
        </button>
        <button 
          className={`tab-btn ${activeTab === 'activity' ? 'active' : ''}`}
          onClick={() => setActiveTab('activity')}
        >
          Activity & Analytics
        </button>
      </div>

      {activeTab === 'vitals' ? <VitalsTab /> : <ActivityListingTab />}

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --PrimaryColor: #5eaa3c;
          --HoverColor: #4a8530;
          --paleGreen: #f0f8eb;
          --whiteColor: #ffffff;
          --blackColor: #2c3e50;
          --greyText: #718096;
          --textColor: #64748b;
          --bgColor: #f8fafc;
          --inputColor: #f1f5f9;
          --itemCardHover: #e2e8f0;
          --h1FontSize: 2rem;
          --h2FontSize: 1.5rem;
          --h3FontSize: 1.25rem;
          --normalFontSize: 1rem;
          --smallFontSize: 0.875rem;
          --smallestFontSize: 0.75rem;
          --biggestFontSize: 2.5rem;
        }

        .dashboard-container {
      
          background: var(--bgColor);
          padding: 1.5rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        .spinner {
          animation: spin 1s linear infinite;
          color: var(--PrimaryColor);
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Top Section Styles */
        .topSection {
          margin-bottom: 2rem;
        }

        .headerSection {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .title h1 {
          font-size: var(--h1FontSize);
          color: var(--blackColor);
          font-weight: 700;
          margin-bottom: 0.3rem;
        }

        .title p {
          font-size: var(--normalFontSize);
          color: var(--textColor);
          font-weight: 500;
        }

        .searchBar {
          display: flex;
          align-items: center;
          padding: 0.8rem 1.5rem;
          background: var(--whiteColor);
          border-radius: 12px;
          gap: 1rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          min-width: 300px;
        }

        .searchBar input {
          border: none;
          outline: none;
          background: none;
          flex: 1;
          font-size: var(--normalFontSize);
          color: var(--blackColor);
        }

        .searchBar input::placeholder {
          color: var(--greyText);
        }

        .searchBar .icon {
          color: var(--textColor);
          font-size: 1.2rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .searchBar .icon:hover {
          color: var(--PrimaryColor);
        }

        .adminDiv {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .notification-wrapper {
          position: relative;
        }

        .adminDiv .icon-btn {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--whiteColor);
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          color: var(--textColor);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .adminDiv .icon-btn:hover {
          color: var(--PrimaryColor);
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(0,0,0,0.12);
        }

        .notification-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 18px;
          height: 18px;
          background: var(--PrimaryColor);
          color: var(--whiteColor);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
        }

        .adminImage {
          width: 45px;
          height: 45px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .adminImage:hover {
          transform: scale(1.05);
        }

        .adminImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Card Section */
        .cardSection {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }

        .rightCard {
          flex: 1.5;
          background: linear-gradient(135deg, var(--PrimaryColor), var(--HoverColor));
          padding: 2.5rem;
          border-radius: 16px;
          color: var(--whiteColor);
          position: relative;
          overflow: hidden;
          min-height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(94, 170, 60, 0.25);
        }

        .rightCard::before {
          content: '';
          position: absolute;
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          top: -100px;
          right: -50px;
        }

        .rightCard h1 {
          font-size: var(--h1FontSize);
          font-weight: 700;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .rightCard p {
          font-size: var(--normalFontSize);
          margin-bottom: 2rem;
          opacity: 0.95;
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }

        .buttons {
          display: flex;
          gap: 1rem;
          position: relative;
          z-index: 1;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-size: var(--normalFontSize);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          outline: none;
        }

        .btn.primary {
          background: var(--whiteColor);
          color: var(--PrimaryColor);
        }

        .btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .btn.transparent {
          background: transparent;
          border: 2px solid var(--whiteColor);
          color: var(--whiteColor);
        }

        .btn.transparent:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .health-animation {
          position: absolute;
          bottom: 20px;
          right: 20px;
          z-index: 0;
        }

        .heartbeat-icon {
          font-size: 3rem;
          opacity: 0.2;
          animation: heartbeat 2s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .leftCard {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .health-stats {
          background: var(--paleGreen);
          padding: 2rem;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
        }

        .health-stats h1 {
          font-size: var(--h2FontSize);
          color: var(--blackColor);
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .stat-item {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .stat-icon {
          font-size: 1.5rem;
          color: var(--PrimaryColor);
          opacity: 0.8;
        }

        .stat-value {
          font-size: var(--h1FontSize);
          font-weight: 700;
          color: var(--blackColor);
        }

        .stat-unit {
          font-size: var(--smallFontSize);
          color: var(--textColor);
          font-weight: 500;
        }

        .bmi-status {
          font-size: var(--smallestFontSize);
          font-weight: 600;
          margin-top: 0.2rem;
        }

        .link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--blackColor);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .link:hover {
          color: var(--PrimaryColor);
        }

        .link:hover .icon:last-child {
          transform: translateX(5px);
        }

        .api-stats {
          background: var(--whiteColor);
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .api-stats h3 {
          font-size: var(--h3FontSize);
          color: var(--blackColor);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .usage-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.8rem;
        }

        .usage-label {
          font-size: var(--smallFontSize);
          color: var(--textColor);
        }

        .usage-value {
          font-size: var(--smallFontSize);
          font-weight: 600;
          color: var(--blackColor);
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: var(--inputColor);
          border-radius: 8px;
          overflow: hidden;
        }

        .progress {
          height: 100%;
          background: var(--PrimaryColor);
          border-radius: 8px;
          transition: width 0.3s ease;
        }

        /* Tabs */
        .tabs-container {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          background: var(--whiteColor);
          padding: 0.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .tab-btn {
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: none;
          border-radius: 12px;
          color: var(--textColor);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: var(--normalFontSize);
        }

        .tab-btn.active {
          background: var(--PrimaryColor);
          color: var(--whiteColor);
          box-shadow: 0 2px 8px rgba(94, 170, 60, 0.25);
        }

        .tab-btn:hover:not(.active) {
          background: var(--paleGreen);
          color: var(--PrimaryColor);
        }

        /* Vitals Grid */
        .vitals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .vital-card {
          background: var(--whiteColor);
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .vital-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }

        .vital-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .vital-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: var(--normalFontSize);
          color: var(--textColor);
          font-weight: 500;
        }

        .vital-value {
          font-size: var(--biggestFontSize);
          font-weight: 700;
          margin: 0.5rem 0;
        }

        .vital-unit {
          font-size: var(--smallFontSize);
          color: var(--textColor);
          font-weight: 400;
        }

        .vital-status {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: var(--smallestFontSize);
          font-weight: 600;
        }

        .status-normal {
          background: var(--paleGreen);
          color: var(--PrimaryColor);
        }

        .status-warning {
          background: rgba(255, 193, 7, 0.1);
          color: #ffc107;
        }

        .mini-chart {
          height: 80px;
          margin-top: 1rem;
          position: relative;
          overflow: hidden;
        }

        /* Activity Section */
        .activitySection {
          background: var(--whiteColor);
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .heading {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .heading h1 {
          font-size: var(--h2FontSize);
          color: var(--blackColor);
          font-weight: 700;
        }

        .heading h3 {
          font-size: var(--h3FontSize);
          color: var(--blackColor);
          font-weight: 600;
        }

        .btn-secondary {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid var(--greyText);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          color: var(--textColor);
          font-size: var(--smallFontSize);
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .btn-secondary:hover {
          border-color: var(--PrimaryColor);
          color: var(--PrimaryColor);
          background: var(--paleGreen);
        }

        .secContainer {
          display: grid;
          gap: 1rem;
        }

        .singleCustomer {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 1rem;
          border-radius: 12px;
          transition: background 0.3s ease;
        }

        .singleCustomer:hover {
          background: var(--inputColor);
        }

        .singleCustomer img {
          width: 45px;
          height: 45px;
          object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin-right: 1rem;
        }

        .customerDetails {
          flex: 1;
        }

        .customerDetails .name {
          font-size: var(--h3FontSize);
          font-weight: 600;
          color: var(--blackColor);
          display: block;
          margin-bottom: 0.2rem;
        }

        .customerDetails small {
          font-weight: 400;
          color: var(--textColor);
          font-size: var(--smallFontSize);
        }

        .duration {
          color: var(--greyText);
          font-weight: 400;
          font-size: var(--smallestFontSize);
        }

        /* Listing Section */
        .lisitingSection {
          background: var(--whiteColor);
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .insights-container {
          display: grid;
          gap: 1rem;
        }

        .insight-card {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: var(--inputColor);
          border-radius: 12px;
          transition: background 0.3s ease;
        }

        .insight-card:hover {
          background: var(--paleGreen);
        }

        .insight-icon {
          color: var(--PrimaryColor);
          margin-top: 0.25rem;
        }

        .insight-content h4 {
          color: var(--blackColor);
          font-size: var(--normalFontSize);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .insight-content p {
          color: var(--textColor);
          font-size: var(--smallFontSize);
          margin-bottom: 0.5rem;
        }

        .insight-date {
          color: var(--greyText);
          font-size: var(--smallestFontSize);
        }

        .analytics-summary {
          display: grid;
          gap: 1.5rem;
        }

        .summary-card {
          background: var(--paleGreen);
          padding: 1.5rem;
          border-radius: 12px;
        }

        .summary-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .summary-header h4 {
          color: var(--blackColor);
          font-size: var(--h3FontSize);
          font-weight: 600;
        }

        .trend-icon {
          font-size: 1.5rem;
        }

        .summary-stats {
          display: grid;
          gap: 0.75rem;
        }

        .stat {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-label {
          color: var(--textColor);
          font-size: var(--smallFontSize);
        }

        .stat-value {
          color: var(--blackColor);
          font-size: var(--normalFontSize);
          font-weight: 600;
        }

        .two-column-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        @media screen and (max-width: 990px) {
          .cardSection {
            flex-direction: column;
          }
          
          .rightCard, .leftCard {
            width: 100%;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media screen and (max-width: 918px) {
          .searchBar {
            display: none;
          }
          
          .two-column-layout {
            grid-template-columns: 1fr;
          }
          
          .vitals-grid {
            grid-template-columns: 1fr;
          }
        }

        @media screen and (max-width: 576px) {
          .dashboard-container {
            padding: 1rem;
          }
          
          .adminDiv {
            display: none;
          }
          
          .title {
            text-align: center;
          }
          
          .buttons {
            flex-direction: column;
          }
          
          .btn {
            width: 100%;
            justify-content: center;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default HealthVitalsDashboard;