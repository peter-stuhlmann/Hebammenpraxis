import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MainMenu from './Menu';
import Button from './Button';

import headerContent from '../data/headerContent';
import socialMedia from '../data/socialMedia';

export default function Header() {
  return (
    <Container>
      <SocialMediaMenu>
        {socialMedia.map((socialIcon) => (
          <SocialIcon key={socialIcon.href} href={socialIcon.href}>
            <img src={socialIcon.icon} alt={socialIcon.name} />
          </SocialIcon>
        ))}
      </SocialMediaMenu>
      <section>
        <SiteTitle to="/">
          <Logo src={headerContent.logo} alt="Logo" width="110" height="153" />
          <Title>{headerContent.title}</Title>
          <Name>{headerContent.name}</Name>
        </SiteTitle>
        <MainMenu />
      </section>
      <ButtonContainer>
        <Button href={headerContent.contact.href}>
          {headerContent.contact.linkText}
        </Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.header`
  padding: 15px;
  background-color: #8e9b92;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1349px) {
    justify-content: center;
  }
`;

const SiteTitle = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.img`
  margin: 18px auto 0 auto;
  display: block;
`;

const Title = styled.div`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-size: 20px;
  font-family: Gilroy;
  line-height: 24px;
  letter-spacing: 2px;
  margin: 26px 0;
`;

const Name = styled.div`
  color: #fff;
  text-align: center;
  font-family: Josefin Slab;
  font-size: 70px;
  line-height: 85px;
  letter-spacing: 0px;
`;

const SocialMediaMenu = styled.ul`
  margin: 0;
  padding: 0;
  flex: 0 0 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1349px) {
    display: none;
  }
`;

const SocialIcon = styled.a`
  text-decoration: none;
  color: #fff;
  width: 24px;
  height: 24px;
  margin-right: 34px;

  &:last-child {
    margin-right: 0;
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  flex: 0 0 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1349px) {
    display: none;
  }
`;
