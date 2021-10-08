import { Form, Button, Container } from "react-bootstrap";
import { register } from '../services/authService';
import { useState } from "react";

function Register(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e){

    e.preventDefault();

    register(email, password, name).then(res => {
      console.log(res);
    })

  }
  
    return (
      <div>

        <Container>
        <h2 className='mt-5 mb-5'>Register</h2>

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />                 
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />                 
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control required type="password" placeholder="password"/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
        </Container>
      </div>
    )
}
export default Register;