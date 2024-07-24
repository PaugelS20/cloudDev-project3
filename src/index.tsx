import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import reportWebVitals from './reportWebVitals';
import './Master.css';

const root = ReactDOM.createRoot(document.getElementById('root')); root.render( <App /> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// old way to use react router dom
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,document.getElementById('root'));

