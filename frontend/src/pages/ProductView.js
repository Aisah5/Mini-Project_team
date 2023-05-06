import React, { useState, useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Navigationbar from "./Navigationbar"
import { useParams, Link } from 'react-router-dom';

function ProductView() {

    const [product, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const [url, setUrl] = useState([]);

  useEffect(() => {
    getProductById();
    // getProducts();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:3001/product/${id}`);
    setName(response.data.name);
    setFile(response.data.image);
    setPreview(response.data.url);
    setPrice(response.data.price);
    setDescription(response.data.description);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  return (
    <div>
        <div>
        <Navigationbar/>
      </div>
      <p><p></p></p><a></a>
      <CardGroup>
      <Row xs={1} md={2} className="g-100">
        
        <Col key={product.id}>
        {preview ? (
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={preview} alt="Preview Image" />
          </Card>
          ) : (
            ""
        )}
        </Col>
        </Row>
        
      <Card>
      <Card.Body>
        <Card.Title ><h1>{name}</h1></Card.Title>
        <p><p></p></p><p></p>
        <Card.Subtitle  className="mb-2"><h3>Rp. <span>{price}</span></h3></Card.Subtitle>
        <Card.Text>
        {description}
        </Card.Text>
        <Button href="/home" variant="secondary">Kembali</Button>
        <Button href="" variant="success">Buy</Button>
        
      </Card.Body>
      <Button href="/home" variant="secondary">Kembali</Button>
        <Button href="" variant="success">Buy</Button>
      </Card>
      
    </CardGroup>


      {/* <Container>
        <p><p></p></p><a></a>
      <Row xs={11} md={2} className="g-2 w-25 justify-content-center">
        
        <Col key={product.id}>
        {preview ? (
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={preview} alt="Preview Image" />
          </Card>
          ) : (
            ""
        )}
        
        </Col>
        <Card style={{ width: '18rem' }}>
      
    </Card>
    </Row>
    </Container> */}
    </div>
  );
}

export default ProductView;