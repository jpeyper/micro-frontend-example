import React from 'react';
import MicroFrontend from './MicroFrontend'

const Parent = ({ history, basename }) => (
  <MicroFrontend history={history} name="Parent" host="" basename={basename} />
);

export default Parent;
