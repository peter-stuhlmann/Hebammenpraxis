import React, { useEffect, lazy } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const CourseBooking = lazy(() => import('../pages/CourseBooking'));
const Courses = lazy(() => import('../pages/Courses'));
const LegalNotice = lazy(() => import('../pages/LegalNotice'));
const MessageSent = lazy(() => import('../pages/MessageSent'));
const MessageNotSent = lazy(() => import('../pages/MessageNotSent'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Practice = lazy(() => import('../pages/Practice'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const Services = lazy(() => import('../pages/Services'));

export default function Router(props) {
  const {
    contactFormVisibility,
    setContactFormVisibility,
    sendingStatus,
    setSendingStatus,
  } = props;

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
          sendingStatus={sendingStatus}
          setSendingStatus={setSendingStatus}
        />
      </Route>
      <Route exact path="/ueber-uns" component={About} />
      <Route exact path="/praxis" component={Practice} />
      <Route exact path="/leistungen">
        <Services setContactFormVisibility={setContactFormVisibility} />
      </Route>
      <Route exact path="/kurse">
        <Courses setContactFormVisibility={setContactFormVisibility} />
      </Route>
      <Route exact path="/kurs-buchen">
        <CourseBooking />
      </Route>
      <Route exact path="/kontakt" component={Contact} />
      <Route exact path="/impressum" component={LegalNotice} />
      <Route exact path="/datenschutzerklaerung" component={PrivacyPolicy} />
      <Route exact path="/nachricht-gesendet">
        <MessageSent
          setSendingStatus={setSendingStatus}
          setContactFormVisibility={setContactFormVisibility}
        />
      </Route>
      <Route exact path="/senden-fehlgeschlagen">
        <MessageNotSent
          setSendingStatus={setSendingStatus}
          setContactFormVisibility={setContactFormVisibility}
        />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}
