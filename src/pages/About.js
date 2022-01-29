import React from 'react';
import styled from 'styled-components';
import Article from '../components/Article';
import CenteredTextBox from '../components/CenteredTextBox';

import FlexLayout from '../components/FlexLayout';
import ImageBanner from '../components/ImageBanner';

import about from '../data/about';

export default function About() {
  return (
    <>
      <Heading>{about.heading}</Heading>
      <FlexLayout content={about.team} />
      <ImageBanner content={about.imgBanner} height="657px" />
      <CenteredTextBox content={about.quote} />
      <Article content={about.article[0]} alternate />
      <Article content={about.article[1]} />
    </>
  );
}

const Heading = styled.h2`
  font-family: Josefin Slab;
  font-size: 40px;
  line-height: 48px;
  font-weight: normal;
  color: #000;
  width: 100%;
  max-width: 1670px;
  margin: 233px auto 53px auto;
  padding: 15px;
  box-sizing: border-box;
`;
