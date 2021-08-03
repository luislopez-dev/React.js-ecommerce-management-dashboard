import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './home/homeComponent';
import Login from './login/loginComponent';
import Register from './register/registerComponent';
import Edit from './edit/editComponent';
import Create from './create/createComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      
    <div>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/edit">
          <Edit />
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
