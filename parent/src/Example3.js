import React from 'react';
import MicroFrontend from './MicroFrontend'

const Example3 = ({ history }) => (
  <MicroFrontend history={history} name="Example3" host="/mfe/example3" basename="/example3" />
);

export default Example3;
