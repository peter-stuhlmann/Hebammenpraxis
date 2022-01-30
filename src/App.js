import React, { Suspense, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './assets/css/global.css';

import Header from './components/Header';
import Router from './components/Router';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

export default function App() {
  const [contactFormVisibility, setContactFormVisibility] = useState(false);

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Header
          contactFormVisibility={contactFormVisibility}
          setContactFormVisibility={setContactFormVisibility}
        />
        <Router
          contactFormVisibility={contactFormVisibility}
          setContactFormVisibility={setContactFormVisibility}
        />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
