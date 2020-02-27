import React from 'react';
import MicroFrontend from './MicroFrontend'

const Example3 = ({ history, basename }) => (
  <MicroFrontend history={history} name="Example3" host="/mfe/example3" basename={`${basename}/example3`} />
);

export default Example3;
