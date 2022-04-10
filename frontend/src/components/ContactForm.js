import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import Button from './Button';
import CloseButton from './CloseButton';
import LoadingSpinner from './LoadingSpinner';

export default function ContactForm(props) {
  const {
    contactFormVisibility,
    setContactFormVisibility,
    sendingStatus,
    setSendingStatus,
  } = props;

  const [loading, setLoading] = useState(true);
  const [infoText, setInfoText] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_WP_SERVER}/info-text`)
      .then((res) => {
        setInfoText(res.data[0].title.rendered);
        setLoading(false);
      })
      .catch(() => {
        setInfoText(null);
        setLoading(false);
      });
  }, []);

  const [buttonContent, setButtonContent] = useState('Absenden');

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    delivery: '',
    gravida: '',
    para: '',
    message: '',
    terms: false,
  });

  const [formDataError, setFormDataError] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormDataError({
      name: !formData['name'] ? 'Bitte gib Deinen Namen an (Pflichtfeld)' : '',
      address: !formData['address']
        ? 'Bitte gib Deine Adresse an (Pflichtfeld)'
        : '',
      email: !formData['email']
        ? 'Bitte gib Deine E-Mail-Adresse an (Pflichtfeld)'
        : '',
      delivery: !formData['delivery']
        ? 'Bitte gib Deinen ET an (Pflichtfeld)'
        : '',
    });

    if (
      formData['name'] &&
      formData['address'] &&
      formData['email'] &&
      formData['delivery'] &&
      formData['terms']
    ) {
      setButtonContent('Wird gesendet...');

      axios
        .post(`${process.env.REACT_APP_SERVER}/send-message`, formData)
        .then((res) => {
          setSendingStatus(res.data.status);
        })
        .catch(() => {
          setSendingStatus('fail');
        });
    }
  };

  return (
    <Container contactFormVisibility={contactFormVisibility}>
      {sendingStatus === 'success' && <Redirect to="/nachricht-gesendet" />}
      {sendingStatus === 'fail' && <Redirect to="/senden-fehlgeschlagen" />}
      {sendingStatus === '' && (
        <>
          <CloseButton onClick={() => setContactFormVisibility(false)} />
          <Flex>
            <Heading>Betreuungsanfrage</Heading>
          </Flex>
          {loading ? <LoadingSpinner height="auto" /> : <Info>{infoText}</Info>}
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
                    warning={formDataError.name}
                  />
                  {formDataError.name && <Error>{formDataError.name}</Error>}
                </FormItem>
                <FormItem>
                  <Label htmlFor="address">ADRESSE</Label>
                  <Input
                    type="text"
                    name="address"
                    placeholder="..."
                    onChange={handleChange}
                    warning={formDataError.address}
                  />
                  {formDataError.address && (
                    <Error>{formDataError.address}</Error>
                  )}
                </FormItem>
                <FormItem>
                  <Label htmlFor="email">E-Mail Adresse</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="..."
                    onChange={handleChange}
                    warning={formDataError.email}
                  />
                  {formDataError.email && <Error>{formDataError.email}</Error>}
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
                    type="date"
                    name="delivery"
                    placeholder="..."
                    onChange={handleChange}
                    warning={formDataError.delivery}
                  />
                  {formDataError.delivery && (
                    <Error>{formDataError.delivery}</Error>
                  )}
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
              <Check>
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  onChange={handleCheckChange}
                />
                <label htmlFor="terms">
                  Ich habe die{' '}
                  <Link to="/impressum">AGB und Teilnahmebedingungen</Link> und
                  die{' '}
                  <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>{' '}
                  gelesen, zur Kenntnis genommen und bin damit einverstanden
                </label>
              </Check>
              <Button
                onClick={handleSubmit}
                style={{ marginTop: '40px' }}
                disabled={buttonContent === 'Wird gesendet...'}
              >
                {buttonContent}
              </Button>
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

const Info = styled.div`
  font-size: clamp(26px, 5vw, 40px);
  line-height: clamp(32px, 5vw, 48px);
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
  position: relative;
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
  background-color: ${(props) => (props.warning ? '#ffe0e5' : '#fff')};
  box-shadow: ${(props) =>
    props.warning ? 'inset 0px 0px 0px 4px #f00' : 'none'};

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

const Check = styled.div`
  display: flex;
  align-items: center;
  color: #fff;

  label {
    margin-left: 10px;
  }

  a {
    color: #fff;
  }
`;

const Error = styled.span`
  color: #fff;
  position: absolute;
  top: 18px;
  left: 0px;
  font-size: 13px;
`;
