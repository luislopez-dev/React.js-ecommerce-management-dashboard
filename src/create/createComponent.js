import { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import { Form, Button } from "react-bootstrap";

function Create(){
 return (
    <div>

      <h3>New Product</h3>

      <Form>

        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Name"></Form.Control>
        </Form.Group>

        <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control placeholder="price" type="number"></Form.Control>
        </Form.Group>

        <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control></Form.Control>
        </Form.Group>

        <Form.Group>
            <Form.Label>Ammount available</Form.Label>
            <Form.Control type="number"></Form.Control>
        </Form.Group>

        <Form.Group>
            <Form.Label>Image link</Form.Label>
            <Form.Control></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">Create</Button>

      </Form>
    </div>
 )   
}
export default Create;