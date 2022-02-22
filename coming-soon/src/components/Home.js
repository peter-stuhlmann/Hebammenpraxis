import React from 'react';
import styled from 'styled-components';

import socialMedia from '../data/socialMedia';

export default function Home() {
  return (
    <Container>
      <Logo src="img/logo.svg" alt="Logo" />
      <Heading>Hier entsteht ein neuer Webauftritt</Heading>
      <SocialMediaMenu>
        {socialMedia.map((socialIcon) => (
          <SocialIcon key={socialIcon.href}>
            <a href={socialIcon.href}>
              <img src={socialIcon.icon} alt={socialIcon.name} />
            </a>
          </SocialIcon>
        ))}
      </SocialMediaMenu>
    </Container>
  );
}

const Container = styled.main`
  background-color: #8e9b92;
  background-image: url('img/background.png');
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  box-sizing: border-box;
`;

const Heading = styled.h1`
  color: #fff;
  margin: 60px 0 0 0;
  padding: 15px;
  box-sizing: border-box;
  font-family: Josefin Slab;
  font-size: clamp(30px, 5vw, 60px);
  line-height: clamp(37px, 5vw, 70px);
  text-align: center;
`;

const Logo = styled.img`
  width: 80vw;
  max-width: 400px;
  margin-top: -13vh;
`;

const SocialMediaMenu = styled.ul`
  margin: 80px 0 0 0;
  padding: 0;
  flex: 0 0 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style-type: none;
`;

const SocialIcon = styled.li`
  width: 24px;
  height: 24px;
  margin-right: 34px;

  &:last-child {
    margin-right: 0;
  }

  a {
    text-decoration: none;
    color: #fff;

    img {
      height: 100%;
      width: 100%;
    }
  }
`;
