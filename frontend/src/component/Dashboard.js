import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar"


function Dashboard() {
  return (
    <div className='d-flex'>
      <div className='col-auto'>
        <Sidebar /> 
      </div>
      <div>
        
        <h1>this is DASHBOARD ADMIN WEBSITE!!!</h1>
        <Link to="/home" className='btn btn-success w-50'>Dashboard website</Link>
      </div>
    
    </div>
  );
}

export default Dashboard;
