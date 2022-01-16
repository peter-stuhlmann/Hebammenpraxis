import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}
