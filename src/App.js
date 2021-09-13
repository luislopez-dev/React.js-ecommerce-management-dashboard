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
import ProtectedRoute from './ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navbar>
        <Navbar.Brand>My store</Navbar.Brand>
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

        <Route path="/login">
          <Login />
        </Route>

        <ProtectedRoute exact path="/update" component={Update} />

        <ProtectedRoute exact path="/create" component={Create} />
      
        <ProtectedRoute exact path="/home" component={Home} />

        <Redirect from="/" to="/home" />

      </Switch>
    </div>
  </Router>
  );
}

export default App;