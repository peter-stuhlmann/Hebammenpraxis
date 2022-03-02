import React from 'react';
import CenteredTextBox from '../components/CenteredTextBox';
import FlexLayout from '../components/FlexLayout';
import Gallery from '../components/Gallery';

import ImageBanner from '../components/ImageBanner';

import practice from '../data/practice';

export default function Practice() {
  return (
    <>
      <ImageBanner large content={practice.imgBanner[0]} textWidth="1550px" />
      <CenteredTextBox content={practice.centeredTextBox} />
      <FlexLayout content={practice.flexLayout} />
      <ImageBanner
        content={practice.imgBanner[1]}
        height="657px"
        width="1640px"
        backgroundPosition="bottom center"
        margin="0 auto"
        textWidth="950px"
      />
      <Gallery content={practice.gallery} />
    </>
  );
}
