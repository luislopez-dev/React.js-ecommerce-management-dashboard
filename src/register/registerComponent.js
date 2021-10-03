import { Form, Button, Container } from "react-bootstrap";

function Register(){
    return (
      <div>

        <Container>
        <h2 className='mt-5 mb-5'>Register</h2>

        <Form>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="email"/>                 
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type="password" placeholder="password"/>
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