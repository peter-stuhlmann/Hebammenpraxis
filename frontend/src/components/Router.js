import React, { useEffect, lazy } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

// import useAnalytics from '../helpers/useAnalytics';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const CourseBooking = lazy(() => import('../pages/CourseBooking'));
const Courses = lazy(() => import('../pages/Courses'));
const LegalNotice = lazy(() => import('../pages/LegalNotice'));
const SendingStatus = lazy(() => import('../pages/SendingStatus'));
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

  // useAnalytics(process.env.REACT_APP_GA);

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
        <CourseBooking
          sendingStatus={sendingStatus}
          setSendingStatus={setSendingStatus}
        />
      </Route>
      <Route exact path="/kontakt" component={Contact} />
      <Route exact path="/impressum" component={LegalNotice} />
      <Route exact path="/datenschutzerklaerung" component={PrivacyPolicy} />
      <Route exact path="/nachricht-gesendet">
        <SendingStatus
          setSendingStatus={setSendingStatus}
          setContactFormVisibility={setContactFormVisibility}
          heading="Nachricht gesendet"
          text="Die Nachricht wurde gesendet. Du wirst in Kürze kontaktiert."
          button={['/', 'Zurück zur Startseite', false]}
        />
      </Route>
      <Route exact path="/senden-fehlgeschlagen">
        <SendingStatus
          setSendingStatus={setSendingStatus}
          setContactFormVisibility={setContactFormVisibility}
          heading="Nachricht konnte nicht gesendet werden"
          text="Leider ist ein Fehler aufgetreten. Bitte warte einen Moment und stelle Deine Anfrage erneut."
          button={['/', 'Zurück zur Betreuungsanfrage', true]}
        />
      </Route>
      <Route exact path="/kursbuchung-erfolgreich">
        <SendingStatus
          setSendingStatus={setSendingStatus}
          setContactFormVisibility={setContactFormVisibility}
          heading="Der Kurs wurde gebucht"
          text=""
          button={['/', 'Zurück zur Startseite', false]}
        />
      </Route>
      <Route exact path="/kursbuchung-fehlgeschlagen">
        <SendingStatus
          setSendingStatus={setSendingStatus}
          setContactFormVisibility={setContactFormVisibility}
          heading="Kursbuchung fehlgeschlagen"
          text="Es ist ein Fehler aufgetreten. Bitte versuche es in Kürze erneut."
          button={['/kurse', 'Zurück zur Kursübersicht', false]}
        />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}
