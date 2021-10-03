import { Form, Button, Container } from "react-bootstrap";
import { getProduct } from "../services/productsService";
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
            console.log(product);
        }
    });
    return () => mounted = false; 
  }, [])

  return (
    <div>
    <Container >
    <h2 className='mt-5 mb-5'>Update product</h2>

    <Form>

  <Form.Group className="mb-2">
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="Name" value={product.name}></Form.Control>
  </Form.Group>

  <Form.Group className="mb-2">
      <Form.Label>Price</Form.Label>
      <Form.Control placeholder="price" type="number" value={product.price}></Form.Control>
  </Form.Group>

  <Form.Group className="mb-2">
      <Form.Label>Description</Form.Label>
      <Form.Control value={product.description}></Form.Control>
  </Form.Group>

  <Form.Group className="mb-2">
      <Form.Label>Ammount available</Form.Label>
      <Form.Control type="number" value={product.ammount}></Form.Control>
  </Form.Group>

  <Form.Group className="mb-2">
      <Form.Label>Image link</Form.Label>
      <Form.Control value={product.imgURL}></Form.Control>
  </Form.Group>

  <Button  className="mt-2" type="submit" variant="primary">Update</Button>

  </Form>
  </Container>
  </div>);


}

export default Update;