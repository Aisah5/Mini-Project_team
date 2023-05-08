import React from "react";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    <Link to="" className='btn btn-dark w-22'></Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="navbar-brand " href="#"></a>
        </li>
          <li className="nav-item active">
            <a className="navbar-brand" href="/product"><strong>KASIR <span class="sr-only">App</span></strong></a>
          </li>
        </ul>
        
        <div class="form-inline mr-sm-2">

        </div>
      </div>
      <Link to="" className='btn btn-dark w-20 justify-content-right'>
          <h3 className="bi bi-cart4"><span className="badge"></span></h3>
      </Link>
      <Link to="" className='btn btn-dark w-22'></Link>
      <Link to="/" className='btn btn-secondary w-20 justify-content-right'>Log Out
      </Link>
      <Link to="" className='btn btn-dark w-22'></Link>
    </nav>
  );
};

export default Navigationbar;
