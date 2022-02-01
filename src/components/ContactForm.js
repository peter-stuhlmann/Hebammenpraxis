import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Button from './Button';
import CloseButton from './CloseButton';
import { Redirect } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

export default function ContactForm(props) {
  const {
    contactFormVisibility,
    setContactFormVisibility,
    sendingStatus,
    setSendingStatus,
  } = props;

  const [buttonContent, setButtonContent] = useState('Absenden');

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    delivery: '',
    gravida: '',
    para: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    setButtonContent('Wird gesendet...');

    axios
      .post(
        `${process.env.REACT_APP_SEND_MESSAGE_SERVER}/send-message`,
        formData
      )
      .then((res) => {
        setSendingStatus(res.data.status);
      })
      .catch(setSendingStatus('fail'));
  };

  return (
    <Container contactFormVisibility={contactFormVisibility}>
      {sendingStatus === 'success' && <Redirect to="/nachricht-gesendet" />}
      {sendingStatus === 'fail' && <Redirect to="/senden-fehlgeschlagen" />}
      {sendingStatus === '' && (
        <>
          <CloseButton onClick={() => setContactFormVisibility(false)} />
          <Flex>
            <Heading>Betreuungsanfrage*</Heading>
            <Note>
              *Bitte beachten Sie, dass wir schneller auf ihre Anfrage reagieren
              können, wenn sie vollständig ausgefüllt ist.
            </Note>
          </Flex>
          <Info>Aktuell erst wieder Plätze ab ET im November 2022!</Info>
          <form onSubmit={handleSubmit}>
            <Flex>
              <Column>
                <FormItem>
                  <Label htmlFor="name">NAME</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="..."
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem>
                  <Label htmlFor="address">ADRESSE</Label>
                  <Input
                    type="text"
                    name="address"
                    placeholder="..."
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem>
                  <Label htmlFor="email">E-Mail Adresse</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="..."
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem>
                  <Label htmlFor="message">Möglichkeit für eigenen Text</Label>
                  <TextArea
                    name="message"
                    placeholder="..."
                    onChange={handleChange}
                  />
                </FormItem>
              </Column>
              <Column>
                <FormItem>
                  <Label htmlFor="delivery">ET</Label>
                  <Input
                    type="text"
                    name="delivery"
                    placeholder="..."
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem>
                  <Label htmlFor="gravida">GRAVIDA</Label>
                  <Input
                    type="text"
                    name="gravida"
                    placeholder="..."
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem>
                  <Label htmlFor="para">PARA</Label>
                  <Input
                    type="text"
                    name="para"
                    placeholder="..."
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem>
                  <Label htmlFor="phone">TELEFONNUMMER</Label>
                  <Input
                    type="text"
                    name="phone"
                    placeholder="..."
                    onChange={handleChange}
                  />
                </FormItem>
              </Column>
              <Column>
                <Button
                  href=""
                  onClick={handleSubmit}
                  style={{ marginTop: '40px' }}
                  disabled={buttonContent === 'Wird gesendet...'}
                >
                  {buttonContent}
                </Button>
              </Column>
            </Flex>
          </form>
        </>
      )}
    </Container>
  );
}

const Container = styled.section`
  display: ${(props) => (props.contactFormVisibility ? 'block' : 'none')};
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
  flex-flow row wrap;

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