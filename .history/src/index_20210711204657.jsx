import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import 'macro-css';
import App from './App';
//exact это строгое соблюдение сылки
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      {/*<Route path={"/favorites"} exact ></Route >*/}
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
