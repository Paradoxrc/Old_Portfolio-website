import React from "react";
import styled, { keyframes } from "styled-components";

const ScrollDownContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScrollDownText = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
  font-weight: bold;
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const Arrow = styled.svg`
  margin-top: 1rem;
  width: 30px;
  height: 30px;
  fill: ${(props) => props.theme.text};
  animation: ${bounce} 2s infinite;
`;

const ScrollDownIndicator = () => {
  return (
    <ScrollDownContainer>
      <ScrollDownText>Scroll down</ScrollDownText>
      <Arrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 21c-.256 0-.512-.098-.707-.293l-10-10c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0L12 18.586 21.293 9.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-10 10C12.512 20.902 12.256 21 12 21z" />
      </Arrow>
    </ScrollDownContainer>
  );
};

export default ScrollDownIndicator;
