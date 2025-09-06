import React, { useState, useEffect } from 'react'
import { User, Edit, Save, Camera, Mail, Phone, MapPin, Heart, Calendar, Activity } from 'lucide-react'
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    height: '',
    weight: '',
    bloodType: '',
    allergies: '',
    medications: '',
    emergencyContact: '',
    unit: 'metric',
    notifications: false,
    dataSharing: false,
    bmi: null,
  });
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Helper function to get token and check if it exists
  const getAuthToken = () => {
    const token = localStorage.getItem('token') || 
                  localStorage.getItem('authToken') || 
                  localStorage.getItem('accessToken');
    return token;
  };

  // Helper function to handle authentication errors
  const handleAuthError = () => {
    localStorage.clear(); // Clear all localStorage items
    alert('Your session has expired. Please login again.');
    window.location.href = '/login';
  };

  useEffect(() => {
    async function fetchProfile() {
      try {
        const token = getAuthToken();
        
        if (!token) {
          alert('Please login to access your profile.');
          window.location.href = '/login';
          return;
        }

        const response = await axios.get('http://localhost:5000/api/profile/getProfile', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const data = response.data.profile || {};

        setProfile({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          phone: data.phone || '',
          dateOfBirth: data.dateOfBirth ? data.dateOfBirth.split('T')[0] : '',
          gender: data.sex || '',
          height: data.height || '',
          weight: data.weight || '',
          bloodType: data.bloodGroup || '',
          allergies: Array.isArray(data.allergies) ? data.allergies.join(', ') : '',
          medications: Array.isArray(data.medications) ? data.medications.join(', ') : '',
          emergencyContact: data.emergencyContact ? `${data.emergencyContact.name} - ${data.emergencyContact.phone}` : '',
          unit: data.unit || 'metric',
          notifications: data.notifications || false,
          dataSharing: data.dataSharing || false,
          bmi: data.bmi || null,
        });
        setProfileImage(data.profileImage || null);
      } catch (error) {
        console.error('Error fetching profile:', error);
        
        if (error.response) {
          if (error.response.status === 401 || error.response.status === 403) {
            handleAuthError();
            alert(`Error: ${error.response.data.message || 'Failed to fetch profile'}`);
          }
        } else if (error.request) {
          alert('Network error. Please check your connection and try again.');
        } else {
          alert('An unexpected error occurred. Please try again.');
        }
      }
    }
    fetchProfile();
  }, []);

  useEffect(() => {
    if (profile.height && profile.weight) {
      calculateBMI();
    }
  }, [profile.height, profile.weight, profile.unit]);

  const calculateBMI = () => {
    if (profile.height && profile.weight) {
      let bmi;
      if (profile.unit === 'metric') {
        const heightInMeters = profile.height / 100;
        bmi = (profile.weight / (heightInMeters * heightInMeters)).toFixed(1);
      } else {
        bmi = ((profile.weight / (profile.height * profile.height)) * 703).toFixed(1);
      }
      setProfile(prev => ({ ...prev, bmi }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    
    try {
      const token = getAuthToken();
      
      if (!token) {
        alert('Authentication token not found. Please login again.');
        handleAuthError();
        return;
      }

      calculateBMI();

      // Parse emergency contact if it contains both name and phone
      let parsedEmergencyContact = {};
      if (profile.emergencyContact && profile.emergencyContact.includes(' - ')) {
        const [name, phone] = profile.emergencyContact.split(' - ');
        parsedEmergencyContact = { name: name.trim(), phone: phone.trim() };
      } else if (profile.emergencyContact) {
        // If it doesn't have the expected format, treat as name only
        parsedEmergencyContact = { name: profile.emergencyContact.trim(), phone: '' };
      }

      const updateData = {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        phone: profile.phone,
        dateOfBirth: profile.dateOfBirth,
        gender: profile.gender,
        height: profile.height,
        weight: profile.weight,
        unit: profile.unit,
        bloodType: profile.bloodType,
        allergies: profile.allergies ? profile.allergies.split(',').map(a => a.trim()) : [],
        medications: profile.medications ? profile.medications.split(',').map(m => m.trim()) : [],
        emergencyContact: parsedEmergencyContact,
        // Add any other fields that your backend expects
      };

      console.log('Sending update data:', updateData); // Debug log

      const response = await axios.post(
        'http://localhost:5000/api/profile/createOrUpdateProfile',
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      alert('Profile updated successfully!');
      setIsEditing(false);

      // Optionally refetch the profile to sync with backend
      // window.location.reload(); // or call fetchProfile again

    } catch (error) {
      console.error('Error updating profile:', error);
      
      if (error.response) {
        const { status, data } = error.response;
        
        if (status === 401 || status === 403) {
          alert(`Authentication failed: ${data.message || 'Please login again'}`);
          handleAuthError();
        } else if (status === 400) {
          alert(`Validation error: ${data.message || 'Please check your input data'}`);
        } else {
          alert(`Error: ${data.message || 'Failed to update profile'}`);
        }
      } else if (error.request) {
        alert('Network error. Please check your connection and try again.');
      } else {
        alert('An unexpected error occurred. Please try again.');
      }
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return { category: 'Underweight', color: '#3498db' };
    if (bmi < 25) return { category: 'Normal', color: '#27ae60' };
    if (bmi < 30) return { category: 'Overweight', color: '#f39c12' };
    return { category: 'Obese', color: '#e74c3c' };
  };

  const calculateAge = (birthDate) => {
    if (!birthDate) return null;
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <>
      <style>{styles}</style>
      <div className="profile">
        <div className="profileHeader">
          <h1>
            <User size={28} />
            My Profile
          </h1>
          <button 
            className={`editBtn ${isEditing ? 'saving' : ''}`}
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
          >
            {isEditing ? <Save size={16} /> : <Edit size={16} />}
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>

        <div className="profileContent">
          <div className="profileImageSection">
            <div className="imageContainer">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="profileImg" />
              ) : (
                <div className="imagePlaceholder">
                  <User size={48} />
                </div>
              )}
              {isEditing && (
                <label className="imageUpload">
                  <Camera size={16} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                  />
                </label>
              )}
            </div>
            <div className="basicInfo">
              <h2>{profile.firstName} {profile.lastName}</h2>
              <p><Mail size={16} style={{display: 'inline', marginRight: '0.5rem'}} />{profile.email}</p>
              <p><Phone size={16} style={{display: 'inline', marginRight: '0.5rem'}} />{profile.phone}</p>
              {profile.dateOfBirth && (
                <p><Calendar size={16} style={{display: 'inline', marginRight: '0.5rem'}} />{calculateAge(profile.dateOfBirth)} years old</p>
              )}
            </div>
          </div>

          <div className="profileForm">
            <div className="formSection">
              <h3>Personal Information</h3>
              <div className="formGrid">
                <div className="inputGroup">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    placeholder="Enter first name"
                  />
                </div>
                
                <div className="inputGroup">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    placeholder="Enter last name"
                  />
                </div>
                
                <div className="inputGroup">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    placeholder="Enter email"
                  />
                </div>
                
                <div className="inputGroup">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    placeholder="Enter phone number"
                  />
                </div>
                
                <div className="inputGroup">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={profile.dateOfBirth}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                
                <div className="inputGroup">
                  <label>Gender</label>
                  <select
                    name="gender"
                    value={profile.gender}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="formSection">
              <h3>Health Information</h3>
              <div className="formGrid">
                <div className="inputGroup">
                  <label>Height ({profile.unit === 'metric' ? 'cm' : 'inches'})</label>
                  <input
                    type="number"
                    name="height"
                    value={profile.height}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    placeholder={profile.unit === 'metric' ? '170' : '67'}
                  />
                </div>
                
                <div className="inputGroup">
                  <label>Weight ({profile.unit === 'metric' ? 'kg' : 'lbs'})</label>
                  <input
                    type="number"
                    step="0.1"
                    name="weight"
                    value={profile.weight}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    placeholder={profile.unit === 'metric' ? '70' : '154'}
                  />
                </div>
                
                <div className="inputGroup">
                  <label>Blood Type</label>
                  <select
                    name="bloodType"
                    value={profile.bloodType}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  >
                    <option value="">Select Blood Type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                
                <div className="inputGroup">
                  <label>Unit System</label>
                  <select
                    name="unit"
                    value={profile.unit}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  >
                    <option value="metric">Metric (kg, cm)</option>
                    <option value="imperial">Imperial (lbs, inches)</option>
                  </select>
                </div>
              </div>
              
              <div className="textAreaGroup">
                <label>Allergies</label>
                <textarea
                  name="allergies"
                  value={profile.allergies}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="List any known allergies"
                  rows="3"
                />
              </div>
              
              <div className="textAreaGroup">
                <label>Current Medications</label>
                <textarea
                  name="medications"
                  value={profile.medications}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="List current medications and dosages"
                  rows="3"
                />
              </div>
              
              <div className="inputGroup">
                <label>Emergency Contact</label>
                <input
                  type="text"
                  name="emergencyContact"
                  value={profile.emergencyContact}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Name and phone number"
                />
              </div>
            </div>

            <div className="formSection">
              <h3>Preferences</h3>
              <div className="checkboxGroup">
                <label className="checkboxLabel">
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={profile.notifications}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                  <span>Enable email notifications for health reminders</span>
                </label>
              </div>
              
              <div className="checkboxGroup">
                <label className="checkboxLabel">
                  <input
                    type="checkbox"
                    name="dataSharing"
                    checked={profile.dataSharing}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                  <span>Share anonymized data for health research</span>
                </label>
              </div>
            </div>
          </div>

          {profile.height && profile.weight && profile.bmi && (
            <div className="healthSummary">
              <h3>Health Summary</h3>
              <div className="summaryCard">
                <div className="bmiInfo">
                  <h4>Body Mass Index (BMI)</h4>
                  <div className="bmiValue">
                    <span className="bmi">{profile.bmi}</span>
                    <span 
                      className="bmiCategory" 
                      style={{ color: getBMICategory(profile.bmi).color }}
                    >
                      {getBMICategory(profile.bmi).category}
                    </span>
                  </div>
                </div>
                
                <div className="healthStats">
                  <div className="healthStat">
                    <Heart size={20} />
                    <span>Health Score: 85/100</span>
                  </div>
                  <div className="healthStat">
                    <Calendar size={20} />
                    <span>Age: {calculateAge(profile.dateOfBirth)} years</span>
                  </div>
                  <div className="healthStat">
                    <Activity size={20} />
                    <span>BMI: {profile.bmi} ({getBMICategory(profile.bmi).category})</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// Note: You'll need to define your styles here

export default Profile


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

    .profile {
      min-height: 100vh;
      background: var(--bgColor);
      padding: 1.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }

    .profileHeader {
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

    .profileHeader h1 {
      font-size: var(--h1FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .editBtn {
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

    .editBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .editBtn.saving {
      background: #27ae60;
    }

    .profileContent {
      display: grid;
      gap: 2rem;
      grid-template-columns: 1fr;
    }

    .profileImageSection {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      display: flex;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .imageContainer {
      position: relative;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid var(--paleGreen);
    }

    .profileImg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .imagePlaceholder {
      width: 100%;
      height: 100%;
      background: var(--inputColor);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--greyText);
      font-size: 3rem;
    }

    .imageUpload {
      position: absolute;
      bottom: -5px;
      right: -5px;
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
    }

    .imageUpload:hover {
      background: var(--HoverColor);
      transform: scale(1.1);
    }

    .basicInfo {
      flex: 1;
    }

    .basicInfo h2 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .basicInfo p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin-bottom: 0.25rem;
    }

    .profileForm {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .formSection {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .formSection h3 {
      font-size: var(--h3FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--inputColor);
    }

    .formGrid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .inputGroup {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .inputGroup label {
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
    }

    .inputGroup input,
    .inputGroup select {
      padding: 0.75rem;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      font-size: var(--normalFontSize);
      background: var(--whiteColor);
      color: var(--blackColor);
      transition: all 0.3s ease;
    }

    .inputGroup input:focus,
    .inputGroup select:focus {
      outline: none;
      border-color: var(--PrimaryColor);
      box-shadow: 0 0 0 3px rgba(94, 170, 60, 0.1);
    }

    .inputGroup input:disabled,
    .inputGroup select:disabled {
      background: var(--inputColor);
      color: var(--greyText);
      cursor: not-allowed;
    }

    .textAreaGroup {
      margin-bottom: 1.5rem;
    }

    .textAreaGroup label {
      display: block;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .textAreaGroup textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      font-size: var(--normalFontSize);
      background: var(--whiteColor);
      color: var(--blackColor);
      transition: all 0.3s ease;
      resize: vertical;
      box-sizing: border-box;
    }

    .textAreaGroup textarea:focus {
      outline: none;
      border-color: var(--PrimaryColor);
      box-shadow: 0 0 0 3px rgba(94, 170, 60, 0.1);
    }

    .textAreaGroup textarea:disabled {
      background: var(--inputColor);
      color: var(--greyText);
      cursor: not-allowed;
    }

    .checkboxGroup {
      margin-bottom: 1rem;
    }

    .checkboxLabel {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: var(--normalFontSize);
      color: var(--textColor);
      cursor: pointer;
    }

    .checkboxLabel input {
      margin: 0;
    }

    .checkboxLabel input:disabled {
      cursor: not-allowed;
    }

    .healthSummary {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .healthSummary h3 {
      font-size: var(--h3FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--inputColor);
    }

    .summaryCard {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .bmiInfo {
      background: var(--paleGreen);
      padding: 1.5rem;
      border-radius: 12px;
      text-align: center;
    }

    .bmiInfo h4 {
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .bmiValue {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .bmi {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--blackColor);
    }

    .bmiCategory {
      font-size: var(--normalFontSize);
      font-weight: 600;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      background: var(--whiteColor);
    }

    .healthStats {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .healthStat {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: var(--inputColor);
      border-radius: 8px;
      color: var(--blackColor);
      font-size: var(--normalFontSize);
      font-weight: 500;
    }

    .healthStat svg {
      color: var(--PrimaryColor);
    }

    @media screen and (max-width: 768px) {
      .profileHeader {
        flex-direction: column;
        text-align: center;
      }

      .profileImageSection {
        flex-direction: column;
        text-align: center;
      }

      .formGrid {
        grid-template-columns: 1fr;
      }

      .summaryCard {
        grid-template-columns: 1fr;
      }

      .profile {
        padding: 1rem;
      }
    }
  `
