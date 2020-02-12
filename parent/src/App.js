import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'

const App = () => (
  <Router>
    <header className="App-header">
      <h1>
        Welcome to Micro Frontends
        </h1>
    </header>
    <nav>
      <ul>
        <li>
          <Link to="/example1">Example 1</Link>
        </li>
        <li>
          <Link to="/example2">Example 2</Link>
        </li>
        <li>
          <Link to="/example3">Example 3</Link>
        </li>
      </ul>
    </nav>
    <Example1 />
    <Switch>
      <Route path="/example2" component={Example2} />
      <Route path="/example3" component={Example3} />
    </Switch>
  </Router>
);

export default App;
