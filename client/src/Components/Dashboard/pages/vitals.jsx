import React, { useState, useEffect } from 'react';
import { Heart, Activity, Droplet, Wind, Thermometer, Weight, Ruler, Plus, X, Save, AlertCircle, Trash2, TrendingUp } from 'lucide-react';

const VitalsPage = () => {
  const [vitals, setVitals] = useState({
    heartRate: '',
    bloodPressureSystolic: '',
    bloodPressureDiastolic: '',
    temperature: '',
    oxygenSaturation: '',
    weight: '',
    height: ''
  });

  const [vitalHistory, setVitalHistory] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const history = localStorage.getItem('vitalHistory');
    if (history) {
      setVitalHistory(JSON.parse(history));
    }
  }, []);

  const handleInputChange = (e) => {
    setVitals({
      ...vitals,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVital = {
      id: Date.now(),
      ...vitals,
      timestamp: new Date().toLocaleString()
    };
    
    const updatedHistory = [newVital, ...vitalHistory];
    setVitalHistory(updatedHistory);
    localStorage.setItem('vitalHistory', JSON.stringify(updatedHistory));
    
    setVitals({
      heartRate: '',
      bloodPressureSystolic: '',
      bloodPressureDiastolic: '',
      temperature: '',
      oxygenSaturation: '',
      weight: '',
      height: ''
    });
    setShowAddForm(false);
  };

  const getVitalStatus = (type, value) => {
    switch(type) {
      case 'heartRate':
        if (value >= 60 && value <= 100) return { status: 'normal', label: 'Normal', color: 'status-normal' };
        return value < 60 ? { status: 'low', label: 'Low', color: 'status-warning' } : { status: 'high', label: 'High', color: 'status-danger' };
      case 'temperature':
        if (value >= 36.1 && value <= 37.2) return { status: 'normal', label: 'Normal', color: 'status-normal' };
        return value < 36.1 ? { status: 'low', label: 'Low', color: 'status-warning' } : { status: 'high', label: 'High', color: 'status-danger' };
      case 'oxygenSaturation':
        if (value >= 95) return { status: 'normal', label: 'Normal', color: 'status-normal' };
        return { status: 'low', label: 'Low', color: 'status-warning' };
      case 'bloodPressure':
        if (value.systolic >= 90 && value.systolic <= 120 && value.diastolic >= 60 && value.diastolic <= 80) 
          return { status: 'normal', label: 'Normal', color: 'status-normal' };
        return { status: 'high', label: 'Check', color: 'status-warning' };
      default:
        return { status: 'normal', label: 'Normal', color: 'status-normal' };
    }
  };

  const deleteReading = (id) => {
    const updatedHistory = vitalHistory.filter(vital => vital.id !== id);
    setVitalHistory(updatedHistory);
    localStorage.setItem('vitalHistory', JSON.stringify(updatedHistory));
  };

  const styles = `
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
      
      --biggestFontSize: 2.5rem;
      --h1FontSize: 1.5rem;
      --h2FontSize: 1.25rem;
      --h3FontSize: 1rem;
      --normalFontSize: .938rem;
      --smallFontSize: .813rem;
      --smallestFontSize: .75rem;
    }

    .vitalsContainer {
      min-height: 100vh;
      background: var(--bgColor);
      padding: 1.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }

    .vitalsHeader {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .headerContent h1 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: var(--h1FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .headerContent p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      font-weight: 500;
    }

    .addNewBtn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .addNewBtn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .modalOverlay {
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
    }

    .modalContent {
      background: var(--whiteColor);
      border-radius: 16px;
      width: 90%;
      max-width: 800px;
      max-height: 85vh;
      overflow-y: auto;
      padding: 2rem;
    }

    .modalHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--inputColor);
    }

    .modalTitle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
    }

    .modalTitle .icon {
      color: var(--PrimaryColor);
    }

    .closeModalBtn {
      width: 36px;
      height: 36px;
      border: none;
      background: var(--inputColor);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      color: var(--textColor);
    }

    .closeModalBtn:hover {
      background: var(--itemCardHover);
      color: var(--blackColor);
    }

    .formGrid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .formGroup {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .formGroup label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      font-weight: 600;
    }

    .formGroup input {
      padding: 0.75rem;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      font-size: var(--normalFontSize);
      transition: all 0.3s ease;
      background: var(--whiteColor);
    }

    .formGroup input:focus {
      outline: none;
      border-color: var(--PrimaryColor);
      box-shadow: 0 0 0 3px rgba(94, 170, 60, 0.1);
    }

    .formHint {
      font-size: var(--smallestFontSize);
      color: var(--textColor);
      margin: 0;
    }

    .formActions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      padding-top: 1rem;
      border-top: 1px solid var(--inputColor);
    }

    .btnCancel {
      padding: 0.75rem 1.5rem;
      background: transparent;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      color: var(--textColor);
      font-size: var(--normalFontSize);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btnCancel:hover {
      background: var(--inputColor);
    }

    .btnSave {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btnSave:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .currentVitals {
      margin-bottom: 2rem;
    }

    .sectionTitle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 1.5rem;
      position: relative;
    }

    .lastUpdated {
      font-size: var(--smallFontSize);
      color: var(--textColor);
      font-weight: 400;
      margin-left: auto;
    }

    .vitalsGrid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .vitalCard {
      background: var(--whiteColor);
      padding: 1.5rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .vitalCard:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    }

    .cardTop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .iconBox {
      width: 48px;
      height: 48px;
      background: var(--paleGreen);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .iconBox .icon {
      font-size: 1.5rem;
      color: var(--PrimaryColor);
    }

    .statusBadge {
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

    .cardInfo {
      text-align: center;
    }

    .cardValue {
      font-size: var(--biggestFontSize);
      font-weight: 700;
      color: var(--blackColor);
      margin: 0;
    }

    .cardUnit {
      font-size: var(--smallFontSize);
      color: var(--textColor);
      margin: 0.2rem 0;
    }

    .cardLabel {
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      font-weight: 500;
      margin: 0;
    }

    .historySection {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .historyHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .historyTitle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
    }

    .recordBadge {
      background: var(--paleGreen);
      color: var(--PrimaryColor);
      padding: 0.4rem 1rem;
      border-radius: 20px;
      font-size: var(--smallFontSize);
      font-weight: 600;
    }

    .tableWrapper {
      overflow-x: auto;
    }

    .vitalsTable {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
    }

    .vitalsTable thead {
      background: var(--inputColor);
    }

    .vitalsTable th {
      padding: 1rem;
      text-align: left;
      font-size: var(--smallFontSize);
      font-weight: 600;
      color: var(--blackColor);
      border-bottom: 2px solid var(--bgColor);
    }

    .vitalsTable th:first-child {
      border-radius: 8px 0 0 0;
    }

    .vitalsTable th:last-child {
      border-radius: 0 8px 0 0;
    }

    .vitalsTable td {
      padding: 1rem;
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      border-bottom: 1px solid var(--inputColor);
    }

    .vitalsTable tbody tr {
      transition: background 0.3s ease;
    }

    .vitalsTable tbody tr:hover {
      background: var(--inputColor);
    }

    .latestRow {
      background: rgba(189, 240, 148, 0.2);
    }

    .latestTag {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      font-size: var(--smallestFontSize);
      font-weight: 600;
      margin-left: 0.5rem;
    }

    .cellWithIcon {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .cellWithIcon .icon {
      font-size: 1rem;
    }

    .deleteButton {
      width: 32px;
      height: 32px;
      background: rgba(255, 77, 79, 0.1);
      border: none;
      border-radius: 6px;
      color: #ff4d4f;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .deleteButton:hover {
      background: #ff4d4f;
      color: var(--whiteColor);
      transform: scale(1.1);
    }

    .emptyState {
      text-align: center;
      padding: 3rem;
    }

    .emptyIcon {
      width: 80px;
      height: 80px;
      background: var(--inputColor);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
    }

    .emptyIcon .icon {
      font-size: 2.5rem;
      color: var(--greyText);
    }

    .emptyTitle {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      margin-bottom: 0.5rem;
    }

    .emptyText {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin-bottom: 2rem;
    }

    .emptyButton {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .emptyButton:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    @media screen and (max-width: 768px) {
      .modalContent {
        padding: 1.5rem;
        margin: 1rem;
      }

      .formGrid {
        grid-template-columns: 1fr;
      }

      .vitalsGrid {
        grid-template-columns: 1fr;
      }

      .vitalsHeader {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
      }

      .addNewBtn {
        justify-content: center;
      }

      .tableWrapper {
        overflow-x: scroll;
      }

      .vitalsTable {
        min-width: 600px;
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
      <div className="vitalsContainer">
        <div className="vitalsHeader">
          <div className="headerContent">
            <h1>
              <Activity className="icon" />
              Health Vitals
            </h1>
            <p>Monitor and track your vital signs for better health management</p>
          </div>
          <button 
            className="addNewBtn"
            onClick={() => setShowAddForm(true)}
          >
            <Plus className="icon" /> Add New Reading
          </button>
        </div>

        {showAddForm && (
          <div className="modalOverlay">
            <div className="modalContent">
              <div className="modalHeader">
                <h3 className="modalTitle">
                  <Heart className="icon" />
                  Record New Vitals
                </h3>
                <button 
                  onClick={() => setShowAddForm(false)}
                  className="closeModalBtn"
                >
                  <X className="icon" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="vitalForm">
                <div className="formGrid">
                  <div className="formGroup">
                    <label>
                      <Heart className="icon" style={{color: '#ef4444'}} />
                      Heart Rate (BPM)
                    </label>
                    <input
                      type="number"
                      name="heartRate"
                      value={vitals.heartRate}
                      onChange={handleInputChange}
                      placeholder="72"
                    />
                    <p className="formHint">Normal: 60-100 BPM</p>
                  </div>

                  <div className="formGroup">
                    <label>
                      <Droplet className="icon" style={{color: '#8b5cf6'}} />
                      Blood Pressure (Systolic)
                    </label>
                    <input
                      type="number"
                      name="bloodPressureSystolic"
                      value={vitals.bloodPressureSystolic}
                      onChange={handleInputChange}
                      placeholder="120"
                    />
                    <p className="formHint">Normal: 90-120 mmHg</p>
                  </div>

                  <div className="formGroup">
                    <label>
                      <Droplet className="icon" style={{color: '#8b5cf6'}} />
                      Blood Pressure (Diastolic)
                    </label>
                    <input
                      type="number"
                      name="bloodPressureDiastolic"
                      value={vitals.bloodPressureDiastolic}
                      onChange={handleInputChange}
                      placeholder="80"
                    />
                    <p className="formHint">Normal: 60-80 mmHg</p>
                  </div>

                  <div className="formGroup">
                    <label>
                      <Thermometer className="icon" style={{color: '#f97316'}} />
                      Temperature (°C)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name="temperature"
                      value={vitals.temperature}
                      onChange={handleInputChange}
                      placeholder="36.5"
                    />
                    <p className="formHint">Normal: 36.1-37.2°C</p>
                  </div>

                  <div className="formGroup">
                    <label>
                      <Wind className="icon" style={{color: '#3b82f6'}} />
                      Oxygen Saturation (%)
                    </label>
                    <input
                      type="number"
                      name="oxygenSaturation"
                      value={vitals.oxygenSaturation}
                      onChange={handleInputChange}
                      placeholder="98"
                    />
                    <p className="formHint">Normal: ≥95%</p>
                  </div>

                  <div className="formGroup">
                    <label>
                      <Weight className="icon" style={{color: '#10b981'}} />
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      name="weight"
                      value={vitals.weight}
                      onChange={handleInputChange}
                      placeholder="70.0"
                    />
                  </div>

                  <div className="formGroup">
                    <label>
                      <Ruler className="icon" style={{color: '#6366f1'}} />
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      name="height"
                      value={vitals.height}
                      onChange={handleInputChange}
                      placeholder="175"
                    />
                  </div>
                </div>

                <div className="formActions">
                  <button 
                    type="button" 
                    onClick={() => setShowAddForm(false)}
                    className="btnCancel"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="btnSave"
                  >
                    <Save className="icon" /> Save Vitals
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {vitalHistory.length > 0 && (
          <div className="currentVitals">
            <h3 className="sectionTitle">
              <TrendingUp className="icon" />
              Latest Readings
              <span className="lastUpdated">
                Last updated: {vitalHistory[0]?.timestamp}
              </span>
            </h3>
            
            <div className="vitalsGrid">
              {vitalHistory[0].heartRate && (
                <div className="vitalCard">
                  <div className="cardTop">
                    <div className="iconBox">
                      <Heart className="icon" />
                    </div>
                    <span className={`statusBadge ${getVitalStatus('heartRate', vitalHistory[0].heartRate).color}`}>
                      {getVitalStatus('heartRate', vitalHistory[0].heartRate).label}
                    </span>
                  </div>
                  <div className="cardInfo">
                    <p className="cardValue">{vitalHistory[0].heartRate}</p>
                    <p className="cardUnit">BPM</p>
                    <p className="cardLabel">Heart Rate</p>
                  </div>
                </div>
              )}

              {vitalHistory[0].bloodPressureSystolic && (
                <div className="vitalCard">
                  <div className="cardTop">
                    <div className="iconBox">
                      <Droplet className="icon" />
                    </div>
                    <span className={`statusBadge ${getVitalStatus('bloodPressure', { 
                      systolic: vitalHistory[0].bloodPressureSystolic, 
                      diastolic: vitalHistory[0].bloodPressureDiastolic 
                    }).color}`}>
                      {getVitalStatus('bloodPressure', { 
                        systolic: vitalHistory[0].bloodPressureSystolic, 
                        diastolic: vitalHistory[0].bloodPressureDiastolic 
                      }).label}
                    </span>
                  </div>
                  <div className="cardInfo">
                    <p className="cardValue">
                      {vitalHistory[0].bloodPressureSystolic}/{vitalHistory[0].bloodPressureDiastolic}
                    </p>
                    <p className="cardUnit">mmHg</p>
                    <p className="cardLabel">Blood Pressure</p>
                  </div>
                </div>
              )}

              {vitalHistory[0].temperature && (
                <div className="vitalCard">
                  <div className="cardTop">
                    <div className="iconBox">
                      <Thermometer className="icon" />
                    </div>
                    <span className={`statusBadge ${getVitalStatus('temperature', vitalHistory[0].temperature).color}`}>
                      {getVitalStatus('temperature', vitalHistory[0].temperature).label}
                    </span>
                  </div>
                  <div className="cardInfo">
                    <p className="cardValue">{vitalHistory[0].temperature}°</p>
                    <p className="cardUnit">Celsius</p>
                    <p className="cardLabel">Temperature</p>
                  </div>
                </div>
              )}

              {vitalHistory[0].oxygenSaturation && (
                <div className="vitalCard">
                  <div className="cardTop">
                    <div className="iconBox">
                      <Wind className="icon" />
                    </div>
                    <span className={`statusBadge ${getVitalStatus('oxygenSaturation', vitalHistory[0].oxygenSaturation).color}`}>
                      {getVitalStatus('oxygenSaturation', vitalHistory[0].oxygenSaturation).label}
                    </span>
                  </div>
                  <div className="cardInfo">
                    <p className="cardValue">{vitalHistory[0].oxygenSaturation}%</p>
                    <p className="cardUnit">SpO2</p>
                    <p className="cardLabel">Oxygen Saturation</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="historySection">
          <div className="historyHeader">
            <h3 className="historyTitle">
              <Activity className="icon" />
              Health Records History
            </h3>
            {vitalHistory.length > 0 && (
              <span className="recordBadge">
                {vitalHistory.length} Records
              </span>
            )}
          </div>
          
          {vitalHistory.length > 0 ? (
            <div className="tableWrapper">
              <table className="vitalsTable">
                <thead>
                  <tr>
                    <th>Date & Time</th>
                    <th>Heart Rate</th>
                    <th>Blood Pressure</th>
                    <th>Temperature</th>
                    <th>Oxygen Sat.</th>
                    <th>Weight</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {vitalHistory.map((vital, index) => (
                    <tr key={vital.id} className={index === 0 ? 'latestRow' : ''}>
                      <td>
                        <span>{vital.timestamp}</span>
                        {index === 0 && (
                          <span className="latestTag">Latest</span>
                        )}
                      </td>
                      <td>
                        {vital.heartRate ? (
                          <div className="cellWithIcon">
                            <Heart className="icon" style={{color: '#ef4444', width: '16px'}} />
                            <span>{vital.heartRate} BPM</span>
                          </div>
                        ) : '-'}
                      </td>
                      <td>
                        {vital.bloodPressureSystolic ? (
                          <div className="cellWithIcon">
                            <Droplet className="icon" style={{color: '#8b5cf6', width: '16px'}} />
                            <span>{vital.bloodPressureSystolic}/{vital.bloodPressureDiastolic}</span>
                          </div>
                        ) : '-'}
                      </td>
                      <td>
                        {vital.temperature ? (
                          <div className="cellWithIcon">
                            <Thermometer className="icon" style={{color: '#f97316', width: '16px'}} />
                            <span>{vital.temperature}°C</span>
                          </div>
                        ) : '-'}
                      </td>
                      <td>
                        {vital.oxygenSaturation ? (
                          <div className="cellWithIcon">
                            <Wind className="icon" style={{color: '#3b82f6', width: '16px'}} />
                            <span>{vital.oxygenSaturation}%</span>
                          </div>
                        ) : '-'}
                      </td>
                      <td>
                        {vital.weight ? (
                          <div className="cellWithIcon">
                            <Weight className="icon" style={{color: '#10b981', width: '16px'}} />
                            <span>{vital.weight} kg</span>
                          </div>
                        ) : '-'}
                      </td>
                      <td>
                        <button
                          onClick={() => deleteReading(vital.id)}
                          className="deleteButton"
                        >
                          <X className="icon" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="emptyState">
              <div className="emptyIcon">
                <AlertCircle className="icon" />
              </div>
              <h4 className="emptyTitle">No vital readings recorded yet</h4>
              <p className="emptyText">Start tracking your health by adding your first reading!</p>
              <button 
                onClick={() => setShowAddForm(true)}
                className="emptyButton"
              >
                <Plus className="icon" /> Add First Reading
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VitalsPage;