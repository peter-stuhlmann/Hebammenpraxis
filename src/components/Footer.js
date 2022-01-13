import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import footerNav from '../data/footerNav';

export default function Footer() {
  return (
    <Container>
      <Menu>
        {footerNav.map((navItem) => (
          <MenuItem key={navItem.linkText}>
            <Link to={navItem.href}>{navItem.linkText}</Link>
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
}

const Container = styled.footer`
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 15px;
  background-color: #e3e0d4;
  background-size: cover;
  background-position: center;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 90px 0 0 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  width: 100%;

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
