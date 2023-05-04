import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "./../Sidebar"

function AddProduct() {
    return (
        <div className='d-flex'>
          <div className='col-auto'>
            <Sidebar /> 
          </div>
          <div>
            
            <h1>TAMBAH DATA PRODUK</h1>
            <Link to="/home" className='btn btn-default w-50'>form produk website</Link>
          </div>
        
        </div>
      );
    }

export default AddProduct;
