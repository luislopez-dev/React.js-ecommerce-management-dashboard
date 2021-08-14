import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './home/homeComponent';
import Login from './login/loginComponent';
import Register from './register/registerComponent';
import Update from './update/updateComponent';
import Create from './create/createComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navbar bg="dark">
        <Navbar.Brand>Luis</Navbar.Brand>
        <Navbar.Collapse>
          <Nav.Link>Products</Nav.Link>
          <Nav.Link>New</Nav.Link>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar>
    <div>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/update">
          <Update />
        </Route>

        <Route path="/create">
          <Create />
        </Route>
      
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </div>
  </Router>
  );
}

export default App;
