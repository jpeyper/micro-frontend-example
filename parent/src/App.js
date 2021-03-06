import React from 'react';
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'

const App = ({ history, basename }) => (
  <Router history={history}>
    <header className="App-header">
      <h1>
        Welcome to Micro Frontends
        </h1>
    </header>
    <nav>
      <ul>
        <li>
          <Link to={`${basename}/example1`}>Example 1</Link>
        </li>
        <li>
          <Link to={`${basename}/example2`}>Example 2</Link>
        </li>
        <li>
          <Link to={`${basename}/example3`}>Example 3</Link>
        </li>
      </ul>
    </nav>
    <Example1 history={history} basename={basename} />
    <Switch>
      <Route path={`${basename}/example2`}>
        <Example2 history={history} basename={basename} />
      </Route>
      <Route path={`${basename}/example3`}>
        <Example3 history={history} basename={basename} />
      </Route>
    </Switch>
  </Router>
);

export default App;
