import { login } from '../services/authService';
import { Button, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import  { Redirect } from 'react-router-dom'

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {

    event.preventDefault();

    login(email, password).then( res => {
        console.log(res);
        if(res.token){
          localStorage.setItem("user", JSON.stringify({id:res.userId, status:true, token: res.token}));
          window.location.href = "/";
        }
    });    
  } 

    return (

  <div>

  <Container>

  <h2 className='mt-5 mb-5'>Login</h2>

  <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value) } />   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={ (e) => setPassword(e.target.value) } />
  </Form.Group>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>
</Container>
    </div>
    )
}

export default Login;