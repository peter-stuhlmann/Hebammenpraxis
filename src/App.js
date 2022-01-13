import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './assets/css/global.css';

import Router from './components/Router';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={'Loading...'}>
        <Router />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
