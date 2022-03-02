import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';
import LoadingSpinner from './LoadingSpinner';

export default function MapContainer(props) {
  const { content } = props;

  const [loading, setLoading] = useState(true);

  return (
    <Container>
      <Heading>Der Weg zu uns</Heading>
      <Map>
        {loading && <LoadingSpinner />}
        <iframe
          title="map"
          src={content.map}
          frameBorder="0"
          onLoad={() => setLoading(true)}
        />
      </Map>
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
  font-weight: normal;
  color: #fff;
  width: 100%;
  max-width: 1670px;
  margin: 157px auto 80px auto;
  padding: 15px;
  box-sizing: border-box;
`;

const Map = styled.div`
  width: 100%;
  max-width: 1130px;
  height: 707px;
  max-height: 80vh;
  margin: 0 auto;
  position: relative;

  & > div {
    height: 100%;
    width: 100%;
  }

  iframe {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

const CustomizedButton = styled(Button)`
  margin: 74px auto 84px auto;
`;
