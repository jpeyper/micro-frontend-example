import React from 'react';
import MicroFrontend from './MicroFrontend'

const Example2 = ({ history }) => (
  <MicroFrontend history={history} name="Example2" host="/mfe/example2" basename="/example2" />
);

export default Example2;
