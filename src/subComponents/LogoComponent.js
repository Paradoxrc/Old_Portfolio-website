import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import honeycomb from '../assets/Images/honeycomb.png'

// Styled component for the logo image
const LogoImage = styled.img`
  width: 70px;  // Adjust the width as needed
  height: 70px; // Adjust the height as needed
  display: inline-block;
  @media (max-width: 768px) {
   width:40px;
   height:40px;
  }
`

// Existing styled component for the logo container
const Logo = styled.h1`
  display: inline-block;
  color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  font-family: 'Pacifico', cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`

const LogoComponent = (props) => {
    return (
        <Logo>
            <LogoImage src={honeycomb} alt="Logo" />
            
        </Logo>
    )
}

export default LogoComponent
