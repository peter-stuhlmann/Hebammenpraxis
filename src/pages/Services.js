import React from 'react';

import Article from '../components/Article';
import Services from '../components/Services';

import services from '../data/services';

export default function ServicePage(props) {
  const { setContactFormVisibility } = props;

  return (
    <>
      <Services
        content={services.services}
        onButtonClick={() => setContactFormVisibility(true)}
      />
      <Article
        content={services.article[1]}
        buttonColor={['#E3E0D4', '#fff']}
      />
    </>
  );
}
