import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './home/homeComponent';
import Login from './login/loginComponent';
import Register from './register/registerComponent';
import Update from './update/updateComponent';
import Create from './create/createComponent';
import Users from './users/usersComponent';
import ProtectedRoute from './ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/create">New Product</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
             type="search"
             className="me-2"
             aria-label="Search"
            ></FormControl>
          </Form>
          <Button variant="primary">search</Button>
        </Container>
      </Navbar>
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <ProtectedRoute exact path="/update/:id" component={Update} />

        <ProtectedRoute exact path="/create" component={Create} />
      
        <ProtectedRoute exact path="/home" component={Home} />

        <ProtectedRoute exact path="/users" component={Users} />

        <Redirect from="/" to="/home" />

      </Switch>
    </div>
  </Router>
  );
}

export default App;