import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/common.css';
import Header from './Header/Header';
import Tours from './Tours/Tours';
import Reviews from './Reviews/Reviews';
import CreateTour from './CreateTour/CreateTour';
import Gallery from './Gallery/Gallery';
import Stories from './Stories/Stories';
import Cta from './Cta/Cta';
import Footer from './Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header/>
    <Tours/>
    <CreateTour/>
    <Reviews/>
    <Gallery/>
    <Stories/>
    <Cta/>
    <Footer/>
  </React.StrictMode>
);
