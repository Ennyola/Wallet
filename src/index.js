import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer} from 'react-toastify';

import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);


