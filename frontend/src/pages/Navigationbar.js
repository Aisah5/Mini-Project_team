import React from "react";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    {/* <div class="form-inline mr-sm-2">
          <button type="button" class="btn btn-light mr-auto">Dashboard</button>
        </div> */}
    <Link to="" className='btn btn-dark w-20'></Link>
    {/* <Link to="" className='btn btn-dark w-100'></Link> */}

      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="navbar-brand " href="#"></a>
        </li>
          <li className="nav-item active">
            <a className="navbar-brand" href="#">KASIR <span class="sr-only">App</span></a>
          </li>
        </ul>
        
        <div class="form-inline mr-sm-2">
          {/* <Link to="/dashboard" className='btn btn-light w-100'>Dashboard website</Link> */}
          {/* <button type="button" class="btn btn-light">Dashboard</button> */}
          <Link to="" className='btn btn-dark w-10 justify-content-right'>
          <h3 className="bi bi-cart4"><span className="badge">4</span></h3>
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
