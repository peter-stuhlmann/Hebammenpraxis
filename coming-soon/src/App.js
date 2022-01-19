import React, { Suspense, lazy } from 'react';

import './assets/css/global.css';

const Home = lazy(() => import('./components/Home'));

export default function App() {
  return (
    <Suspense fallback={'Inhalt wird geladen...'}>
      <Home />
    </Suspense>
  );
}
