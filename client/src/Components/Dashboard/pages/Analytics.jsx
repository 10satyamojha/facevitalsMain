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
    }

    .apiKeys {
      min-height: 100vh;
      background: var(--bgColor);
      padding: 1.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }

    .apiKeysHeader {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .apiKeysHeader div {
      flex: 1;
    }

    .apiKeysHeader h1 {
      font-size: var(--h1FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .apiKeysHeader p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin: 0;
    }

    .createKeyBtn {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .createKeyBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .createKeyForm {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 1rem;
    }

    .formCard {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 2rem;
      width: 90%;
      max-width: 500px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    }

    .formCard h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    .inputGroup {
      margin-bottom: 1.5rem;
    }

    .inputGroup label {
      display: block;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .inputGroup input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      font-size: var(--normalFontSize);
      background: var(--whiteColor);
      color: var(--blackColor);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    .inputGroup input:focus {
      outline: none;
      border-color: var(--PrimaryColor);
      box-shadow: 0 0 0 3px rgba(94, 170, 60, 0.1);
    }

    .inputGroup small {
      display: block;
      font-size: var(--smallestFontSize);
      color: var(--textColor);
      margin-top: 0.3rem;
    }

    .permissions {
      margin-bottom: 2rem;
    }

    .permissions > label {
      display: block;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .permissionsList {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .checkboxLabel {
      display: flex !important;
      align-items: center;
      gap: 0.5rem;
      font-weight: normal !important;
      margin-bottom: 0 !important;
      font-size: var(--normalFontSize) !important;
      color: var(--textColor) !important;
      cursor: pointer;
    }

    .checkboxLabel input {
      width: auto !important;
      margin: 0 !important;
    }

    .formActions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    .formActions button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .cancelBtn {
      background: var(--inputColor);
      color: var(--blackColor);
    }

    .cancelBtn:hover {
      background: var(--itemCardHover);
    }

    .submitBtn {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
    }

    .submitBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .securityNotice {
      background: var(--paleGreen);
      border: 1px solid var(--PrimaryColor);
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .securityIcon {
      color: var(--PrimaryColor);
      font-size: 1.5rem;
      margin-top: 0.25rem;
    }

    .noticeContent h4 {
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .noticeContent p {
      font-size: var(--smallFontSize);
      color: var(--textColor);
      line-height: 1.5;
      margin: 0;
    }

    .apiKeysList {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .apiKeyCard {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .apiKeyCard:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 25px rgba(0,0,0,0.1);
    }

    .keyHeader {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    .keyInfo h3 {
      font-size: var(--h3FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .keyMeta {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
    }

    .keyMeta span {
      font-size: var(--smallFontSize);
      color: var(--textColor);
    }

    .status {
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: var(--smallestFontSize);
      font-weight: 600;
    }

    .status.active {
      background: var(--paleGreen);
      color: var(--PrimaryColor);
    }

    .keyActions {
      display: flex;
      gap: 0.5rem;
    }

    .actionBtn {
      width: 36px;
      height: 36px;
      border: none;
      background: var(--inputColor);
      border-radius: 8px;
      color: var(--textColor);
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .actionBtn:hover {
      background: var(--itemCardHover);
      color: var(--blackColor);
    }

    .actionBtn.delete {
      background: rgba(255, 77, 79, 0.1);
      color: #ff4757;
    }

    .actionBtn.delete:hover {
      background: #ff4757;
      color: var(--whiteColor);
    }

    .keyValue {
      background: var(--inputColor);
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      border: 1px solid #e2e8f0;
    }

    .keyValue code {
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      background: none;
      padding: 0;
      word-break: break-all;
    }

    .keyPermissions {
      margin-bottom: 1rem;
    }

    .keyPermissions h4 {
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .permissionTags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .permissionTag {
      background: var(--paleGreen);
      color: var(--PrimaryColor);
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: var(--smallestFontSize);
      font-weight: 500;
    }

    .keyUsage {
      border-top: 1px solid var(--inputColor);
      padding-top: 1rem;
    }

    .usageStats {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .usageStat {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .usageStat .label {
      font-size: var(--smallFontSize);
      color: var(--textColor);
    }

    .usageStat .value {
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      font-weight: 600;
    }

    .emptyState {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 4rem 2rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      margin-bottom: 2rem;
    }

    .emptyIcon {
      font-size: 4rem;
      color: var(--greyText);
      margin-bottom: 1rem;
    }

    .emptyState h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      margin-bottom: 0.5rem;
    }

    .emptyState p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin-bottom: 1.5rem;
    }

    .createFirstKeyBtn {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .createFirstKeyBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .apiDocumentation {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .apiDocumentation h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .apiDocumentation p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin-bottom: 1.5rem;
    }

    .docLinks {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .docLink {
      background: var(--inputColor);
      color: var(--blackColor);
      padding: 1rem;
      border-radius: 8px;
      text-decoration: none;
      font-size: var(--normalFontSize);
      font-weight: 500;
      transition: all 0.3s ease;
      display: block;
      text-align: center;
    }

    .docLink:hover {
      background: var(--itemCardHover);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    @media screen and (max-width: 768px) {
      .apiKeysHeader {
        flex-direction: column;
        align-items: stretch;
        text-align: center;
      }

      .keyHeader {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
      }

      .keyMeta {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }

      .keyActions {
        justify-content: center;
      }

      .usageStats {
        flex-direction: column;
        gap: 1rem;
      }

      .formCard {
        width: 95%;
        padding: 1.5rem;
      }

      .formActions {
        flex-direction: column;
      }

      .docLinks {
        grid-template-columns: 1fr;
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