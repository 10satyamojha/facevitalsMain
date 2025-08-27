import React, { useState, useEffect } from 'react';
import { Heart, Activity, Droplet, Wind, TrendingUp, TrendingDown, Calendar, Clock, User, AlertCircle, ChevronRight, MoreVertical } from 'lucide-react';

const HealthVitalsDashboard = () => {
  const [activeTab, setActiveTab] = useState('vitals');
  
  // Sample data for charts
  const [heartRateData, setHeartRateData] = useState([72, 75, 71, 78, 76, 74, 73]);
  const [bpData, setBpData] = useState({
    systolic: [120, 118, 122, 119, 121, 120, 119],
    diastolic: [80, 78, 82, 79, 81, 80, 79]
  });
  const [oxygenData, setOxygenData] = useState([98, 97, 98, 99, 97, 98, 98]);
  const [tempData, setTempData] = useState([98.6, 98.4, 98.7, 98.5, 98.6, 98.5, 98.6]);

  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --PrimaryColor: hsl(94, 59%, 35%);
      --HoverColor: #bdf094;
      --paleGreen: hsl(96, 75%, 89%);
      --whiteColor: hsl(0, 0%, 100%);
      --blackColor: hsl(0, 0%, 18%);
      --textColor: hsl(240, 1%, 48%);
      --bgColor: hsl(220, 10%, 94%);
      --greyText: rgb(190, 190, 190);
      --inputColor: hsl(330, 12%, 97%);
      --itemCardColor: hsl(120, 5%, 88%);
      --itemCardHover: hsl(120, 27%, 87%);
      --heartColor: #ff4757;
      --bpColor: #5f27cd;
      --tempColor: #ff9ff3;
      --oxygenColor: #00d2d3;
      
      --biggestFontSize: 2.5rem;
      --h1FontSize: 1.5rem;
      --h2FontSize: 1.25rem;
      --h3FontSize: 1rem;
      --normalFontSize: .938rem;
      --smallFontSize: .813rem;
      --smallestFontSize: .75rem;
    }

    .dashboard-container {
      min-height: 100vh;
      background: var(--bgColor);
      padding: 1.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }

    .tabs-container {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      background: var(--whiteColor);
      padding: 0.5rem;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }

    .tab-btn {
      padding: 0.75rem 1.5rem;
      background: transparent;
      border: none;
      border-radius: 8px;
      color: var(--textColor);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: var(--normalFontSize);
    }

    .tab-btn.active {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
    }

    .tab-btn:hover:not(.active) {
      background: var(--paleGreen);
    }

    /* Vitals Section Styles */
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
      background: rgba(82, 196, 26, 0.1);
      color: #52c41a;
    }

    .status-warning {
      background: rgba(250, 173, 20, 0.1);
      color: #faad14;
    }

    .status-danger {
      background: rgba(255, 77, 79, 0.1);
      color: #ff4d4f;
    }

    .mini-chart {
      height: 80px;
      margin-top: 1rem;
      position: relative;
      overflow: hidden;
    }

    .chart-line {
      stroke-width: 2;
      fill: none;
      stroke-linecap: round;
    }

    /* Activity Section Styles */
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

    .btn {
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

    .btn:hover {
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

    /* Listing Section Styles */
    .lisitingSection {
      background: var(--whiteColor);
      padding: 1.5rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .listing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .singleItem {
      position: relative;
      background: var(--inputColor);
      padding: 1rem;
      border-radius: 12px;
      text-align: center;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .singleItem:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      background: var(--itemCardHover);
    }

    .singleItem .icon {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      font-size: 1.2rem;
      color: var(--heartColor);
      cursor: pointer;
    }

    .singleItem img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 8px;
      margin: 0.5rem auto;
    }

    .singleItem h3 {
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-top: 0.5rem;
    }

    .sellers {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .topSellers, .featuredSellers {
      background: var(--inputColor);
      padding: 1.5rem;
      border-radius: 12px;
    }

    .card {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
      padding: 1rem;
      background: var(--whiteColor);
      border-radius: 10px;
    }

    .users {
      display: flex;
      margin-left: -10px;
    }

    .users img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      border: 2px solid var(--whiteColor);
      margin-left: -10px;
      object-fit: cover;
    }

    .cardText {
      flex: 1;
    }

    .cardText span {
      font-size: var(--normalFontSize);
      font-weight: 600;
      color: var(--blackColor);
    }

    .cardText small {
      display: block;
      font-size: var(--smallestFontSize);
      color: var(--textColor);
      margin-top: 0.3rem;
    }

    .date {
      color: var(--PrimaryColor);
      font-weight: 600;
    }

    .two-column-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    @media screen and (max-width: 968px) {
      .two-column-layout {
        grid-template-columns: 1fr;
      }
      
      .vitals-grid {
        grid-template-columns: 1fr;
      }
      
      .sellers {
        grid-template-columns: 1fr;
      }
    }

    @media screen and (max-width: 576px) {
      .dashboard-container {
        padding: 1rem;
      }
      
      .listing-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .tabs-container {
        overflow-x: auto;
      }
    }
  `;

  // Sample user images (using placeholder URLs)
  const users = [
    { id: 1, name: 'Aldi Rahman', image: 'https://i.pravatar.cc/150?img=1', activity: 'Completed morning workout', time: '2 min ago' },
    { id: 2, name: 'Dadang Supriatna', image: 'https://i.pravatar.cc/150?img=2', activity: 'Logged blood pressure', time: '15 min ago' },
    { id: 3, name: 'Gilbert Hutapea', image: 'https://i.pravatar.cc/150?img=3', activity: 'Updated health goals', time: '1 hour ago' },
    { id: 4, name: 'Sarah Johnson', image: 'https://i.pravatar.cc/150?img=4', activity: 'Synced fitness tracker', time: '2 hours ago' },
    { id: 5, name: 'Michael Chen', image: 'https://i.pravatar.cc/150?img=5', activity: 'Checked vitals', time: '3 hours ago' }
  ];

  const healthItems = [
    { id: 1, name: 'Heart Monitor', image: 'https://via.placeholder.com/150/ff6b6b/ffffff?text=Heart', liked: true },
    { id: 2, name: 'BP Tracker', image: 'https://via.placeholder.com/150/4ecdc4/ffffff?text=BP', liked: false },
    { id: 3, name: 'Oximeter', image: 'https://via.placeholder.com/150/45b7d1/ffffff?text=O2', liked: false },
    { id: 4, name: 'Thermometer', image: 'https://via.placeholder.com/150/f7b731/ffffff?text=Temp', liked: true }
  ];

  const VitalsTab = () => (
    <>
      <div className="vitals-grid">
        <div className="vital-card">
          <div className="vital-header">
            <div className="vital-title">
              <Heart size={20} color="#ff4757" />
              <span>Heart Rate</span>
            </div>
            <span className="vital-status status-normal">Normal</span>
          </div>
          <div className="vital-value" style={{ color: '#ff4757' }}>
            74 <span className="vital-unit">bpm</span>
          </div>
          <div className="mini-chart">
            <svg viewBox="0 0 300 80" width="100%" height="100%">
              <polyline
                className="chart-line"
                points={heartRateData.map((val, i) => `${i * 50},${80 - (val - 70) * 8}`).join(' ')}
                stroke="#ff4757"
                strokeWidth="2"
                fill="none"
              />
              {heartRateData.map((val, i) => (
                <circle key={i} cx={i * 50} cy={80 - (val - 70) * 8} r="3" fill="#ff4757" />
              ))}
            </svg>
          </div>
        </div>

        <div className="vital-card">
          <div className="vital-header">
            <div className="vital-title">
              <Droplet size={20} color="#5f27cd" />
              <span>Blood Pressure</span>
            </div>
            <span className="vital-status status-normal">Optimal</span>
          </div>
          <div className="vital-value" style={{ color: '#5f27cd' }}>
            120/80 <span className="vital-unit">mmHg</span>
          </div>
          <div className="mini-chart">
            <svg viewBox="0 0 300 80" width="100%" height="100%">
              <polyline
                className="chart-line"
                points={bpData.systolic.map((val, i) => `${i * 50},${80 - (val - 115) * 4}`).join(' ')}
                stroke="#5f27cd"
                strokeWidth="2"
                fill="none"
              />
              <polyline
                className="chart-line"
                points={bpData.diastolic.map((val, i) => `${i * 50},${80 - (val - 75) * 4}`).join(' ')}
                stroke="#8b5cf6"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div className="vital-card">
          <div className="vital-header">
            <div className="vital-title">
              <Wind size={20} color="#00d2d3" />
              <span>Oxygen Saturation</span>
            </div>
            <span className="vital-status status-normal">Excellent</span>
          </div>
          <div className="vital-value" style={{ color: '#00d2d3' }}>
            98 <span className="vital-unit">%</span>
          </div>
          <div className="mini-chart">
            <svg viewBox="0 0 300 80" width="100%" height="100%">
              <polyline
                className="chart-line"
                points={oxygenData.map((val, i) => `${i * 50},${80 - (val - 96) * 20}`).join(' ')}
                stroke="#00d2d3"
                strokeWidth="2"
                fill="none"
              />
              {oxygenData.map((val, i) => (
                <circle key={i} cx={i * 50} cy={80 - (val - 96) * 20} r="3" fill="#00d2d3" />
              ))}
            </svg>
          </div>
        </div>

        <div className="vital-card">
          <div className="vital-header">
            <div className="vital-title">
              <Activity size={20} color="#ff9ff3" />
              <span>Temperature</span>
            </div>
            <span className="vital-status status-normal">Normal</span>
          </div>
          <div className="vital-value" style={{ color: '#ff9ff3' }}>
            98.6 <span className="vital-unit">°F</span>
          </div>
          <div className="mini-chart">
            <svg viewBox="0 0 300 80" width="100%" height="100%">
              <polyline
                className="chart-line"
                points={tempData.map((val, i) => `${i * 50},${80 - (val - 98.3) * 100}`).join(' ')}
                stroke="#ff9ff3"
                strokeWidth="2"
                fill="none"
              />
              {tempData.map((val, i) => (
                <circle key={i} cx={i * 50} cy={80 - (val - 98.3) * 100} r="3" fill="#ff9ff3" />
              ))}
            </svg>
          </div>
        </div>
      </div>

      <div className="two-column-layout">
        <div className="activitySection">
          <div className="heading">
            <h1>Recent Activity</h1>
            <button className="btn">
              See All
              <ChevronRight size={16} />
            </button>
          </div>
          <div className="secContainer">
            {users.map(user => (
              <div key={user.id} className="singleCustomer">
                <img src={user.image} alt={user.name} />
                <div className="customerDetails">
                  <span className="name">{user.name}</span>
                  <small>{user.activity}</small>
                </div>
                <div className="duration">{user.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lisitingSection">
          <div className="heading">
            <h1>Health Devices</h1>
            <button className="btn">
              See All
              <ChevronRight size={16} />
            </button>
          </div>
          <div className="listing-grid">
            {healthItems.map(item => (
              <div key={item.id} className="singleItem">
                <Heart 
                  className="icon" 
                  fill={item.liked ? '#ff4757' : 'none'}
                  color="#ff4757"
                />
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
          <div className="sellers">
            <div className="topSellers">
              <div className="heading">
                <h3>Top Contributors</h3>
                <button className="btn">
                  See All
                  <ChevronRight size={16} />
                </button>
              </div>
              <div className="card">
                <div className="users">
                  {users.slice(0, 4).map(user => (
                    <img key={user.id} src={user.image} alt={user.name} />
                  ))}
                </div>
                <div className="cardText">
                  <span>
                    14,556 Activities logged <br />
                    <small>
                      21 Members <span className="date">7 Days</span>
                    </small>
                  </span>
                </div>
              </div>
            </div>
            <div className="featuredSellers">
              <div className="heading">
                <h3>Health Champions</h3>
                <button className="btn">
                  See All
                  <ChevronRight size={16} />
                </button>
              </div>
              <div className="card">
                <div className="users">
                  {users.slice(0, 4).reverse().map(user => (
                    <img key={user.id} src={user.image} alt={user.name} />
                  ))}
                </div>
                <div className="cardText">
                  <span>
                    28,556 Goals achieved <br />
                    <small>
                      26 Champions <span className="date">31 Days</span>
                    </small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const ActivityListingTab = () => (
    <div className="two-column-layout">
      <div className="activitySection">
        <div className="heading">
          <h1>Recent Activity</h1>
          <button className="btn">
            See All
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="secContainer">
          {[...users, ...users].map((user, index) => (
            <div key={`${user.id}-${index}`} className="singleCustomer">
              <img src={user.image} alt={user.name} />
              <div className="customerDetails">
                <span className="name">{user.name}</span>
                <small>{user.activity}</small>
              </div>
              <div className="duration">{user.time}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="lisitingSection">
        <div className="heading">
          <h1>My Listings</h1>
          <button className="btn">
            See All
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="listing-grid">
          {[...healthItems, ...healthItems].map((item, index) => (
            <div key={`${item.id}-${index}`} className="singleItem">
              <Heart 
                className="icon" 
                fill={item.liked ? '#ff4757' : 'none'}
                color="#ff4757"
              />
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
        <div className="sellers">
          <div className="topSellers">
            <div className="heading">
              <h3>Top Sellers</h3>
              <button className="btn">
                See All
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="card">
              <div className="users">
                {users.slice(0, 4).map(user => (
                  <img key={user.id} src={user.image} alt={user.name} />
                ))}
              </div>
              <div className="cardText">
                <span>
                  14,556 Items sold <br />
                  <small>
                    21 Sellers <span className="date">7 Days</span>
                  </small>
                </span>
              </div>
            </div>
          </div>
          <div className="featuredSellers">
            <div className="heading">
              <h3>Featured Sellers</h3>
              <button className="btn">
                See All
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="card">
              <div className="users">
                {users.slice(0, 4).reverse().map(user => (
                  <img key={user.id} src={user.image} alt={user.name} />
                ))}
              </div>
              <div className="cardText">
                <span>
                  28,556 Items sold <br />
                  <small>
                    26 Sellers <span className="date">31 Days</span>
                  </small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>{styles}</style>
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
            Activity & Listings
          </button>
        </div>

        {activeTab === 'vitals' ? <VitalsTab /> : <ActivityListingTab />}
      </div>
    </>
  );
};

export default HealthVitalsDashboard;