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
  font-weight: normal;
  color: #000;
`;

const Images = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 280px;
  margin: 0 -8px;
`;

const Image = styled.div`
  margin: 0 8px 16px 8px;
  flex: 0 0 calc((100% - 3 * 16px) / 3);

  @media (max-width: 768px) {
    flex: 0 0 calc((100% - 2 * 16px) / 2);
  }

  @media (max-width: 480px) {
    flex: 0 0 calc(100% - 16px);
  }

  // Special rules for wider images
  &:nth-child(5),
  &:nth-child(9) {
    flex: 0 0 calc((100% - 1.5 * 16px) / 3 * 2);

    @media (max-width: 768px) {
      flex: 0 0 calc(100% - 16px);
    }

    img {
      aspect-ratio: 2 / 1.3;
    }
  }

  img {
    height: 100%;
    width: 100%;
    aspect-ratio: 1 / 1.3;
    object-fit: cover;
  }
`;
