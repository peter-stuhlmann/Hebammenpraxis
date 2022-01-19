import React from 'react';
import styled from 'styled-components';

import Button from './Button';

export default function MapContainer(props) {
  const { content } = props;

  return (
    <Container>
      <Heading>Der Weg zu uns</Heading>
      <Map title="map" src={content.map} frameBorder="0" />
      <CustomizedButton href={content.button.href}>
        {content.button.linkText}
      </CustomizedButton>
    </Container>
  );
}

const Container = styled.section`
  background-color: #a49194;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #fff;
`;

const Heading = styled.h2`
  font-family: Josefin Slab;
  font-size: 40px;
  line-height: 48px;
  color: #fff;
  width: 100%;
  max-width: 1670px;
  margin: 157px auto 80px auto;
  padding: 15px;
  box-sizing: border-box;
`;

const Map = styled.iframe`
  width: 100%;
  max-width: 1130px;
  height: 707px;
  max-height: 80vh;
  overflow: hidden;
  display: block;
  margin: 0 auto;
`;

const CustomizedButton = styled(Button)`
  margin: 74px auto 84px auto;
`;
