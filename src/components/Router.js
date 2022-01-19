import React, { useEffect, lazy } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function Router() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/kontakt" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}
