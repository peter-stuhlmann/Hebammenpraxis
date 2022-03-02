import React from 'react';
import styled from 'styled-components';

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

      <Heading>Vor der Geburt / Nach der Geburt</Heading>
      <FlexLayout content={services.procedure} smallHeading />
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
  margin: 157px auto 80px auto;
  padding: 15px;
  box-sizing: border-box;
`;
