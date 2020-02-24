import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createBrowserHistory } from "history";

window.renderExample3 = (container, history = createBrowserHistory(), basename = '') => {
  ReactDOM.render(<App history={history} basename={basename} />, container);
};

window.unmountExample3 = container => {
  ReactDOM.unmountComponentAtNode(container);
};