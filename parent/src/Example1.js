import React from 'react';
import MicroFrontend from './MicroFrontend'

const Example1 = ({ history, basename }) => (
  <MicroFrontend history={history} name="Example1" host="/mfe/example1" basename={`${basename}/example3`} />
);

export default Example1;
