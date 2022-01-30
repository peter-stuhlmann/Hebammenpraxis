import React, { useEffect, lazy } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Courses = lazy(() => import('../pages/Courses'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Practice = lazy(() => import('../pages/Practice'));
const Services = lazy(() => import('../pages/Services'));

export default function Router(props) {
  const { contactFormVisibility, setContactFormVisibility } = props;

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Switch>
      <Route exact path="/">
        <Home
          contactFormVisibility={contactFormVisibility}
          setContactFormVisibility={setContactFormVisibility}
        />
      </Route>
      <Route exact path="/ueber-uns" component={About} />
      <Route exact path="/praxis" component={Practice} />
      <Route exact path="/leistungen" component={Services} />
      <Route exact path="/kurse" component={Courses} />
      <Route exact path="/kontakt" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}
