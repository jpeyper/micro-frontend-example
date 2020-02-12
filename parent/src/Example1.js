import React from 'react';
import MicroFrontend from './MicroFrontend'

const Example1 = ({ history }) => (
  <MicroFrontend history={history} name="Example1" host="/mfe/example1" basename="/example1"/>
);

export default Example1;
