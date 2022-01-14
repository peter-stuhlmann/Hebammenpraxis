import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Button from './Button';

import headerContent from '../data/headerContent';
import headerNav from '../data/headerNav';

import useOnClickOutside from '../helpers/useOnClickOutside';

export default function Menu() {
  const [open, setOpen] = useState(false);

  const nav = useRef();
  useOnClickOutside(nav, () => setOpen(false));

  return (
    <nav>
      <Navbar open={open} ref={nav}>
        {headerNav.map((navItem) => (
          <NavbarItem key={navItem.linkText}>
            <NavLink
              to={navItem.href}
              onClick={() => setOpen(!open)}
              style={(isActive) =>
                isActive ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
              }
            >
              {navItem.linkText}
            </NavLink>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Button
            href={headerContent.contact.href}
            onClick={() => setOpen(!open)}
          >
            {headerContent.contact.linkText}
          </Button>
        </NavbarItem>
      </Navbar>
      <ToggleButton onClick={() => setOpen(!open)}>Menu</ToggleButton>
    </nav>
  );
}

const Navbar = styled.ul`
  display: flex;
  justify-content: center;
  margin: 17px 0 7px 0;
  list-style-type: none;

  @media (max-width: 1349px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #8e9b92;
    margin: 0;
    padding: 0;
    z-index: 1;
  }
`;

const NavbarItem = styled.li`
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

  &:last-child {
    margin-top: 50px;

    a {
      color: #8e9b92;
    }

    @media (min-width: 1350px) {
      display: none;
    }
  }
`;

const ToggleButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 5px 8px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  text-transform: uppercase;

  @media (min-width: 1350px) {
    display: none;
  }
`;
