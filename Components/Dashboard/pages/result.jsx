import React, { useState, useEffect } from 'react';
import { Download, Eye, Trash2, FileText, FileSpreadsheet, Activity, X, Filter, Calendar } from 'lucide-react';

const ResultsPage = () => {
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('newest');

  useEffect(() => {
    const savedResults = localStorage.getItem('healthResults');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    } else {
      const sampleResults = [
        {
          id: 1,
          title: 'Monthly Health Report - March 2024',
          date: '2024-03-15',
          type: 'Monthly Report',
          status: 'Normal',
          summary: 'All vitals within normal range. Heart rate: 72 BPM, BP: 120/80',
          recommendations: ['Continue regular exercise', 'Maintain healthy diet'],
          downloadUrl: '#'
        },
        {
          id: 2,
          title: 'Blood Pressure Analysis',
          date: '2024-03-10',
          type: 'Specific Analysis',
          status: 'Good',
          summary: 'Blood pressure readings show consistent normal values',
          recommendations: ['Monitor daily', 'Reduce sodium intake'],
          downloadUrl: '#'
        },
        {
          id: 3,
          title: 'Weekly Vitals Summary',
          date: '2024-03-05',
          type: 'Weekly Report',
          status: 'Excellent',
          summary: 'All health indicators are optimal this week',
          recommendations: ['Keep up the good work', 'Stay hydrated'],
          downloadUrl: '#'
        }
      ];
      setResults(sampleResults);
      localStorage.setItem('healthResults', JSON.stringify(sampleResults));
    }
  }, []);

  const handleViewResult = (result) => {
    setSelectedResult(result);
    setShowModal(true);
  };

  const handleDownload = (result, format) => {
    alert(`Downloading ${result.title} as ${format.toUpperCase()}`);
  };

  const handleDelete = (resultId) => {
    if (window.confirm('Are you sure you want to delete this result?')) {
      const updatedResults = results.filter(result => result.id !== resultId);
      setResults(updatedResults);
      localStorage.setItem('healthResults', JSON.stringify(updatedResults));
    }
  };

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'excellent': return '#52c41a';
      case 'good': case 'normal': return '#00d2d3';
      case 'warning': return '#faad14';
      case 'critical': return '#ff4757';
      default: return '#95a5a6';
    }
  };

  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'excellent': return 'status-excellent';
      case 'good': case 'normal': return 'status-normal';
      case 'warning': return 'status-warning';
      case 'critical': return 'status-danger';
      default: return 'status-default';
    }
  };

  const styles = `
    .results {
      min-height: 100vh;
      background: var(--bgColor);
      padding: 1.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }

    .resultsHeader {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .resultsHeader h1 {
      font-size: var(--h1FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .resultsHeader p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin: 0;
    }

    .filterSection {
      background: var(--whiteColor);
      padding: 1.5rem;
      border-radius: 16px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .filterControls {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .filterSelect, .sortSelect {
      padding: 0.75rem 1rem;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      font-size: var(--normalFontSize);
      background: var(--whiteColor);
      color: var(--blackColor);
      cursor: pointer;
      transition: all 0.3s ease;
      min-width: 150px;
    }

    .filterSelect:hover, .sortSelect:hover {
      border-color: var(--PrimaryColor);
    }

    .filterSelect:focus, .sortSelect:focus {
      outline: none;
      border-color: var(--PrimaryColor);
      box-shadow: 0 0 0 3px rgba(94, 170, 60, 0.1);
    }

    .resultsGrid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 1.5rem;
    }

    .resultCard {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .resultCard:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    }

    .resultHeader {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1rem;
      position: relative;
    }

    .resultIcon {
      width: 48px;
      height: 48px;
      background: var(--paleGreen);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--PrimaryColor);
      font-size: 1.5rem;
    }

    .resultMeta {
      flex: 1;
    }

    .resultMeta h3 {
      font-size: var(--h3FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.3rem;
    }

    .resultDate {
      font-size: var(--smallFontSize);
      color: var(--textColor);
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .resultType {
      display: inline-block;
      background: var(--inputColor);
      color: var(--blackColor);
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      font-size: var(--smallestFontSize);
      font-weight: 500;
      margin-top: 0.5rem;
    }

    .resultStatus {
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      color: var(--whiteColor);
      font-size: var(--smallestFontSize);
      font-weight: 600;
      position: absolute;
      top: 0;
      right: 0;
    }

    .status-excellent {
      background: #52c41a;
    }

    .status-normal {
      background: #00d2d3;
    }

    .status-warning {
      background: #faad14;
    }

    .status-danger {
      background: #ff4757;
    }

    .resultContent {
      margin-bottom: 1rem;
    }

    .resultSummary {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .recommendations {
      background: var(--inputColor);
      padding: 1rem;
      border-radius: 8px;
      border-left: 3px solid var(--PrimaryColor);
    }

    .recommendations h4 {
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .recommendations ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .recommendations li {
      font-size: var(--smallFontSize);
      color: var(--textColor);
      padding: 0.3rem 0;
      padding-left: 1rem;
      position: relative;
    }

    .recommendations li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--PrimaryColor);
    }

    .resultActions {
      display: flex;
      gap: 0.5rem;
      padding-top: 1rem;
      border-top: 1px solid var(--inputColor);
    }

    .actionBtn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 6px;
      font-size: var(--smallFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .actionBtn.view {
      background: var(--paleGreen);
      color: var(--PrimaryColor);
    }

    .actionBtn.view:hover {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
    }

    .actionBtn.download {
      background: var(--inputColor);
      color: var(--blackColor);
    }

    .actionBtn.download:hover {
      background: var(--itemCardHover);
    }

    .actionBtn.delete {
      background: rgba(255, 77, 79, 0.1);
      color: #ff4757;
    }

    .actionBtn.delete:hover {
      background: #ff4757;
      color: var(--whiteColor);
    }

    .emptyState {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 4rem 2rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
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
    }

    /* Modal Styles */
    .modal {
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

    .modalContent {
      background: var(--whiteColor);
      border-radius: 16px;
      width: 90%;
      max-width: 700px;
      max-height: 85vh;
      overflow-y: auto;
    }

    .modalHeader {
      padding: 2rem;
      border-bottom: 1px solid var(--inputColor);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modalHeader h2 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin: 0;
    }

    .closeBtn {
      width: 36px;
      height: 36px;
      border: none;
      background: var(--inputColor);
      border-radius: 8px;
      font-size: 1.5rem;
      color: var(--textColor);
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .closeBtn:hover {
      background: var(--itemCardHover);
      color: var(--blackColor);
    }

    .modalBody {
      padding: 2rem;
    }

    .detailRow {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 0;
      border-bottom: 1px solid var(--inputColor);
      font-size: var(--normalFontSize);
    }

    .detailRow strong {
      color: var(--blackColor);
      min-width: 100px;
    }

    .statusBadge {
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      color: var(--whiteColor);
      font-size: var(--smallFontSize);
      font-weight: 600;
    }

    .detailSection {
      margin: 2rem 0;
    }

    .detailSection h4 {
      font-size: var(--h3FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .detailSection p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      line-height: 1.6;
    }

    .detailSection ul {
      list-style: none;
      padding: 0;
    }

    .detailSection li {
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;
      font-size: var(--normalFontSize);
      color: var(--textColor);
    }

    .detailSection li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--PrimaryColor);
      font-weight: 600;
    }

    .vitalBreakdown {
      background: var(--inputColor);
      padding: 1rem;
      border-radius: 8px;
      margin: 1rem 0;
    }

    .vitalItem {
      padding: 0.5rem 0;
      font-size: var(--normalFontSize);
      color: var(--blackColor);
    }

    .modalFooter {
      padding: 1.5rem 2rem;
      border-top: 1px solid var(--inputColor);
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    .modalFooter button {
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

    .modalFooter button:first-child {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
    }

    .modalFooter button:first-child:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .modalFooter button:last-child {
      background: var(--inputColor);
      color: var(--blackColor);
    }

    .modalFooter button:last-child:hover {
      background: var(--itemCardHover);
    }

    @media screen and (max-width: 768px) {
      .resultsGrid {
        grid-template-columns: 1fr;
      }

      .filterControls {
        flex-direction: column;
      }

      .filterSelect, .sortSelect {
        width: 100%;
      }

      .resultActions {
        flex-wrap: wrap;
      }

      .modalContent {
        width: 95%;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="results">
        <div className="resultsHeader">
          <h1>
            <Activity size={28} color="var(--PrimaryColor)" />
            My Health Results
          </h1>
          <p>View, download, and manage your health reports and analyses</p>
        </div>

        <div className="filterSection">
          <div className="filterControls">
            <select 
              className="filterSelect"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Results</option>
              <option value="monthly">Monthly Reports</option>
              <option value="weekly">Weekly Reports</option>
              <option value="analysis">Specific Analysis</option>
            </select>
            <select 
              className="sortSelect"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">Title A-Z</option>
            </select>
          </div>
        </div>

        <div className="resultsGrid">
          {results.map((result) => (
            <div key={result.id} className="resultCard">
              <div className="resultHeader">
                <div className="resultIcon">
                  <Activity />
                </div>
                <div className="resultMeta">
                  <h3>{result.title}</h3>
                  <p className="resultDate">
                    <Calendar size={14} />
                    {new Date(result.date).toLocaleDateString()}
                  </p>
                  <span className="resultType">{result.type}</span>
                </div>
                <div 
                  className="resultStatus" 
                  style={{ backgroundColor: getStatusColor(result.status) }}
                >
                  {result.status}
                </div>
              </div>

              <div className="resultContent">
                <p className="resultSummary">{result.summary}</p>
                
                <div className="recommendations">
                  <h4>Key Recommendations:</h4>
                  <ul>
                    {result.recommendations.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="resultActions">
                <button 
                  className="actionBtn view"
                  onClick={() => handleViewResult(result)}
                >
                  <Eye size={16} /> View
                </button>
                <button 
                  className="actionBtn download"
                  onClick={() => handleDownload(result, 'pdf')}
                >
                  <FileText size={16} /> PDF
                </button>
                <button 
                  className="actionBtn download"
                  onClick={() => handleDownload(result, 'excel')}
                >
                  <FileSpreadsheet size={16} /> Excel
                </button>
                <button 
                  className="actionBtn delete"
                  onClick={() => handleDelete(result.id)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {results.length === 0 && (
          <div className="emptyState">
            <Activity className="emptyIcon" />
            <h3>No Results Yet</h3>
            <p>Your health reports and analyses will appear here once generated.</p>
          </div>
        )}

        {showModal && selectedResult && (
          <div className="modal">
            <div className="modalContent">
              <div className="modalHeader">
                <h2>{selectedResult.title}</h2>
                <button 
                  className="closeBtn"
                  onClick={() => setShowModal(false)}
                >
                  <X />
                </button>
              </div>
              
              <div className="modalBody">
                <div className="resultDetails">
                  <div className="detailRow">
                    <strong>Date:</strong> {new Date(selectedResult.date).toLocaleDateString()}
                  </div>
                  <div className="detailRow">
                    <strong>Type:</strong> {selectedResult.type}
                  </div>
                  <div className="detailRow">
                    <strong>Status:</strong> 
                    <span 
                      className="statusBadge" 
                      style={{ backgroundColor: getStatusColor(selectedResult.status) }}
                    >
                      {selectedResult.status}
                    </span>
                  </div>
                  
                  <div className="detailSection">
                    <h4>Summary</h4>
                    <p>{selectedResult.summary}</p>
                  </div>

                  <div className="detailSection">
                    <h4>Detailed Analysis</h4>
                    <p>This is a comprehensive analysis of your health vitals for the specified period. All measurements have been evaluated against standard health ranges and personalized baselines.</p>
                    
                    <div className="vitalBreakdown">
                      <div className="vitalItem">
                        <strong>Heart Rate:</strong> 72 BPM (Normal Range: 60-100)
                      </div>
                      <div className="vitalItem">
                        <strong>Blood Pressure:</strong> 120/80 mmHg (Optimal)
                      </div>
                      <div className="vitalItem">
                        <strong>Temperature:</strong> 36.8°C (Normal)
                      </div>
                    </div>
                  </div>

                  <div className="detailSection">
                    <h4>Recommendations</h4>
                    <ul>
                      {selectedResult.recommendations.map((rec, index) => (
                        <li key={index}>{rec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detailSection">
                    <h4>Next Steps</h4>
                    <ul>
                      <li>Continue monitoring vitals daily</li>
                      <li>Schedule follow-up in 30 days</li>
                      <li>Maintain current lifestyle habits</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="modalFooter">
                <button onClick={() => handleDownload(selectedResult, 'pdf')}>
                  <FileText size={16} /> Download PDF
                </button>
                <button onClick={() => setShowModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ResultsPage;