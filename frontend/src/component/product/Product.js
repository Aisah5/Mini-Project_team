import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "./../Sidebar";
import axios from "axios";
import { ProgressBar } from 'react-bootstrap';



function Product() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
      getProducts();
  },[]);

  const getProducts = async () => {
      const response = await axios.get("//localhost:3001/product");
      getProducts(Response.data);
  };


  return (
    <div className='d-flex'>
      <div className='col-auto'>
        <Sidebar /> 
      </div>
      {/* <div className="page-header">
        <h3 className="page-title"> Basic Tables </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
            <li className="breadcrumb-item active" aria-current="page">Basic tables</li>
          </ol>
        </nav>
      </div> */}
      <div className="row">

        
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Tabel Data Produk</h4>
              <Link to="./addProduct" className='button is-small btn btn-success'> Tambah </Link>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> No </th>
                      <th>  </th> <th>  </th>
                      <th> Gambar </th>
                      <th>  </th> <th>  </th>
                      <th> nama </th>
                      <th> </th> <th>  </th>
                      <th> Kategori </th>
                      <th>  </th> <th>  </th>
                      <th> Harga </th>
                      <th>  </th> <th>  </th>
                      <th> Deskripsi </th>
                      <th>  </th> <th>  </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> 1</td>
                      <td> </td> 
                      <td> </td> 
                      <td className="py-1">
                        <img src={require("../../assets/images/faces/face1.jpg")} alt="user icon" />
                      </td>
                      <td> </td> 
                      <td> </td> 
                      <td> Herman Beck </td>
                      <td> </td> 
                      <td> </td> 
                      <td>
                      Herman Beck 
                      </td>
                      <td> </td> 
                      <td> </td> 
                      <td> $ 77.99 </td>
                      <td> </td> 
                      <td> </td> 
                      <td> May 15, 2015 </td>
                      <td> </td> <td> </td>
                      <td>
                        
                        <Link type="button" 
                        className='button is-small btn btn-warning'>Edit</Link>
                        <button className='button is-small btn btn-danger'>Delete</button>
                        </td>
                    </tr>
 
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        


      </div>
    </div>
  )
}

export default Product;
