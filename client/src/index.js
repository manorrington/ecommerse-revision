import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
// import './sass/index.scss'

// import Layout from './components/Layout'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    {/* <Layout /> */}
    </BrowserRouter>
  </React.StrictMode>
);

