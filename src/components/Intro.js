import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Me from '../assets/Images/dp.png';

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vw;
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
  }
`;

const SubBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .pic {
    width: 30vw;
    height: auto;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    .pic{
        width:50vw;
    }
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.7)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }

  @media (max-width: 768px) {
    color: ${(props) => props.theme.text};
    padding: 1rem;
    font-size: calc(0.8em + 1vw);

    & > *:last-child {
      font-size: calc(0.4rem + 1vw);
    }
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '45vw' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
        <Text>
          <h3>Hi, I'm Dinith Edirisinghe.</h3>
          <h6>Full Stack Web Developer | Unity Game Developer | Physics Tutor</h6>
        </Text>
      </SubBox>
    </Box>
  );
};

export default Intro;
