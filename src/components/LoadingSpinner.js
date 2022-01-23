import React from 'react';
import styled from 'styled-components';

export default function LoadingSpinner() {
  return (
    <Container>
      <Loader>
        <Circular viewBox="25 25 50 50">
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke-width="3"
            stroke-miterlimit="10"
          />
        </Circular>
      </Loader>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loader = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100px;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const Circular = styled.svg`
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  circle {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 5s ease-in-out infinite;
    stroke-linecap: round;

    @keyframes dash {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
      }
      100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
      }
    }

    @keyframes color {
      100%,
      0% {
        stroke: #8e9b92;
      }
      40% {
        stroke: #be9ea4;
      }
      66% {
        stroke: #e3e0d4;
      }
      80%,
      90% {
        stroke: #37322c;
      }
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
