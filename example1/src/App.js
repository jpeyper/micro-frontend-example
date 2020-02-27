import React from "react";
import { 
  Router, 
  Switch, 
  Route 
} from "react-router-dom";

const App = ({ history, basename }) => {
  const parentBasename = basename
    .split("/")
    .slice(0, -1)
    .join("/");
  return (
    <Router history={history}>
      <p>
        Hello from example 1<br />
        This example is not based on route and will appear on every route.
        <br />
        It does react to the route changing however.
      </p>
      <Switch>
        <Route path={`${parentBasename}/example1`}>
          <p>You should not see anything else below.</p>
        </Route>
        <Route path={`${parentBasename}/example2`}>
          <p>You should see Example 2 below.</p>
        </Route>
        <Route path={`${parentBasename}/example3`}>
          <p>You should see Example 3 below.</p>
        </Route>
        <Route>
          <p>Please select an example above.</p>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
