import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Cookies from 'js-cookie';

export default function CookieConsentBanner() {
  // cookies
  const [cookieOptIn, setCookieOptIn] = useState(Cookies.get('cookie-opt-in'));

  const optIn = () => {
    setCookieOptIn(true);
    Cookies.set('cookie-opt-in', true, { expires: 90 });
    window.location.reload();
  };

  const optOut = () => {
    setCookieOptIn(false);
    Cookies.set('cookie-opt-in', false, { expires: 90 });
  };

  const trackingCode = process.env.REACT_APP_GA;

  // analytics
  if (cookieOptIn === 'true') {
    document.cookie = `Disable ${trackingCode}=false; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    window[`ga-disable-${trackingCode}`] = false;
  } else {
    document.cookie = `Disable ${trackingCode}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    window[`ga-disable-${trackingCode}`] = true;
  }

  const content = {
    text: 'Wir nutzen auf dieser Website Cookies. Einige von ihnen sind essentiell, während andere uns helfen, diese Website und dadurch Deine Nutzererfahrung zu verbessern. Weitere Informationen findest Du in der',
    link: { linkText: 'Datenschutzerklärung', href: 'datenschutzerklärung' },
    options: [
      'Zustimmen',
      'Nur der Speicherung essentieller Cookies zustimmen',
    ],
  };

  return cookieOptIn === undefined ? (
    <Backdrop>
      <CookieConsent>
        <p>
          {content.text}
          <Link to={content.link.href}>{content.link.linkText}</Link>.
        </p>
        <button type="button" className="decline" onClick={() => optOut()}>
          {content.options[1]}
        </button>
        <button type="button" className="accept" onClick={() => optIn()}>
          {content.options[0]}
        </button>
      </CookieConsent>
    </Backdrop>
  ) : null;
}

const Global = createGlobalStyle`
  body {
    height: 100vh;
    overflow: hidden
  }
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;

  ${Global}
`;

const CookieConsent = styled.div`
  border-radius: 5px;
  padding: 15px;
  background-color: #f7f8fb;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.05),
    0 10px 10px 2px rgba(0, 0, 0, 0.05);
  font-size: 14px;
  line-height: 40px;
  position: fixed;
  z-index: 100;
  bottom: 50px;
  right: 50px;
  margin: auto;
  max-width: 500px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  p {
    flex: 0 0 100%;
    line-height: 1.5;
    padding-right: 16px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    a {
      display: inline-block;
      color: #008000;
      text-decoration: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  button {
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    padding: 8px;
    transition: 0.2s;

    &.accept {
      background-color: #008000;
      color: #fff;
      flex: 0 0 49%;
      font-size: 16px;

      &:hover {
        background-color: #006500;
      }
    }

    &.decline {
      background-color: #e1dfdf;
      color: #474747;
      flex: 0 0 49%;

      &:hover {
        background-color: #cdcdcd;
      }
    }
  }
`;
