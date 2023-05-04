import React, { useEffect, useState } from 'react';
// import React, { useEffect, useState, Component } from 'react';
import Sidebar from "./../Sidebar"
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

function EditCategory() {
  const [categories, setCategory] = useState([]);
  const [name, setName] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    getCategory();
    getCategoryById();
  }, []);

  // useEffect(() => {
  //   getCategoryById();
  // }, []);

  const getCategory = async () => {
    const response = await axios.get('http://localhost:3001/category');
    setCategory(response.data)
  }

  const updateCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3001/category/${id}`, {
        name
      });
      navigate("/category");
    } catch (error) {
      console.log(error)
    }
  };

  const getCategoryById = async () => {
    const response = await axios.get(`http://localhost:3001/category/${id}`);
    setName(response.data.name);
  };


  return (
    <div className='d-flex'>
      <div className='col-auto'>
        <Sidebar /> 
      </div>
      
      <div>
      <div className="row">
       <div className="col-md-8 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Form Data Kategori</h4>
              {/* <p className="card-description"> Basic form layout </p> */}
              <form onSubmit={ updateCategory } className="forms-sample">
                <Form.Group>
                  <label className='label'>Name</label>
                  {/* <input 
                  type='text'
                  className='input'
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  placeholder='Name'
                  /> */}
                  <Form.Control type="text" className='input'
                  value={name} size="md" 
                  onChange={(e)=> setName(e.target.value)} 
                  id="exampleInputUsername1" placeholder="Nama Kategori"/>
                </Form.Group> 
                <p></p>
                <Link to="/category" className='btn btn-secondary'>Cancel</Link>
                {/* <button to="/category" className="btn btn-secondary">Cancel</button> */}
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Data Kategori</h4>
                {/* <p className="card-description"> Add className <code>.table-bordered</code>
                </p> */}
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> No </th>
                        <th> Nama Kategori </th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category, index) => (
                        <tr key={category.id}>
                        <td> {index + 1} </td>
                        <td> {category.name} </td>
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

      
    </div>
  )
}
   
export default EditCategory;
