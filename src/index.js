import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import"../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import App from './components/app';
import { BrowserRouter } from 'react-router-dom';
import "../node_modules/react-toastify/dist/ReactToastify.css";


ReactDOM.render(

  <BrowserRouter>
    <App/>
    </BrowserRouter>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
