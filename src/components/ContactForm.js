import React from 'react';
import styled from 'styled-components';

import CloseButton from './CloseButton';

export default function ContactForm(props) {
  const { setContactFormVisibility } = props;

  return (
    <Container>
      <CloseButton onClick={() => setContactFormVisibility(false)} />
      <Flex>
        <Heading>Betreuungsanfrage*</Heading>
        <Note>
          *Bitte beachten Sie, dass wir schneller auf ihre Anfrage reagieren
          können, wenn sie vollständig ausgefüllt ist.
        </Note>
      </Flex>
      <Info>Aktuell erst wieder Plätze ab ET im November 2022!</Info>
      <Flex>
        <Column>
          <FormItem>
            <Label for="name">NAME</Label>
            <Input type="text" name="name" placeholder="..." />
          </FormItem>
          <FormItem>
            <Label for="address">ADRESSE</Label>
            <Input type="text" name="address" placeholder="..." />
          </FormItem>
          <FormItem>
            <Label for="email">E-Mail Adresse</Label>
            <Input type="email" name="email" placeholder="..." />
          </FormItem>
          <FormItem>
            <Label for="message">Möglichkeit für eigenen Text</Label>
            <TextArea name="message" placeholder="..." />
          </FormItem>
        </Column>
        <Column>
          <FormItem>
            <Label for="et">ET</Label>
            <Input type="text" name="et" placeholder="..." />
          </FormItem>
          <FormItem>
            <Label for="gravida">GRAVIDA</Label>
            <Input type="text" name="gravida" placeholder="..." />
          </FormItem>
          <FormItem>
            <Label for="para">PARA</Label>
            <Input type="text" name="para" placeholder="..." />
          </FormItem>
          <FormItem>
            <Label for="phone">TELEFONNUMMER</Label>
            <Input type="text" name="phone" placeholder="..." />
          </FormItem>
        </Column>
      </Flex>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 1360px;
  margin: 57px auto;
  background-color: #a49194;
  padding: 70px;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 15px 15px 15px;
  }
`;

const Flex = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

const Heading = styled.h2`
  font-size: clamp(33px, 5vw, 70px);
  line-height: clamp(40px, 5vw, 85px);
  font-family: Josefin Slab;
  font-weight: normal;
  color: #fff;
  margin: 0 47px 47px 0;
`;

const Note = styled.div`
  font-size: 17px;
  line-height: 20px;
  font-family: Gilroy;
  letter-spacing: 1.7px;
  color: #fff;
  max-width: 395px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Info = styled.div`
  font-size: 40px;
  line-height: 48px;
  font-family: Josefin Slab;
  color: #fff;
  margin-bottom: 55px;
`;

const Column = styled.div`
  flex: 0 0 calc(50% - 14px);

  &:first-child {
    margin-right: 28px;

    @media (max-width: 1024px) {
      margin-right: 0;
    }
  }
`;

const FormItem = styled.div`
  margin-bottom: 19px;
`;

const Label = styled.label`
  font-size: 17px;
  line-height: 20px;
  font-family: Gilroy;
  letter-spacing: 1.7px;
  color: #fff;
  display: block;
  margin-bottom: 16px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 17px;
  line-height: 20px;
  font-family: Gilroy;
  letter-spacing: 1.7px;
  color: #000;
  padding: 12px;
  box-sizing: border-box;
  border: none;
  outline: none;

  ::placeholder {
    font-size: 17px;
    line-height: 20px;
    font-family: Gilroy;
    letter-spacing: 1.7px;
    color: #a49194;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  font-size: 17px;
  line-height: 20px;
  font-family: Gilroy;
  letter-spacing: 1.7px;
  color: #000;
  padding: 12px;
  box-sizing: border-box;
  border: none;
  outline: none;
  resize: none;
  height: 150px;

  ::placeholder {
    font-size: 17px;
    line-height: 20px;
    font-family: Gilroy;
    letter-spacing: 1.7px;
    color: #a49194;
  }
`;
