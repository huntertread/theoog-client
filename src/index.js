import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppGateway from './AppGateway';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AppGateway />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
