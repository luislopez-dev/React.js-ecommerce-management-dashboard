import { login } from '../services/authService';
import { Button, Row, Col, Container, Form, Image } from 'react-bootstrap';
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


  <Row>

<Col xm={12} sm={6}>

<h1 className='mt-5 mb-5'>Login</h1>

  <Form onSubmit={handleSubmit} className="mt-5">

  <Form.Group className="mb-4" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control required type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value) } />   
  </Form.Group>

  <Form.Group className="mb-5" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control required type="password" placeholder="Password" onChange={ (e) => setPassword(e.target.value) } />
  </Form.Group>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>
</Col>

<Col xm={0} sm={6}>
  <Image fluid src="https://static.vecteezy.com/system/resources/previews/002/037/248/non_2x/data-analysis-concept-vector.jpg"></Image>
</Col>

</Row>
</Container>


    </div>
    )
}

export default Login;