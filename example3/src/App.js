import React from 'react';
import Parent from './Parent'

const App = ({ history, basename }) => (
  <>
    <p>
      Hello from example 3<br />
      This example is showing how microfront ends can also be containers for other micro frontends, and do things like adding sub routes. It's mounting the parent again as the sub-component.
    </p>
    <Parent history={history} basename={basename} />
  </>
)

export default App;
