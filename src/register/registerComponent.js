import { Form, Button, Container } from "react-bootstrap";

function Register(){
    return (
      <div>

        <Container>
        <h1>Register</h1>

        <Form>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="email"/>   
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>         
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type="password" placeholder="password"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
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