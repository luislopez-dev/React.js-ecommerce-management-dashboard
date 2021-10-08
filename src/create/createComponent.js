import { useEffect, useState } from "react";
import { createProduct } from "../services/productsService";
import { Form, Button, Container } from "react-bootstrap";



function Create(){

  const [product, setProduct] = useState({});

  async function handleSubmit (e){
  
    e.preventDefault();
    const request = await createProduct(product.name, 
                       product.price, 
                       product.description, 
                       product.ammount, 
                       product.imgURL);                    
  }


 return (
    <div>

      <Container>

      <h2 className='mt-5 mb-5'>New Product</h2>

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-2">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e)=>{setProduct({...product, name:e.target.value})}} required placeholder="Name"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>Price</Form.Label>
            <Form.Control onChange={(e)=>{setProduct({...product, price:e.target.value})}} required placeholder="Price" type="number"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>Description</Form.Label>
            <Form.Control onChange={(e)=>{setProduct({...product, description:e.target.value})}}  placeholder="Description" required></Form.Control>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>Ammount available</Form.Label>
            <Form.Control onChange={(e)=>{setProduct({...product, ammount:e.target.value})}} placeholder="Available" required type="number"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>Image link</Form.Label>
            <Form.Control onChange={(e)=>{setProduct({...product, imgURL:e.target.value})}} placeholder="IMG Link" required></Form.Control>
        </Form.Group>

        <Button className="mt-2" type="submit" variant="primary">Create</Button>

      </Form>

      </Container>
    </div>
 )   
}
export default Create;