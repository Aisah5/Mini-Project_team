import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigationbar from "./Navigationbar"
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';




function Home() {

  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getProductById();
    getProducts();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:3001/product/${id}`);
    setProducts(response.data.image);
  };


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
      <div>
        <Navigationbar/>
      </div>
      
        {/* to={`./${category.id}`} */}
      
      <Row xs={11} md={5} className="g-2 justify-content-center">
        {products.map((product) => (
        <Col key={product.id}>
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={product.url} />
            <Card.Body>
              <Card.Title>{product.name} </Card.Title>
              <Card.Text>
                Rp. {product.price} 
              </Card.Text>
              <Button href={`/home/view/${product.id}`} variant="primary">View</Button>
              <Button variant="success">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>






    </div>
    
  );
}

export default Home;
