import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

export default function SendingStatus(props) {
  const { setSendingStatus, setContactFormVisibility, heading, text, button } =
    props;

  return (
    <Container>
      <Heading>{heading}</Heading>
      <Text>{text}</Text>
      <Button
        href={button[0]}
        color={['#E3E0D4', '#fff']}
        style={{ marginTop: '40px' }}
        onClick={() => {
          setSendingStatus('');
          setContactFormVisibility(button[2]);
        }}
      >
        {button[1]}
      </Button>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  max-width: 1670px;
  padding: 100px 15px;
  box-sizing: border-box;
  margin: 0 auto;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Heading = styled.h2`
  font-family: Josefin Slab;
  font-size: clamp(30px, 5vw, 70px);
  line-height: clamp(37px, 5vw, 85px);
  font-weight: normal;
  color: #be9ea4;
  text-align: center;
  margin-bottom: 45px;
`;

const Text = styled.p`
  text-align: center;
  font-size: 22px;
  line-height: 30px;
  font-family: Gilroy;
  color: #000;
`;
