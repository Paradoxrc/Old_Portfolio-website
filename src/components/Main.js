import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';

import SocialIcons from '../subComponents/SocialIcons';
import { YinYang } from './AllSvgs';
import Intro from './Intro';
import Navbar from "./Navbar";
import CV from './John-Cv.pdf';
import bg from '../assets/Images/bg.png';

const MainContainer = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2, h3, h4, h5, h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
    color: #D7E9FF; /* Text color */
  }
`;


const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;

  @media (max-width: 768px) {
    right:100rem
  }
`;

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const glow = keyframes`
  0% {
    text-shadow: 0 0 5px #4895F1;
  }
  50% {
    text-shadow: 0 0 15px #4895F1, 0 0 25px #4895F1;
  }
  100% {
    text-shadow: 0 0 5px #4895F1;
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${props => props.click ? '81%' : '50%'};
  left: ${props => props.click ? '92%' : '50%'};
  @media (max-width: 768px) {
    left: ${props => props.click ? '50%' : '50%'};
  }
  
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${scale} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
    
    color: #4895F1; /* Text color */
    font-weight: bold;
    animation: ${glow} 4s infinite alternate; /* Adding glow effect */
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #131312;
  bottom: 0;
  right: 0%;
  width: ${props => props.click ? '100%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
  z-index: 0;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Paradox = styled.div`

`

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />
     
      <Container>
      
      <Navbar click={click} />
        <LogoComponent theme={click ? 'light' : 'dark'} />
        <SocialIcons theme='dark' />
        
        <Center click={click}>
          <Paradox>
          <YinYang onClick={() => handleClick()} width={click ? 80 : 200} height={click ? 80 : 200} />
          </Paradox>
          <span><h1><br/>Click Here</h1></span>
          
        </Center>
        <Contact target="_blank" href="mailto:dinithminindu02@gmail.com">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'tween', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'tween', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi..
          </motion.h2>
         
        </Contact>
         
      </Container>
      {click ? <Intro click={click} /> : null}
      
    </MainContainer>
  );
};

export default Main;
