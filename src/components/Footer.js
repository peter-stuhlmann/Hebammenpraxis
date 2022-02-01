import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import footerNav from '../data/footerNav';
import footerContent from '../data/headerContent';

export default function Footer() {
  return (
    <Container>
      <Menu>
        {footerNav.map((navItem) => (
          <MenuItem
            key={navItem.linkText}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Link to={navItem.href}>{navItem.linkText}</Link>
          </MenuItem>
        ))}
      </Menu>
      <Title>{footerContent.name}</Title>
    </Container>
  );
}

const Container = styled.footer`
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 15px;
  background-color: #e3e0d4;
  background-image: url(./img/footer.png);
  background-size: cover;
  background-position: center;
  position: relative;
  box-sizing: border-box;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 75px 0 0 0;
  padding: 15px;
  box-sizing: border-box;
  list-style-type: none;
  width: 100%;
  max-width: 1670px;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const MenuItem = styled.li`
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 8px 12px;
  }

  a {
    font-family: Josefin Slab;
    text-decoration: none;
    font-size: clamp(16px, 3vw, 50px);
    color: #fff;

    @media (max-width: 480px) {
      font-size: 23px;
    }
  }
`;

const Title = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Josefin Slab;
  font-size: clamp(60px, 10vw, 180px);
  color: #fff;
`;
