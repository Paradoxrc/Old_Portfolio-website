import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';
import Navbar from "./Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faPython, faHtml5, faCss3, faNode, faGit, faUnity } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import bgImage from '../assets/Images/bg.png';

const Box = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  width: 100vw;
  padding-top:6rem;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    padding-top: 6rem;
    padding-bottom:5rem;
  }
`;

const Separator = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid ${(props) => props.theme.text};
  margin: 2rem 0;
`;

const Main = styled(motion.div)`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: transparent;
  padding: 2rem;
  width: 30vw;
  min-height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  
  margin: 1rem 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3); /* Adjust transparency on hover */
  }

  @media (max-width: 768px) {
    width: 70vw;
    margin: 1rem 0;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul, p {
    margin-left: 2rem;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.2em;
  margin-bottom: 0.5rem;

  svg, img {
    margin-left: 1rem;
  }
`;

const itemVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", duration: 1.7 } }
};

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light' />
        <SocialIcons theme="dark" />
        <Navbar />
        <ParticleComponent theme='light' />

        <Main variants={itemVariants} initial="hidden" animate="show">
          <Title>
            <Develope width={40} height={40} />Programming Languages
          </Title>
          <h1>Languages</h1>
          <Separator />
          <Description>
            <ul>
            <ListItem>C </ListItem>
            <ListItem>C# </ListItem>
              <ListItem>JavaScript <FontAwesomeIcon icon={faJs} /></ListItem>
              <ListItem>Python <FontAwesomeIcon icon={faPython} /></ListItem>
              <ListItem>HTML <FontAwesomeIcon icon={faHtml5} /></ListItem>
              <ListItem>CSS <FontAwesomeIcon icon={faCss3} /></ListItem>
              
            </ul>
          </Description>
          <h1>Databases</h1>
          <Separator />
          <Description>
            <ul>
              <ListItem>MySQL <FontAwesomeIcon icon={faDatabase} /></ListItem>
              <ListItem>MongoDB </ListItem>
            </ul>
          </Description>
        </Main>

        <Main variants={itemVariants} initial="hidden" animate="show">
          <Title><Design width={40} height={40} />Libraries & Frameworks</Title>
          <Separator />
          <Description>
            <ul>
              <ListItem>React.js <FontAwesomeIcon icon={faReact} /></ListItem>
              <ListItem>Node.js <FontAwesomeIcon icon={faNode} /></ListItem>
              <ListItem>Git <FontAwesomeIcon icon={faGit} /></ListItem>
              <ListItem>Unity <FontAwesomeIcon icon={faUnity} /></ListItem>
              <ListItem>Adobe Photoshop . <h2>Ps</h2></ListItem>
            </ul>
          </Description>
        </Main>
        <Main variants={itemVariants} initial="hidden" animate="show">
          <Title><Design width={40} height={40} />Other Skills</Title>
          <Separator />
          <Description>
            <ul>
              <li><ListItem>Teaching and Communication skills (Worked as a physics tutor for A/L students for almost 4 years)</ListItem></li>
              <li><ListItem>Logical and analytical skills </ListItem></li>
              
            </ul>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="20%" right="15%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
