import React, { Suspense, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './assets/css/global.css';

import Header from './components/Header';
import Router from './components/Router';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
// import CookieConsentBanner from './components/CookieConsent';

export default function App() {
  const [contactFormVisibility, setContactFormVisibility] = useState(false);
  const [sendingStatus, setSendingStatus] = useState('');

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        {/* <CookieConsentBanner /> */}
        <Header
          contactFormVisibility={contactFormVisibility}
          setContactFormVisibility={setContactFormVisibility}
          setSendingStatus={setSendingStatus}
        />
        <Router
          contactFormVisibility={contactFormVisibility}
          setContactFormVisibility={setContactFormVisibility}
          sendingStatus={sendingStatus}
          setSendingStatus={setSendingStatus}
        />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
