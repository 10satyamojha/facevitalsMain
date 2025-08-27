import React from 'react'
import { Outlet } from 'react-router-dom'
import '../../App.css'
import './dashboard.css'
import Sidebar from './SideBarSection/Sidebar'

const Dashboard = () => {
    return (
        <div className="dashboard flex">
            <div className="dashboardContainer flex">
                {/* Sidebar remains constant */}
                <Sidebar />
                
                {/* Main content area where different pages will render */}
                <div className="mainContent">
                    <Outlet /> {/* This will render child routes */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard