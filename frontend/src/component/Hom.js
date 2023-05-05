import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      {/* <div class="form-inline mr-sm-2">
            <button type="button" class="btn btn-light mr-auto">Dashboard</button>
          </div> */}
      

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
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li> */}
          </ul>
          
          <div class="form-inline mr-sm-2">
            <Link to="/dashboard" className='btn btn-light w-50'>Dashboard website</Link>
            {/* <button type="button" class="btn btn-light">Dashboard</button> */}
          </div>
        </div>
      </nav>
    </div>
    
  );
}

export default Home;
