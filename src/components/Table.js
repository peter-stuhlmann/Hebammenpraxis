import React from 'react';
import styled from 'styled-components';

export default function Table(props) {
  const { content } = props;

  return (
    <Container>
      {content.map((entry) => (
        <Entry key={entry.content.heading}>
          <Heading>{entry.heading}</Heading>
          <Content>
            <Heading>{entry.content.heading}</Heading>
            <Description>{entry.content.description}</Description>
          </Content>
        </Entry>
      ))}
    </Container>
  );
}

const Container = styled.section`
  background-color: #e3e0d4;
  padding: 0 15px 110px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const Entry = styled.div`
  padding: 110px 15px;
  box-sizing: border-box;
  border-bottom: 2px solid #707070;
  display: flex;
  flex-flow: row wrap;
`;

const Heading = styled.h2`
  flex: 0 0 40%;
  font-family: Josefin Slab;
  font-size: clamp(30px, 5vw, 70px);
  line-height: clamp(37px, 5vw, 85px);
  margin: 0;

  @media (max-width: 480px) {
    flex: 0 0 100%;
    margin-bottom: 45px;
  }
`;

const Content = styled.div`
  flex: 0 0 60%;

  @media (max-width: 480px) {
    flex: 0 0 100%;
  }
`;

const Description = styled.p`
  font-family: Gilroy;
  font-size: clamp(18px, 5vw, 22px);
  line-height: clamp(25px, 5vw, 30px);
  letter-spacing: 2.2px;
  color: #37322c;
`;
