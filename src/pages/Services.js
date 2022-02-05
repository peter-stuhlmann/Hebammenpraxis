import React from 'react';

// import Article from '../components/Article';
import Services from '../components/Services';
import FlexLayout from '../components/FlexLayout';

import services from '../data/services';

export default function ServicePage(props) {
  const { setContactFormVisibility } = props;

  return (
    <>
      <Services
        content={services.services}
        onButtonClick={() => setContactFormVisibility(true)}
      />

      {/* ÜBERSCHRIFT fehlt noch (Modul von pages/About.js kopieren) */}
      <FlexLayout content={services.before} />

      {/* ÜBERSCHRIFT fehlt noch*/}
      <FlexLayout content={services.after} />
    </>
  );
}
