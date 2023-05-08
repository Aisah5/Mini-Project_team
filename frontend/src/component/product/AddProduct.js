import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Sidebar from "./../Sidebar"
import axios from "axios";
import { Form } from 'react-bootstrap';


function AddProduct() {
  const [name, setName] = useState([]);
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [id_category, setId_category] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState([]);
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Image", file);
    formData.append("name", name);
    formData.append("preview", preview);
    // formData.append("category", id_category);
    formData.append("price", price);
    formData.append("description", description);
    try {
      await axios.post("http://localhost:3001/product", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };






  return (
    <div className='d-flex'>
      <div className='col-auto'>
        <Sidebar /> 
      </div>
      <div style={{ width: '100%' }}>
      <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Form Data Produk</h4>
          
                <form className="forms-sample" onSubmit={saveProduct}>
                  <Form.Group>
                    <label clas htmlFor="exampleInputName1"><strong>Name</strong></label>
                    <Form.Control type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                  </Form.Group>
                  <p></p>
                  <Form.Group>
                    <label><strong>File Upload image </strong></label>
                    <div className="custom-file">
                      <Form.Control type="file" onChange={loadImage} className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                
                    </div>
                  </Form.Group>
                  <p></p>
                  {/* <Form.Group>
                    <label htmlFor="exampleSelectGender"><strong>Category </strong></label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>Makanan</option>
                      <option>Minuman</option>
                      <option>Cemilan</option>
                    </select>
                  </Form.Group> */}
                  <p></p>
                  <Form.Group>
                  <label htmlFor="exampleInputName1"><strong>Price </strong></label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><strong>Rp. </strong></span>
                      </div>
                      <Form.Control type="text" className="input" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price"  aria-describedby="basic-addon1" />
                    </div>
                  </Form.Group>
                  <p></p>
                  <Form.Group>
                    <label htmlFor="exampleTextarea1"><strong>Description </strong></label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" id="exampleTextarea1" rows="3"></textarea>
                  </Form.Group>
                  <p></p>
                  <Link to="/product" className='btn btn-secondary'>Cancel</Link>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
    


          <div className="col-12 grid-margin">
        
          </div>

          
        </div>
</div>
        </div>
      );
    }

export default AddProduct;
