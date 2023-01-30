import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/common.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header/>
    <Footer/>
  </React.StrictMode>
);
