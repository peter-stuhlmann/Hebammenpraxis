import styled from 'styled-components';

const CloseButton = styled.div`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  cursor: pointer;

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
  }

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #fff;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export default CloseButton;
