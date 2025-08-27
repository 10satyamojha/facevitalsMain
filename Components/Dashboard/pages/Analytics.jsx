import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, PieChart, Pie, Cell 
} from 'recharts';
import { TrendingUp, TrendingDown, Minus, BarChart3, Activity, Info, AlertTriangle, CheckCircle } from 'lucide-react';

const AnalyticsPage = () => {
  const [vitalHistory, setVitalHistory] = useState([]);
  const [timeRange, setTimeRange] = useState('7days');
  const [selectedVital, setSelectedVital] = useState('heartRate');

  useEffect(() => {
    const history = localStorage.getItem('vitalHistory');
    if (history) {
      setVitalHistory(JSON.parse(history));
    }
  }, []);

  const chartData = vitalHistory.slice(0, 10).reverse().map((vital, index) => ({
    name: `Day ${index + 1}`,
    heartRate: parseInt(vital.heartRate) || 0,
    systolic: parseInt(vital.bloodPressureSystolic) || 0,
    diastolic: parseInt(vital.bloodPressureDiastolic) || 0,
    temperature: parseFloat(vital.temperature) || 0,
    oxygenSaturation: parseInt(vital.oxygenSaturation) || 0,
    weight: parseFloat(vital.weight) || 0
  }));

  const getTrend = (data, key) => {
    if (data.length < 2) return { trend: 'stable', percentage: 0 };
    
    const latest = data[data.length - 1][key];
    const previous = data[data.length - 2][key];
    
    if (latest > previous) return { trend: 'up', percentage: ((latest - previous) / previous * 100).toFixed(1) };
    if (latest < previous) return { trend: 'down', percentage: ((previous - latest) / previous * 100).toFixed(1) };
    return { trend: 'stable', percentage: 0 };
  };

  const heartRateTrend = getTrend(chartData, 'heartRate');
  const weightTrend = getTrend(chartData, 'weight');
  const tempTrend = getTrend(chartData, 'temperature');

  const healthScoreData = [
    { name: 'Excellent', value: 25, color: '#52c41a' },
    { name: 'Good', value: 45, color: '#00d2d3' },
    { name: 'Average', value: 20, color: '#f39c12' },
    { name: 'Needs Attention', value: 10, color: '#ff4757' }
  ];

  const styles = `
    .analytics {
      min-height: 100vh;
      background: var(--bgColor);
      padding: 1.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }

    .analyticsHeader {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .analyticsHeader h1 {
      font-size: var(--h1FontSize);
      color: var(--blackColor);
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .timeRangeSelect {
      padding: 0.75rem 1rem;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      font-size: var(--normalFontSize);
      background: var(--whiteColor);
      color: var(--blackColor);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .timeRangeSelect:hover {
      border-color: var(--PrimaryColor);
    }

    .timeRangeSelect:focus {
      outline: none;
      border-color: var(--PrimaryColor);
      box-shadow: 0 0 0 3px rgba(94, 170, 60, 0.1);
    }

    .trendsGrid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .trendCard {
      background: var(--whiteColor);
      padding: 1.5rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .trendCard:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    }

    .trendHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .trendHeader h3 {
      font-size: var(--h3FontSize);
      color: var(--textColor);
      font-weight: 500;
    }

    .trendIndicator {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: var(--smallFontSize);
      font-weight: 600;
    }

    .trendIndicator.up {
      background: rgba(82, 196, 26, 0.1);
      color: #52c41a;
    }

    .trendIndicator.down {
      background: rgba(255, 77, 79, 0.1);
      color: #ff4d4f;
    }

    .trendIndicator.stable {
      background: rgba(250, 173, 20, 0.1);
      color: #faad14;
    }

    .currentValue {
      font-size: var(--biggestFontSize);
      font-weight: 700;
      color: var(--blackColor);
      margin: 0;
    }

    .chartsSection {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .chartContainer {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .chartContainer h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    .chartControls {
      margin-bottom: 1rem;
    }

    .chartControls select {
      padding: 0.5rem 1rem;
      border: 1px solid var(--greyText);
      border-radius: 6px;
      font-size: var(--smallFontSize);
      background: var(--whiteColor);
      color: var(--blackColor);
      cursor: pointer;
    }

    .comparisonChart {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      margin-bottom: 2rem;
    }

    .comparisonChart h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    .insightsSection {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .insightsSection h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .insightsList {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .insightItem {
      padding: 1.5rem;
      border-radius: 12px;
      border-left: 4px solid;
      background: var(--inputColor);
      transition: transform 0.3s ease;
    }

    .insightItem:hover {
      transform: translateX(5px);
    }

    .insightItem.positive {
      border-left-color: #52c41a;
      background: rgba(82, 196, 26, 0.05);
    }

    .insightItem.warning {
      border-left-color: #faad14;
      background: rgba(250, 173, 20, 0.05);
    }

    .insightItem.info {
      border-left-color: #00d2d3;
      background: rgba(0, 210, 211, 0.05);
    }

    .insightItem h4 {
      font-size: var(--h3FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .insightItem p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      line-height: 1.6;
      margin: 0;
    }

    .icon-insight {
      width: 20px;
      height: 20px;
    }

    /* Custom Recharts Styles */
    .recharts-cartesian-grid-horizontal line,
    .recharts-cartesian-grid-vertical line {
      stroke: var(--inputColor);
    }

    .recharts-text {
      fill: var(--textColor);
      font-size: var(--smallFontSize);
    }

    .recharts-tooltip-wrapper {
      outline: none !important;
    }

    .recharts-default-tooltip {
      background: var(--whiteColor) !important;
      border: 1px solid var(--inputColor) !important;
      border-radius: 8px !important;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important;
    }

    .recharts-tooltip-label {
      color: var(--blackColor) !important;
      font-weight: 600 !important;
      margin-bottom: 0.5rem !important;
    }

    .recharts-tooltip-item {
      color: var(--textColor) !important;
    }

    @media screen and (max-width: 768px) {
      .chartsSection {
        grid-template-columns: 1fr;
      }

      .trendsGrid {
        grid-template-columns: 1fr;
      }

      .insightsList {
        grid-template-columns: 1fr;
      }

      .analyticsHeader {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
      }

      .timeRangeSelect {
        width: 100%;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="analytics">
        <div className="analyticsHeader">
          <h1>
            <BarChart3 size={28} color="var(--PrimaryColor)" />
            Health Analytics
          </h1>
          <div className="controls">
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              className="timeRangeSelect"
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
            </select>
          </div>
        </div>

        <div className="trendsGrid">
          <div className="trendCard">
            <div className="trendHeader">
              <h3>Heart Rate Trend</h3>
              <div className={`trendIndicator ${heartRateTrend.trend}`}>
                {heartRateTrend.trend === 'up' && <TrendingUp size={16} />}
                {heartRateTrend.trend === 'down' && <TrendingDown size={16} />}
                {heartRateTrend.trend === 'stable' && <Minus size={16} />}
                <span>{heartRateTrend.percentage}%</span>
              </div>
            </div>
            <p className="currentValue">
              {chartData.length > 0 ? chartData[chartData.length - 1].heartRate : '--'} BPM
            </p>
          </div>

          <div className="trendCard">
            <div className="trendHeader">
              <h3>Weight Trend</h3>
              <div className={`trendIndicator ${weightTrend.trend}`}>
                {weightTrend.trend === 'up' && <TrendingUp size={16} />}
                {weightTrend.trend === 'down' && <TrendingDown size={16} />}
                {weightTrend.trend === 'stable' && <Minus size={16} />}
                <span>{weightTrend.percentage}%</span>
              </div>
            </div>
            <p className="currentValue">
              {chartData.length > 0 ? chartData[chartData.length - 1].weight : '--'} kg
            </p>
          </div>

          <div className="trendCard">
            <div className="trendHeader">
              <h3>Temperature Trend</h3>
              <div className={`trendIndicator ${tempTrend.trend}`}>
                {tempTrend.trend === 'up' && <TrendingUp size={16} />}
                {tempTrend.trend === 'down' && <TrendingDown size={16} />}
                {tempTrend.trend === 'stable' && <Minus size={16} />}
                <span>{tempTrend.percentage}%</span>
              </div>
            </div>
            <p className="currentValue">
              {chartData.length > 0 ? chartData[chartData.length - 1].temperature : '--'}°C
            </p>
          </div>
        </div>

        <div className="chartsSection">
          <div className="chartContainer">
            <h3>Vital Signs Over Time</h3>
            <div className="chartControls">
              <select 
                value={selectedVital} 
                onChange={(e) => setSelectedVital(e.target.value)}
              >
                <option value="heartRate">Heart Rate</option>
                <option value="systolic">Blood Pressure (Systolic)</option>
                <option value="temperature">Temperature</option>
                <option value="weight">Weight</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--inputColor)" />
                <XAxis dataKey="name" stroke="var(--textColor)" />
                <YAxis stroke="var(--textColor)" />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey={selectedVital} 
                  stroke="var(--PrimaryColor)" 
                  strokeWidth={3}
                  dot={{ fill: 'var(--PrimaryColor)', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chartContainer">
            <h3>Health Score Distribution</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={healthScoreData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {healthScoreData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="comparisonChart">
          <h3>Weekly Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData.slice(-7)}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--inputColor)" />
              <XAxis dataKey="name" stroke="var(--textColor)" />
              <YAxis stroke="var(--textColor)" />
              <Tooltip />
              <Bar dataKey="heartRate" fill="#ff4757" name="Heart Rate" radius={[8, 8, 0, 0]} />
              <Bar dataKey="oxygenSaturation" fill="#00d2d3" name="Oxygen Sat." radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="insightsSection">
          <h3>
            <Activity size={24} color="var(--PrimaryColor)" />
            Health Insights
          </h3>
          <div className="insightsList">
            <div className="insightItem positive">
              <h4>
                <CheckCircle className="icon-insight" color="#52c41a" />
                Good Progress
              </h4>
              <p>Your heart rate has been stable within the normal range for the past week.</p>
            </div>
            <div className="insightItem warning">
              <h4>
                <AlertTriangle className="icon-insight" color="#faad14" />
                Monitor Weight
              </h4>
              <p>Consider tracking your weight more consistently for better health monitoring.</p>
            </div>
            <div className="insightItem info">
              <h4>
                <Info className="icon-insight" color="#00d2d3" />
                Recommendation
              </h4>
              <p>Continue monitoring your vitals daily for comprehensive health tracking.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsPage;