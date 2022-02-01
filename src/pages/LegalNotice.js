import React, { Fragment } from 'react';
import styled from 'styled-components';

import legalNotice from '../data/legalNotice';

export default function LegalNotice() {
  return (
    <Section>
      <Container>
        <Heading>{legalNotice.heading}</Heading>
        <Text>
          {legalNotice.text.map((item) => (
            <Fragment key={item}>
              {item}
              <br />
            </Fragment>
          ))}
        </Text>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  background-color: #8e9b92;
`;

const Container = styled.main`
  width: 100%;
  max-width: 1670px;
  padding: 100px 15px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const Heading = styled.h2`
  color: #fff;
  font-size: clamp(30px, 5vw, 70px);
  line-height: clamp(37px, 5vw, 85px);
  font-family: Josefin Slab;
  font-weight: normal;
  margin: 0 0 75px 0;
`;

const Text = styled.p`
  font-size: 40px;
  line-height: 48px;
  font-family: Josefin Slab;
  color: #fff;
`;
