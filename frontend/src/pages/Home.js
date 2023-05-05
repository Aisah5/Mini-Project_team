import React, { useState, useEffect } from "react";
import axios from "axios";
// import Navigationbar from "./Navigationbar"
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';




function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:3001/product");
    setProducts(response.data);
  };

  // const deleteProduct = async (productId) => {
  //   try {
  //     await axios.delete(`http://localhost:3001/product/${id}`);
  //     getProducts();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


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
            <li className="nav-item">
              <a className="navbar-brand " href="#"></a>
              <button to="" className='btn btn-dark w-100'></button>
            </li>
              <li className="nav-item active">
                <a className="navbar-brand" href="/product">KASIR <span class="sr-only">App</span></a>
              </li>
            </ul>
            
            <div class="form-inline mr-sm-2">
              {/* <Link to="/dashboard" className='btn btn-light w-100'>Dashboard website</Link> */}
              {/* <button type="button" class="btn btn-light">Dashboard</button> */}
            </div>
          </div>
        </nav> 
      

      
      <Row xs={11} md={5} className="g-2 justify-content-center">
        {products.map((product) => (
        <Col key={product.id}>
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={product.url} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                Rp.{product.price}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>






    </div>
    
  );
}

export default Home;
