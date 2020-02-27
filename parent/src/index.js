import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createBrowserHistory } from "history";

window.renderParent = (container, history = createBrowserHistory(), basename = '') => {
  ReactDOM.render(<App history={history} basename={basename} />, container);
};

window.unmountParent = container => {
  ReactDOM.unmountComponentAtNode(container);
};