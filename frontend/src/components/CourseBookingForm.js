import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

import Button from './Button';
import monthNameGenerator from '../helpers/monthNameGenerator';

export default function CourseBookingForm(props) {
  const {
    courseId,
    courseTitle,
    courseStartDate,
    courseDescription,
    sendingStatus,
    setSendingStatus,
  } = props;

  const [buttonContent, setButtonContent] = useState('Absenden');

  const formattedCourseStartDate = `${courseStartDate.slice(
    0,
    2
  )}. ${monthNameGenerator(
    courseStartDate.slice(3, 5)
  )} ${courseStartDate.slice(6, 10)} `;

  const [formData, setFormData] = useState({
    user: '1',
    vorname: '',
    nachname: '',
    strasse: '',
    plz: '',
    ort: '',
    telefonNummer: '',
    namePartner: '',
    email: '',
    geburtsdatum: '',
    geburtsdatumkind: '',
    entbindungstermin: '',
    idKurs: courseId,
    kassenik: '',
    anzahl: 1,
    versicherungsart: '',
    versichertennummer: '',
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  const [formDataError, setFormDataError] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRadioChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.id,
    });
  };

  const handleDateChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: new Date(event.target.value)
        .toISOString()
        .slice(0, 10),
    });
  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // validation
    const date = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
    const zip = /^[0-9]{5}$/;
    const email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const kassenik = /^[0-9]{9}$/;

    setFormDataError({
      vorname: !formData['vorname']
        ? 'Bitte gib Deinen Vornamen an (Pflichtfeld)'
        : '',
      nachname: !formData['nachname']
        ? 'Bitte gib Deinen Nachnamen an (Pflichtfeld)'
        : '',
      geburtsdatum: !formData['geburtsdatum']
        ? 'Bitte gib Dein Geburtsdatum an (Pflichtfeld)'
        : !formData['geburtsdatum'].match(date)
        ? 'Ungültige Eingabe'
        : '',
      entbindungstermin: !formData['entbindungstermin']
        ? 'Bitte gib Deinen Entbindungstermin an (Pflichtfeld)'
        : !formData['entbindungstermin'].match(date)
        ? 'Ungültige Eingabe'
        : '',
      email: !formData['email']
        ? 'Bitte gib Deine E-Mail-Adresse an (Pflichtfeld)'
        : !formData['email'].match(email)
        ? 'Ungültige Eingabe'
        : '',
      strasse: !formData['strasse']
        ? 'Bitte gib Deine Straße und Hausnummer an (Pflichtfeld)'
        : '',
      plz: !formData['plz']
        ? 'Bitte gib Deine PLZ an (Pflichtfeld)'
        : !formData['plz'].match(zip)
        ? 'Ungültige Eingabe'
        : '',
      ort: !formData['ort'] ? 'Bitte gib Deinen Ort an (Pflichtfeld)' : '',
      versicherungsart: !formData['versicherungsart']
        ? 'Bitte gib Deine Versicherungsart an (Pflichtfeld)'
        : '',
      kassenik: !formData['kassenik']
        ? 'Bitte gib Deine Versicherungsnummer (Kassen-IK) an (Pflichtfeld)'
        : !formData['kassenik'].match(kassenik)
        ? 'Ungültige Eingabe'
        : '',
      versichertennummer: !formData['versichertennummer']
        ? 'Bitte gib Deine Versichertennummer an (Pflichtfeld)'
        : '',
    });

    if (
      formData['vorname'] &&
      formData['nachname'] &&
      formData['geburtsdatum'].match(date) &&
      formData['entbindungstermin'].match(date) &&
      formData['email'].match(email) &&
      formData['strasse'] &&
      formData['plz'].match(zip) &&
      formData['ort'] &&
      formData['versicherungsart'] &&
      (formData['versicherungsart'] !== 'G' ||
        (formData['versichertennummer'] &&
          formData['kassenik'].match(kassenik))) &&
      termsAccepted
    ) {
      setButtonContent('Wird gesendet...');

      fetch(`${process.env.REACT_APP_SERVER}/book-courses`, requestOptions)
        .then((response) => {
          setSendingStatus(response.status);
        })
        .catch(() => setSendingStatus(500));
    }
  };

  return (
    <Wrapper>
      {sendingStatus === 200 && <Redirect to="/kursbuchung-erfolgreich" />}
      {sendingStatus === 500 && <Redirect to="/kursbuchung-fehlgeschlagen" />}

      <Flex onSubmit={handleSubmit}>
        <Column>
          <Heading>Kurs buchen</Heading>
          <Info>
            "{courseTitle}" am {formattedCourseStartDate}
          </Info>
          {courseDescription && (
            <Description
              dangerouslySetInnerHTML={{ __html: courseDescription }}
            />
          )}
        </Column>
        <Column>
          <FormItem>
            <Label htmlFor="vorname">Vorname</Label>
            <Input
              type="text"
              name="vorname"
              placeholder="..."
              onChange={handleChange}
              warning={formDataError.vorname}
            />
            {formDataError.vorname && <Error>{formDataError.vorname}</Error>}
          </FormItem>
          <FormItem>
            <Label htmlFor="nachname">Name</Label>
            <Input
              type="text"
              name="nachname"
              placeholder="..."
              onChange={handleChange}
              warning={formDataError.nachname}
            />
            {formDataError.nachname && <Error>{formDataError.nachname}</Error>}
          </FormItem>
          <FormItem>
            <Label htmlFor="strasse">Straße</Label>
            <Input
              type="text"
              name="strasse"
              placeholder="..."
              onChange={handleChange}
              warning={formDataError.strasse}
            />
            {formDataError.strasse && <Error>{formDataError.strasse}</Error>}
          </FormItem>
          <FormItem>
            <Label htmlFor="plz">PLZ</Label>
            <Input
              type="text"
              name="plz"
              placeholder="..."
              onChange={handleChange}
              warning={formDataError.plz}
            />
            {formDataError.plz && <Error>{formDataError.plz}</Error>}
          </FormItem>
          <FormItem>
            <Label htmlFor="ort">Ort</Label>
            <Input
              type="text"
              name="ort"
              placeholder="..."
              onChange={handleChange}
              warning={formDataError.ort}
            />
            {formDataError.ort && <Error>{formDataError.ort}</Error>}
          </FormItem>
          <FormItem>
            <Label htmlFor="telefonNummer">Telefonnummer</Label>
            <Input
              type="text"
              name="telefonNummer"
              placeholder="..."
              onChange={handleChange}
            />
          </FormItem>
        </Column>
        <Column>
          <FormItem>
            <Label htmlFor="namePartner">Name des Partners</Label>
            <Input
              type="text"
              name="namePartner"
              placeholder="..."
              onChange={handleChange}
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="email">E-Mail</Label>
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
            <Label htmlFor="geburtsdatum">Geburtsdatum</Label>
            <Input
              type="date"
              name="geburtsdatum"
              placeholder="..."
              onChange={handleDateChange}
              warning={formDataError.geburtsdatum}
            />
            {formDataError.geburtsdatum && (
              <Error>{formDataError.geburtsdatum}</Error>
            )}
          </FormItem>
          <FormItem>
            <Label htmlFor="entbindungstermin">ET</Label>
            <Input
              type="date"
              name="entbindungstermin"
              placeholder="..."
              onChange={handleDateChange}
              warning={formDataError.entbindungstermin}
            />
            {formDataError.entbindungstermin && (
              <Error>{formDataError.entbindungstermin}</Error>
            )}
          </FormItem>
          <FormItem>
            <Label htmlFor="versicherungsart">Versichertenart</Label>
            <Radio>
              <Label htmlFor="gesetzlich">
                Gesetzlich{' '}
                <input
                  type="radio"
                  id="G"
                  name="versicherungsart"
                  onChange={handleRadioChange}
                />
              </Label>
              <Label htmlFor="privat">
                Privat{' '}
                <input
                  type="radio"
                  id="P"
                  name="versicherungsart"
                  onChange={handleRadioChange}
                />
              </Label>
            </Radio>
            {formDataError.versicherungsart && (
              <Error>{formDataError.versicherungsart}</Error>
            )}
          </FormItem>
          {formData.versicherungsart === 'G' && (
            <>
              <FormItem>
                <Label htmlFor="kassenik">
                  Versicherungsnummer / Kassen-IK
                </Label>
                <Input
                  type="text"
                  name="kassenik"
                  placeholder="..."
                  onChange={handleChange}
                  warning={formDataError.kassenik}
                />
                {formDataError.kassenik && (
                  <Error>{formDataError.kassenik}</Error>
                )}
              </FormItem>
              <FormItem>
                <Label htmlFor="versichertennummer">Versichertennummer</Label>
                <Input
                  type="text"
                  name="versichertennummer"
                  placeholder="..."
                  onChange={handleChange}
                  warning={formDataError.versichertennummer}
                />
                {formDataError.versichertennummer && (
                  <Error>{formDataError.versichertennummer}</Error>
                )}
              </FormItem>
            </>
          )}
        </Column>
        <Column>
          <Check>
            <input
              type="checkbox"
              id="agb"
              name="agb"
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="agb">
              Ich habe die{' '}
              <Link to="/impressum">AGB und Teilnahmebedingungen</Link> und die{' '}
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
        </Column>
      </Flex>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #a49194;
  background-image: url(img/1.jpg);
  background-size: cover;
  background-position: bottom center;
  padding: 10px 0;
`;

const Heading = styled.h2`
  flex: 0 0 30%;
  font-family: Josefin Slab;
  font-size: clamp(30px, 5vw, 70px);
  line-height: clamp(37px, 5vw, 85px);
  font-weight: normal;
  margin: 0 0 48px 0;
  color: #fff;
`;

const Flex = styled.form`
  display: flex;
  flex-flow: row wrap;
  background-color: #a49194;
  justify-content: center;
  width: 100%;
  max-width: 1360px;
  margin: 57px auto;
  background-color: #a49194;
  padding: 70px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    margin-bottom: 50px;
    padding: 60px 15px 60px 15px;
  }
`;

const Column = styled.div`
  flex: 0 0 calc(50% - 14px);

  @media (max-width: 1024px) {
    flex: 0 0 100%;
  }

  &:first-child {
    flex: 0 0 100%;
  }

  &:nth-child(2) {
    margin-right: 28px;

    @media (max-width: 1024px) {
      margin-right: 0;
    }
  }

  &:last-child {
    flex: 0 0 100%;
  }
`;

const FormItem = styled.div`
  margin-bottom: 19px;
  position: relative;
  flex: 0 0 50%;
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

const Radio = styled.div`
  display: flex;
  align-items: center;
  height: 44px;

  label {
    align-items: center;
    display: flex;

    &:first-child {
      margin-right: 30px;
    }
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

const Info = styled.div`
  font-size: clamp(26px, 5vw, 40px);
  line-height: clamp(32px, 5vw, 48px);
  font-family: Josefin Slab;
  color: #fff;
  margin-bottom: 55px;
`;

const Description = styled.div`
  font-size: 20px;
  line-height: 23px;
  font-family: Gilroy;
  color: #fff;
  margin-bottom: 55px;
`;

const Error = styled.span`
  color: #fff;
  position: absolute;
  top: 18px;
  left: 0px;
  font-size: 13px;
`;
