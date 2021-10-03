import { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import { Form, Button, Container } from "react-bootstrap";

function Create(){
 return (
    <div>

      <Container>

      <h2 className='mt-5 mb-5'>New Product</h2>

      <Form>

        <Form.Group className="mb-2">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Name"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>Price</Form.Label>
            <Form.Control placeholder="price" type="number"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>Description</Form.Label>
            <Form.Control></Form.Control>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>Ammount available</Form.Label>
            <Form.Control type="number"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-2">
            <Form.Label>Image link</Form.Label>
            <Form.Control></Form.Control>
        </Form.Group>

        <Button className="mt-2" type="submit" variant="primary">Create</Button>

      </Form>

      </Container>
    </div>
 )   
}
export default Create;