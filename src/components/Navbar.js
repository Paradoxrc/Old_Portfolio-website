import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';
import ParticleComponent from '../subComponents/ParticleComponent';

const NavbarContainer = styled.nav`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2rem;
  z-index: 1;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 1;
    width: 100%;
    height: 110vh;
    background-color: #2C2E31;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    z-index: 10;
  }
`;

const NavItem = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  font-size: calc(1em + 0.5vw);
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => darken(0.1, props.theme.text)};
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
    margin: 1rem 0;
  }
`;

const Hamburger = styled.div`
  width: 30px;
  height: 30px;
  position: fixed;
  top: 2rem;
  right: 3rem;
  cursor: pointer;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  z-index: 20;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${(props) => props.theme.text};
`;

const ParticleBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure it is behind the menu items */
`;

const Navbar = ({ click }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <Line />
        <Line />
        <Line />
      </Hamburger>
      <NavbarContainer isOpen={isOpen}>
        {isOpen && (
          <ParticleBackground>
            <ParticleComponent theme="light" />
          </ParticleBackground>
        )}
        <NavItem to="/main" onClick={() => setIsOpen(false)}>Home</NavItem>
        <NavItem to="/about" onClick={() => { if (click) click(); setIsOpen(false); }}>About</NavItem>
        <NavItem to="/skills" onClick={() => setIsOpen(false)}>My Skills</NavItem>
        <NavItem to="/work" onClick={() => { if (click) click(); setIsOpen(false); }}>Work</NavItem>
        <NavItem to="/blog" onClick={() => setIsOpen(false)}>Blog</NavItem>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
