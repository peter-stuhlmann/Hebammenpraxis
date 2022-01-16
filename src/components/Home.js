import React from 'react';

import FlexLayout from './FlexLayout';
import CenteredTextBox from './CenteredTextBox';
import ImageBanner from './ImageBanner';
import FAQ from './FAQ';
import Table from './Table';
import Services from './Services';

import home from '../data/home';

export default function Home() {
  return (
    <>
      <ImageBanner large content={home.imgBanner[0]} />
      <CenteredTextBox content={home.centeredTextBox} />
      <FlexLayout content={home.flexLayout} />
      <ImageBanner content={home.imgBanner[1]} height="657px" width="1640px" />
      <Services content={home.services} />
      <Table content={home.news} />
      <FAQ content={home.faq} />
    </>
  );
}
