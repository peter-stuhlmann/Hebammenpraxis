import React from 'react';
import styled from 'styled-components';

export default function Gallery(props) {
  const { content } = props;

  return (
    <Container>
      <Heading>{content.heading}</Heading>
      <Images>
        {content.images.map((image, index) => (
          <Image key={index}>
            <img src={image.src} alt={image.description} />
          </Image>
        ))}
      </Images>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1670px;
  padding: 15px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const Heading = styled.h2`
  text-align: center;
  margin: 112px 0;
  font-size: clamp(30px, 5vw, 70px);
  line-height: clamp(37px, 5vw, 85px);
  font-family: Josefin Slab;
  color: #000;
`;

const Images = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 280px;
`;

const Image = styled.div`
  margin-bottom: 12px;
  margin-right: 16px;
  flex: 0 0 calc((100% - 2 * 16px) / 3);

  &:nth-child(3n) {
    margin-right: 0;
  }

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex: 0 0 calc((100% - 16px) / 2);

    &:nth-child(3n) {
      margin-right: 16px;
    }

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (max-width: 480px) {
    flex: 0 0 100%;

    &:nth-child(3n) {
      margin-right: 0;
    }

    &:nth-child(2n) {
      margin-right: 0;
    }
  } ;
`;
