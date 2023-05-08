import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


// const style() {
//     .sidebar
// };

function Sidebar() {
  return (
    <div className='sidebar d-flex flex-column justify-content-space-between bg-dark col-auto text-white p-4 vh-100'>
      <div>
      <h1>KasirApp</h1>
      {/* <a href="d-flex align-items-center">
        <i className='fs-6 me-2'></i>
        <h3 className='d-flex align-items-center fs-4'>Kasir App</h3>
      </a> */}
        <hr className='text-secondary mt-2'/>
        <ul className='nav nav-pills flex-column px-0'>
        <li className='nav-item py-1'>
            <a href='/home' className='nav-link text-white'>
                <i className='bi bi-house me-3 fs-5'></i>
                <span className='fs-5'>HOME PAGE</span>
            </a>
        </li>
        {/* <li className='nav-item py-2'>
            <a href='/dashboard' className='nav-link text-white'>
                <i className='bi bi-speedometer me-3 fs-5'></i>
                <span className='fs-5'>Dashboard</span>
            </a>
        </li> */}
        <li className='nav-item py-2'>
            <a href='/product' className='nav-link text-white'>
                <i className='bi bi-archive me-3 fs-5'></i>
                <span className='fs-5'>Data Produk</span>
            </a>
        </li>
        <li className='nav-item py-2'>
            <a href='/category' className='nav-link text-white'>
                <i className='bi bi-archive me-3 fs-5'></i>
                <span className='fs-5'>Data Kategori</span>
            </a>
        </li>
        <li className='nav-item py-2'>
            <a href='/report' className='nav-link text-white'>
                <i className='bi bi-grid me-3 fs-5'></i>
                <span className='fs-5'>Reporting</span>
            </a>
        </li>
        <li className='nav-item py-2'>
        <hr className='text-secondary'/>
              <a href='/' className='nav-link text-white'>
                <i className='bi bi-arrow-bar-left me-3 fs-5'></i>
                <span className='fs-5'>Logout</span>
              </a>
        </li>
        </ul>
      </div>
      <div>
  
      </div>
    </div>
  );
}

export default Sidebar;
