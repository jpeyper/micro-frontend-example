import React from 'react';
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Example2 from './Example2'

const App = ({ history, basename }) => (
  <Router history={history}>
    <p>
      Hello from example 3<br />
      This example is showing how microfront ends can also be containers for other micro frontends, and do things like adding sub routes.
    </p>
    <nav>
      <ul>
        <li>
          <Link to={`${basename}/example2`}>Example 2</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path={`${basename}/example2`}>
        <Example2 history={history} basename={basename} />
      </Route>
    </Switch>
  </Router>
)

export default App;
