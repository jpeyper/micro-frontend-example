import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createBrowserHistory } from "history";

window.renderExample2 = (containerId, history = createBrowserHistory(), basename = '/') => {
  ReactDOM.render(<App history={history} basename={basename} />, document.getElementById(containerId));
};

window.unmountExample2 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};