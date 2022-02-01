import React from 'react';

import FlexLayout from '../components/FlexLayout';
import CenteredTextBox from '../components/CenteredTextBox';
import ImageBanner from '../components/ImageBanner';
import FAQ from '../components/FAQ';
import Table from '../components/Table';
import Services from '../components/Services';

import home from '../data/home';

export default function Home(props) {
  const {
    contactFormVisibility,
    setContactFormVisibility,
    sendingStatus,
    setSendingStatus,
  } = props;

  return (
    <>
      <ImageBanner
        large
        textWidth="600px"
        content={home.imgBanner[0]}
        backgroundPosition="bottom center"
        contactFormVisibility={contactFormVisibility}
        setContactFormVisibility={setContactFormVisibility}
        sendingStatus={sendingStatus}
        setSendingStatus={setSendingStatus}
      />
      <CenteredTextBox content={home.centeredTextBox} />
      <FlexLayout content={home.flexLayout} />
      <ImageBanner
        content={home.imgBanner[1]}
        height="657px"
        width="1640px"
        backgroundPosition="bottom center"
        margin="0 auto 374px auto"
      />
      <Services content={home.services} />
      <Table content={home.news} />
      <FAQ content={home.faq} />
    </>
  );
}
