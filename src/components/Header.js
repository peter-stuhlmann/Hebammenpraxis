import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import headerContent from '../data/headerContent';
import headerNav from '../data/headerNav';
import socialMedia from '../data/socialMedia';

export default function Header() {
  return (
    <Container>
      <SocialMediaMenu>
        {socialMedia.map((socialIcon) => (
          <SocialIcon key={socialIcon.href} href={socialIcon.href}>
            {socialIcon.icon}
          </SocialIcon>
        ))}
      </SocialMediaMenu>
      <section>
        <SiteTitle to="/">
          <Logo src={headerContent.logo} alt="Logo" width="110" height="153" />
          <Title>{headerContent.title}</Title>
          <Name>{headerContent.name}</Name>
        </SiteTitle>
        <Menu>
          {headerNav.map((navItem) => (
            <MenuItem key={navItem.linkText}>
              <NavLink
                to={navItem.href}
                style={(isActive) =>
                  isActive ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
                }
              >
                {navItem.linkText}
              </NavLink>
            </MenuItem>
          ))}
        </Menu>
      </section>
      <ButtonContainer>
        <Button to={headerContent.contact.href}>
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
`;

const SocialIcon = styled.a`
  text-decoration: none;
  color: #fff;
`;

const ButtonContainer = styled.div`
  flex: 0 0 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Button = styled(Link)`
  background-color: #fff;
  border-radius: 38px;
  font-size: 16px;
  font-family: Gilroy;
  line-height: 19px;
  letter-spacing: 1.6px;
  color: #be9ea4;
  text-decoration: none;
  text-transform: uppercase;
  padding: 28px 33px 26px 33px;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  margin: 17px 0 7px 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  width: 100%;
`;

const MenuItem = styled.li`
  box-sizing: border-box;
  padding: 19px;

  a {
    text-decoration: none;
    color: #fff;
    font-family: Gilroy;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
