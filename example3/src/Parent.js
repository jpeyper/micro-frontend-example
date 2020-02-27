import React from 'react';
import MicroFrontend from './MicroFrontend'

const Parent = ({ history, basename }) => (
  <MicroFrontend history={history} name="Parent" host="/mfe/parent" basename={basename} />
);

export default Parent;
