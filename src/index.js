import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/common.css';
import Header from './Header/Header';
import Reviews from './Reviews/Reviews';
import CreateTour from './CreateTour/CreateTour';
import Footer from './Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header/>
    <CreateTour/>
    <Reviews/>
    <Footer/>
  </React.StrictMode>
);
