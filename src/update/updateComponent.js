import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { getProduct, updateProduct } from "../services/productsService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Update(){

  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let mounted = true;
    getProduct(id).then( product => {
        if(mounted){
            setProduct(product);
        }
    });
    return () => mounted = false; 
  }, [])

  async function handleSubmit (e){
  
    e.preventDefault();
    const request = await updateProduct(
                       product._id, 
                       product.name, 
                       product.price, 
                       product.description, 
                       product.ammount, 
                       product.imgURL);                    

    console.log(await request);
  }

  return (
    <Container >
    <Row className="g-5 mt-5">
    <h2>Update product</h2>
<Col sm={6}>
  <Form onSubmit={handleSubmit}>

<Form.Group className="mb-2">
  <Form.Label>Name</Form.Label>
  <Form.Control value={product.name} onChange={(e)=>{setProduct({...product, name:e.target.value})}} required placeholder="Name"></Form.Control>
</Form.Group>

<Form.Group className="mb-2">
    <Form.Label>Price</Form.Label>
    <Form.Control value={product.price} onChange={(e)=>{setProduct({...product, price:e.target.value})}} required placeholder="Price" type="number"></Form.Control>
</Form.Group>

<Form.Group className="mb-2">
    <Form.Label>Description</Form.Label>
    <Form.Control value={product.description} onChange={(e)=>{setProduct({...product, description:e.target.value})}}  placeholder="Description" required></Form.Control>
</Form.Group>

<Form.Group className="mb-2">
    <Form.Label>Ammount available</Form.Label>
    <Form.Control value={product.ammount} onChange={(e)=>{setProduct({...product, ammount:e.target.value})}} placeholder="Available" required type="number"></Form.Control>
</Form.Group>

<Form.Group className="mb-2">
    <Form.Label>Image link</Form.Label>
    <Form.Control value={product.imgURL} onChange={(e)=>{setProduct({...product, imgURL:e.target.value})}} placeholder="IMG Link" required></Form.Control>
</Form.Group>

<Button className="mt-2" type="submit" variant="primary">Update</Button>

</Form>

</Col>

<Col sm={6}>
<Image fluid src={product.imgURL || "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}></Image>
</Col>
</Row>
  </Container>
);


}

export default Update;