import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { DarkTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';

import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';
import astronaut from '../assets/Images/w.png';
import aaa from '../assets/Images/3a.jpg';
import boxing from '../assets/Images/boxing.jpg';
import boxing2 from '../assets/Images/boxing3.jpg';
import prize from '../assets/Images/prize.jpg';
import violin from '../assets/Images/violin.jpg';
import scholar from '../assets/Images/scholar.jpg';
import rcsa from '../assets/Images/rcsa2.png';
import royalLogo from '../assets/Images/royal_logo.png';
import moratuwaLogo from '../assets/Images/moratuwa_logo.png';
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faAward, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  padding-left: 150px;
  width: 100vw;
  min-height: 200vh;
  position: relative;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transition: background-color 0.5s ease;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-top: 70px; 
    padding-bottom: 97px;/* Added padding to avoid overlap with the logo */
  }
`;

const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`;

const Spaceman = styled.div`
  position: fixed;
  top: 1%;
  right: 0%;
  width: 41vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    img {
      width: 0%;
    }
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    gap: 1rem;
  }
`;

const Section = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  width: 48vw;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: calc(0.8rem + 1vw);
  backdrop-filter: blur(4px);
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 74vw;
    font-size: calc(0.8rem + 1vw);
  }
`;

const Separator = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid ${(props) => props.theme.text};
  margin: 2rem 0;
`;

const Button = styled.button`
  border: none;
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.text};
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  margin-top: 1rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 2px solid ${(props) => props.theme.text};
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', duration: 1 } }
};

const Heading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: calc(1.2rem + 1vw);
  color: #5FA5F7;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: calc(1rem + 1vw);
  }
`;

const SubHeading = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: calc(1rem + 1vw);
  color: #5FF776;
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: auto;
    margin-right: 0.5rem;
  }
  @media (max-width: 768px) {

    img{
      width: 40px;
    }
  }
`;

const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: calc(1.2rem + 0.5vw);
  color: #FFFFFF;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 2rem;
  padding: 1rem;

  &:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${(props) => props.theme.text};
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  position: relative;
  padding-left: 40px;

  &:before {
    content: '';
    position: absolute;
    left: 16px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${(props) => props.theme.text};
  }

  img {
    width: 300px;
    height: 200px;
    margin-right: 1rem;
    border-radius: 15px;
    object-fit: cover;
  }

  span {
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;
    font-size: calc(0.8rem + 0.5vw);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: right;
    padding-left: 10px;

    img {
      width: 80%;
      height: auto;
      margin: 0 0 1rem 0;
    }

    span {
      font-size: calc(0.8rem + 1vw);
    }
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark' />
        <SocialIcons theme='dark' />
        <Navbar />
        <ParticleComponent theme='dark' />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <FlexContainer as={motion.div} variants={containerVariants} initial="hidden" animate="show">
          <Section variants={itemVariants}>
            <Heading><FontAwesomeIcon icon={faUser} />Who I Am</Heading>
            <Text>
              I see myself as a passionate individual who likes to and tries to see the bigger picture of things and a techie guy who's very excited about science and technology and its future potential.
            </Text>
            <Button onClick={() => window.open('/path/to/cv.pdf', '_blank')}>Download CV</Button>
          </Section>
          <Section variants={itemVariants}>
            <Heading><FontAwesomeIcon icon={faGraduationCap} />Education</Heading>
            <Separator />
            <SubHeading>
              <img src={royalLogo} alt="Royal College Logo" />
              <strong>Royal College Colombo 7</strong>
            </SubHeading>
            <Text>G.C.E. Advanced Level Examination (Physical Science Stream - 2021)</Text>
            <ul>
              <li>Combined Mathematics - A</li>
              <li>Physics - A</li>
              <li>Chemistry - A</li>
              <li>Z-score - 1.9260</li>
            </ul>
            <Text>G.C.E. Ordinary Level Examination (2018)</Text>
            <ul>
              <li>Score - 9A passes (ICT, Commerce, Eastern music)</li>
            </ul>
            <Separator />
            <SubHeading>
              <img src={moratuwaLogo} alt="University of Moratuwa Logo" />
              <strong>University Of Moratuwa</strong>
            </SubHeading>
            <Text>BSc.(Hons.) Information Technology</Text>
            <ul>
              <li>Current G.P.A - 3.88</li>
            </ul>
          </Section>
          <Section variants={itemVariants}>
            <Heading><FontAwesomeIcon icon={faAward} />Awards and Achievements</Heading>
            <Separator />
            <Timeline>
              <TimelineItem>
                <img src={aaa} alt="EX-ED Award" />
                <span>EX-ED Royal Award for gaining 3A s for advanced level examination in Physical Science Stream (2021)</span>
              </TimelineItem>
              <TimelineItem>
                <img src={rcsa} alt="EX-ED Award" />
                <span>Received a B grade award for the 'Royal College Science Association' in the club's night ceremony (Which I held the position of asst.Chairman) (2021)</span>
              </TimelineItem>
              <TimelineItem>
                <img src={violin} alt="Orchestra Award" />
                <span>Runners up in the western provincial western orchestra competition (contributed as a violin player) (2017)</span>
              </TimelineItem>
              <TimelineItem>
                <img src={boxing} alt="Boxing Award" />
                <span>Runners up in L.V Jayaweera Memorial All-Island interschool boxing tournament (2016)</span>
              </TimelineItem>
              <TimelineItem>
                <img src={prize} alt="Math Award" />
                <span>Maths, Science and History prizes for being the best test performer in the section in Royal College (2016)</span>
              </TimelineItem>
              <TimelineItem>
                <img src={boxing2} alt="Boxing Award" />
                <span>Champion in interhouse boxing meet in Royal College (2015)</span>
              </TimelineItem>
              <TimelineItem>
                <img src={scholar} alt="Scholarship Award" />
                <span>Award for the best performance in the school for scholarship examination (2012)</span>
              </TimelineItem>
            </Timeline>
          </Section>
          <Section variants={itemVariants}>
            <Heading><FontAwesomeIcon icon={faUser} />Hobbies</Heading>
            <Separator />
            <ul>
              <li>Indie Game Development (Unity Engine)</li>
              <li>Listening to podcasts</li>
              <li>Gaming (Valorant) </li>
              <li>Playing Instruments </li>
            </ul>
         
          </Section>
          <Section variants={itemVariants}>
            <Heading><FontAwesomeIcon icon={faEnvelope} />Contact Me</Heading>
            <Separator />
            <Text>
              <FontAwesomeIcon icon={faPhone} /> +94 76 2911929<br />
              <FontAwesomeIcon icon={faGoogle} /> dinithminindu02@gmail.com
            </Text>
          </Section>
        
        </FlexContainer>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
