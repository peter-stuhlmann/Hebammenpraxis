import React from 'react';
import styled from 'styled-components';

import ContactForm from './ContactForm';

export default function ImageBanner(props) {
  const {
    content,
    height,
    large,
    width,
    backgroundPosition,
    margin,
    textWidth,
    contactFormVisibility,
    setContactFormVisibility,
    sendingStatus,
    setSendingStatus,
  } = props;

  return (
    <Container
      backgroundImage={content.img}
      backgroundPosition={backgroundPosition}
      height={height}
      width={width}
      large={large}
      margin={margin}
      contactFormVisibility={contactFormVisibility}
    >
      {content.preText && (
        <PreText dangerouslySetInnerHTML={{ __html: content.preText }} />
      )}
      {content.text && (
        <Text
          large={large}
          textWidth={textWidth}
          contactFormVisibility={contactFormVisibility}
          dangerouslySetInnerHTML={{ __html: content.text }}
        />
      )}
      {content.contactForm && (
        <ContactForm
          contactFormVisibility={contactFormVisibility}
          setContactFormVisibility={setContactFormVisibility}
          sendingStatus={sendingStatus}
          setSendingStatus={setSendingStatus}
        />
      )}
    </Container>
  );
}

const Container = styled.section`
  background-color: #a49194;
  ${(props) =>
    props.backgroundImage && `background-image: url(${props.backgroundImage});`}
  background-size: cover;
  background-position: ${(props) =>
    props.backgroundPosition ? props.backgroundPosition : 'center'};
  height: ${(props) => props.height || '100vh'};
  width: 100%;
  max-width: ${(props) => props.width || '100%'};
  margin: ${(props) => (props.margin ? props.margin : '0 auto')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;

  ${(props) => props.contactFormVisibility && `height: auto;`}

  @media (max-width: 480px) {
    margin-bottom: 0;
  }
`;

const PreText = styled.p`
  font-family: Josefin Slab;
  font-size: clamp(16px, 5vw, 30px);
  line-height: clamp(18px, 5vw, 37px);
  color: #f8f7f7;
  margin: 0 0 40px 0;
`;

const Text = styled.p`
  display: ${(props) => (props.contactFormVisibility ? 'none' : 'block')};
  text-align: center;
  font-family: Josefin Slab;
  font-size: ${(props) =>
    props.large ? 'clamp(40px, 5vw, 80px)' : 'clamp(34px, 5vw, 70px)'};
  line-height: ${(props) =>
    props.large ? 'clamp(48px, 5vw, 96px)' : 'clamp(42px, 5vw, 85px)'};
  color: #fff;
  width: 100%;
  max-width: ${(props) => (props.textWidth ? props.textWidth : '1350px')};
  margin: 0;
`;
