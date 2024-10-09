import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Me from '../assets/Images/nobg.png';

// Blinking animation for the cursor
const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  width: 70vw;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to right,
      ${(props) => props.theme.body} 50%,
      ${(props) => props.theme.text} 50%
    )
      bottom,
    linear-gradient(
      to right,
      ${(props) => props.theme.body} 50%,
      ${(props) => props.theme.text} 50%
    )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
  padding-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 70vw;
    height: auto;
    background: linear-gradient(
        to bottom,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
        right,
      linear-gradient(
        to bottom,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
        left;
    background-repeat: no-repeat;
    background-size: 2px 100%;
    border-left: none;
    border-right: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    padding: 1rem;
    padding-bottom: 13rem;
  }
`;

const SubBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Text = styled(motion.div)`
  width: 50%;
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.7)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }

  @media (max-width: 768px) {
    width: 100%;
    color: ${(props) => props.theme.text};
    padding: 1rem;
    font-size: calc(1em + 1vw);
    text-align: center;

    & > *:last-child {
      font-size: calc(0.7rem + 1vw);
    }
  }
`;

// Horizontal blinking cursor using an underscore
const Cursor = styled.span`
  display: inline-block;
  animation: ${blink} 1s infinite;
  font-weight: bold;
  margin-left: 2px; /* Space between the name and the cursor */
  color: ${(props) => props.theme.body};

  @media (max-width: 768px) {
    color: ${(props) => props.theme.text};
  }
`;

const ProfilePic = styled(motion.img)`
  width: 40%;
  height: auto;
  border: 2px solid ${(props) => props.theme.text}; /* Border around the image */
  border-radius: 10px; /* Rounded corners (optional) */

  @media (max-width: 768px) {
    width: 50vw;
    margin-bottom: 1rem;
  }
`;

const Button = styled.button`
  border: none;
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.text};
  padding: 0.3rem 3rem;
  cursor: pointer;
  font-size: 0.8rem; /* Reduce font size */
  margin-top: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

  &:hover {
    background-color: transparent; /* Make it transparent on hover */
    color: ${(props) => props.theme.text};
    border: 2px solid ${(props) => props.theme.text};
  }
`;

// Stats Section for numbers like in the provided image
const StatsSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem ;
  background-color:#5FF776;
 

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    
  }
`;

const Stat = styled.div`
  text-align: center;
  font-size: calc(1em + 1vw);

  span {
    display: block;
    font-size: calc(0.4em + 0.5vw);
    
  }

  @media (max-width: 768px) {
    font-size: calc(1em + 1vw);
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '38vw' }}
      transition={{ type: 'spring', duration: 1, delay: 0.5 }}
    >
      <SubBox>
        <ProfilePic
          src={Me}
          alt="Profile Pic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3>Dinith Edirisinghe<Cursor>_</Cursor></h3>
          <br />
          <h6>Full Stack Web Developer | Unity Game Developer | Physics Tutor</h6>
          <br />
          <Button onClick={() => window.open('/path/to/cv.pdf', '_blank')}>
            Download CV
          </Button>
        </Text>
      </SubBox>
      
      {/* Stats Section */}
      <StatsSection>
        <Stat>
          <h1>2+</h1><span>Years of Industry Experience</span>
        </Stat>
        <Stat>
          <h1>10+</h1><span>Years of Programming</span>
        </Stat>
        <Stat>
          <h1>15+</h1><span>Projects Completed</span>
        </Stat>
      </StatsSection>
    </Box>
  );
};

export default Intro;
