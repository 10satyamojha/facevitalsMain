import React, { useState, useEffect } from 'react'
import { Key, Copy, Eye, EyeOff, Trash2, Plus, Shield, RefreshCw, AlertCircle } from 'lucide-react'
import axios from "axios"

const APIKeys = () => {
  const [apiKeys, setApiKeys] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [newKeyPermissions, setNewKeyPermissions] = useState(['read']);
  const [visibleKeys, setVisibleKeys] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // API Configuration
  const API_BASE_URL = 'https://facevital-backend-3.onrender.com/api/apikeys';

  const getAuthHeaders = () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('Authentication token not found. Please log in again.');
    }
    return {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  };

  const handleError = (error, defaultMessage) => {
    console.error(defaultMessage, error);
    
    let errorMessage = defaultMessage;
    
    if (error.response) {
      // Server responded with error status
      errorMessage = error.response.data?.message || `Server error (${error.response.status})`;
    } else if (error.request) {
      // Request made but no response
      errorMessage = 'Network error. Please check your connection.';
    } else if (error.message) {
      // Other error
      errorMessage = error.message;
    }
    
    setError(errorMessage);
    return errorMessage;
  };

  useEffect(() => {
    fetchApiKeys();
  }, []);

  const fetchApiKeys = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/listApiKeys`, {
        headers: getAuthHeaders()
      });
      
      setApiKeys(response.data.apiKeys || []);
      setError('');
    } catch (error) {
      handleError(error, 'Failed to fetch API keys');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateKey = async () => {
    if (!newKeyName.trim()) {
      setError('Please enter a name for the API key');
      return;
    }

    if (newKeyPermissions.length === 0) {
      setError('Please select at least one permission');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/createApiKey`, {
        name: newKeyName.trim(),
        permissions: newKeyPermissions,
      }, {
        headers: getAuthHeaders()
      });

      setApiKeys(prevKeys => [...prevKeys, response.data.apiKey]);
      setNewKeyName('');
      setNewKeyPermissions(['read']);
      setShowCreateForm(false);
      setError('');
      
      // Show success message
      alert('API Key created successfully!');
    } catch (error) {
      const errorMessage = handleError(error, 'Failed to create API key');
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyKey = async (key) => {
    try {
      await navigator.clipboard.writeText(key);
      alert('API Key copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      alert('Failed to copy to clipboard');
    }
  };

  const toggleKeyVisibility = (keyId) => {
    setVisibleKeys(prev => ({
      ...prev,
      [keyId]: !prev[keyId]
    }));
  };

  const handleDeleteKey = async (keyId) => {
    // Debug logging
    console.log('Deleting key with ID:', keyId);
    
    if (!keyId) {
      setError('Invalid API key ID');
      alert('Invalid API key ID');
      return;
    }

    if (!window.confirm('Are you sure you want to delete this API key? This action cannot be undone.')) {
      return;
    }

    setLoading(true);
    try {
      await axios.delete(`${API_BASE_URL}/${keyId}`, {
        headers: getAuthHeaders()
      });

      setApiKeys(apiKeys.filter(key => (key.id || key._id) !== keyId));
      setError('');
      alert('API Key deleted successfully!');
    } catch (error) {
      const errorMessage = handleError(error, 'Failed to delete API key');
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerateKey = async (keyId) => {
    // Debug logging
    console.log('Regenerating key with ID:', keyId);
    
    if (!keyId) {
      setError('Invalid API key ID');
      alert('Invalid API key ID');
      return;
    }

    if (!window.confirm('Are you sure you want to regenerate this API key? The old key will stop working immediately.')) {
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/${keyId}/regenerate`, {}, {
        headers: getAuthHeaders()
      });

      const updatedKey = response.data.apiKey;
      setApiKeys(apiKeys.map(key => (key.id || key._id) === keyId ? updatedKey : key));
      setError('');
      
      // Show the new key temporarily
      setVisibleKeys(prev => ({
        ...prev,
        [keyId]: true
      }));
      
      alert('API Key regenerated successfully! The new key is now visible.');
    } catch (error) {
      const errorMessage = handleError(error, 'Failed to regenerate API key');
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handlePermissionChange = (permission, checked) => {
    if (checked) {
      setNewKeyPermissions([...newKeyPermissions, permission]);
    } else {
      setNewKeyPermissions(newKeyPermissions.filter(p => p !== permission));
    }
  };

  const maskKey = (key) => {
    if (!key) return '';
    const visibleStart = Math.min(12, key.length);
    const visibleEnd = Math.max(4, key.length - visibleStart);
    return key.substring(0, visibleStart) + '*'.repeat(20) + key.substring(key.length - visibleEnd);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="apiKeys">
        <div className="apiKeysHeader">
          <div>
            <h1>
              <Key size={28} />
              API Keys Management
            </h1>
            <p>Manage your Health Vitals API keys for integrations and third-party access</p>
          </div>
          <button 
            className="createKeyBtn"
            onClick={() => setShowCreateForm(true)}
          >
            <Plus size={16} /> Create New Key
          </button>
        </div>

        {showCreateForm && (
          <div className="createKeyForm">
            <div className="formCard">
              <h3>Create New API Key</h3>
              <div className="inputGroup">
                <label>API Key Name</label>
                <input
                  type="text"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  placeholder="e.g., Mobile App Integration"
                />
                <small>Choose a descriptive name to identify this key</small>
              </div>

              <div className="permissions">
                <label>Permissions</label>
                <div className="permissionsList">
                  <label className="checkboxLabel">
                    <input 
                      type="checkbox" 
                      checked={newKeyPermissions.includes('read')}
                      onChange={(e) => handlePermissionChange('read', e.target.checked)}
                    />
                    <span>Read vitals data</span>
                  </label>
                  <label className="checkboxLabel">
                    <input 
                      type="checkbox" 
                      checked={newKeyPermissions.includes('write')}
                      onChange={(e) => handlePermissionChange('write', e.target.checked)}
                    />
                    <span>Write vitals data</span>
                  </label>
                  <label className="checkboxLabel">
                    <input 
                      type="checkbox" 
                      checked={newKeyPermissions.includes('delete')}
                      onChange={(e) => handlePermissionChange('delete', e.target.checked)}
                    />
                    <span>Delete data</span>
                  </label>
                </div>
              </div>

              <div className="formActions">
                <button className="cancelBtn" onClick={() => setShowCreateForm(false)}>
                  Cancel
                </button>
                <button className="submitBtn" onClick={handleCreateKey}>
                  <Key size={16} /> Create API Key
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="securityNotice">
          <Shield className="securityIcon" size={24} />
          <div className="noticeContent">
            <h4>Security Notice</h4>
            <p>Keep your API keys secure and never share them publicly. Each key provides access to your health data according to its permissions.</p>
          </div>
        </div>

        <div className="apiKeysList">
          {apiKeys.map((apiKey) => (
            <div key={apiKey.id} className="apiKeyCard">
              <div className="keyHeader">
                <div className="keyInfo">
                  <h3>{apiKey.name}</h3>
                  <div className="keyMeta">
                    <span className="created">Created: {new Date(apiKey.created).toLocaleDateString()}</span>
                    <span className="lastUsed">Last used: {apiKey.lastUsed}</span>
                    <span className={`status ${apiKey.status}`}>{apiKey.status}</span>
                  </div>
                </div>
                <div className="keyActions">
                  <button
                    className="actionBtn"
                    onClick={() => toggleKeyVisibility(apiKey.id)}
                    title={visibleKeys[apiKey.id] ? 'Hide key' : 'Show key'}
                  >
                    {visibleKeys[apiKey.id] ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                  <button
                    className="actionBtn"
                    onClick={() => handleCopyKey(apiKey.key)}
                    title="Copy key"
                  >
                    <Copy size={16} />
                  </button>
                  <button
                    className="actionBtn"
                    onClick={() => handleRegenerateKey(apiKey.id)}
                    title="Regenerate key"
                  >
                    <RefreshCw size={16} />
                  </button>
                  <button
                    className="actionBtn delete"
                    onClick={() => handleDeleteKey(apiKey.id)}
                    title="Delete key"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="keyValue">
                <code>
                  {visibleKeys[apiKey.id] ? apiKey.key : maskKey(apiKey.key)}
                </code>
              </div>

              <div className="keyPermissions">
                <h4>Permissions:</h4>
                <div className="permissionTags">
                  {apiKey.permissions.map((permission) => (
                    <span key={permission} className="permissionTag">
                      {permission}
                    </span>
                  ))}
                </div>
              </div>

              <div className="keyUsage">
                <div className="usageStats">
                  <div className="usageStat">
                    <span className="label">Requests this month:</span>
                    <span className="value">{apiKey.requestsThisMonth.toLocaleString()}</span>
                  </div>
                  <div className="usageStat">
                    <span className="label">Rate limit:</span>
                    <span className="value">{apiKey.rateLimit}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {apiKeys.length === 0 && (
          <div className="emptyState">
            <Key className="emptyIcon" size={64} />
            <h3>No API Keys</h3>
            <p>Create your first API key to start integrating with Health Vitals API</p>
            <button 
              className="createFirstKeyBtn"
              onClick={() => setShowCreateForm(true)}
            >
              <Plus size={16} /> Create Your First API Key
            </button>
          </div>
        )}

        <div className="apiDocumentation">
          <h3>API Documentation</h3>
          <p>Learn how to integrate Health Vitals API into your applications:</p>
          <div className="docLinks">
            <a href="#" className="docLink">
              Getting Started Guide
            </a>
            <a href="#" className="docLink">
              API Reference
            </a>
            <a href="#" className="docLink">
              Code Examples
            </a>
            <a href="#" className="docLink">
              Rate Limits & Best Practices
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default APIKeys

 const styles = `
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
  `
