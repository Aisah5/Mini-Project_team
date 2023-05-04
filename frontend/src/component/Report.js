import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar"

function Report() {
    return (
        <div className='d-flex'>
          <div className='col-auto'>
            <Sidebar /> 
          </div>
          <div>
            
            <h1>this is Report ADMIN WEBSITE!!!</h1>
            <Link to="/home" className='btn btn-default w-50'>Dashboard website</Link>
          </div>
        
        </div>
      );
    }

export default Report;
