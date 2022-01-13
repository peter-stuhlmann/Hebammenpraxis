import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './assets/css/global.css';

import Header from './components/Header';
import Router from './components/Router';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={'Loading...'}>
        <Header />
        <Router />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
