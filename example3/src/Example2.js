import React from 'react';
import MicroFrontend from './MicroFrontend'

const Example2 = ({ history, basename }) => (
  <MicroFrontend history={history} name="Example2" host="/mfe/example2" basename={`${basename}/example2`} />
);

export default Example2;
