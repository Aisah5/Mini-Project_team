import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "./../Sidebar";
import axios from "axios";
import { ProgressBar } from 'react-bootstrap';



function Product() {
  const [product, setProducts] = useState([]);
  // const [name, setName] = useState([]);
  // const [image, setImage] = useState([]);
  // const [price, setPrice] = useState([]);
  // const [id_category, setId_category] = useState([]);
  // const [description, setDescription] = useState([]);
  // const navigate = useNavigate();

  useEffect(()=>{
      getProducts();
  },[]);

  const getProducts = async () => {
      const response = await axios.get("http://localhost:3001/product");
      setProducts(response.data);
  }
  

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
              <p></p>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr style={{ backgroundColor: 'grey' }}>
                      <th> No </th>
                      <th style={{ textAlign: 'center' }}> Gambar </th>
                      <th> nama </th>
                      <th> Kategori </th>
                      <th> Harga </th>
                      <th style={{ textAlign: 'center' }}> Deskripsi </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                  {product.map((product, index) => (
                    <tr key={product.id}>
                      <td> {index + 1} </td>
                      <td className=' py-1' alt="image">
                        <img src={product.url} style={{ width: '8rem' }} alt="Image" />
                      </td>
                      <td> {product.name} </td>
                      <td style={{ textAlign: 'center' }}>
                      {product.id_category} 
                      </td>
                      <td> {product.price} </td>
                      <td> {product.description}</td>
                      <td>
                        
                        <Link type="button" 
                        className='button is-small btn btn-warning'>Edit</Link>
                        <button className='button is-small btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                    ))}
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
