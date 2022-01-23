import React from 'react';
import styled from 'styled-components';
import Button from './Button';

export default function Article(props) {
  const { content, alternate, buttonColor } = props;

  return (
    <Container alternate={alternate}>
      <Wrapper reverse={content.img.right}>
        {content.img.left && (
          <ImageContainer>
            <Image
              src={content.img.left.src}
              alt={content.img.left.description}
              loading="lazy"
            />
          </ImageContainer>
        )}
        <Content>
          {content.author && <Author>{content.author}</Author>}
          {content.title && <Title>{content.title}</Title>}
          {content.intro && <Intro>{content.intro}</Intro>}
          {content.text && <Text>{content.text}</Text>}
          {content.button && (
            <Button
              href={content.button.href}
              color={buttonColor}
              style={{ marginTop: '50px' }}
            >
              {content.button.linkText}
            </Button>
          )}
        </Content>
        {content.img.right && (
          <ImageContainer>
            <Image
              src={content.img.right.src}
              alt={content.img.right.description}
              loading="lazy"
            />
          </ImageContainer>
        )}
      </Wrapper>
    </Container>
  );
}

const Container = styled.article`
  background-color: ${(props) => (props.alternate ? '#e3e0d4' : '#fff')};
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1670px;
  padding: 147px 15px 196px 15px;
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: ${(props) => (props.reverse ? 'column-reverse' : 'column')};
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 41%;

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Content = styled.div`
  flex: 0 0 59%;
  box-sizing: border-box;
  padding: 3vw 100px 0 115px;

  @media (max-width: 1200px) {
    padding: 3vw 15px 0 30px;
  }

  @media (max-width: 768px) {
    padding: 45px 0 0 0;
    flex: 0 0 100%;
  }
`;

const Author = styled.div`
  color: #c0a1a7;
  font-size: 20px;
  line-height: 23px;
  font-family: Gilroy;
  margin-bottom: 34px;
`;

const Title = styled.h2`
  color: #000;
  font-size: clamp(30px, 5vw, 70px);
  line-height: clamp(37px, 5vw, 85px);
  font-family: Josefin Slab;
  margin-bottom: 47px;
`;

const Intro = styled.p`
  color: #000;
  font-size: clamp(22px, 5vw, 28px);
  line-height: clamp(27px, 5vw, 34px);
  font-family: Josefin Slab;
`;

const Text = styled.p`
  color: #37322c;
  font-size: clamp(18px, 5vw, 22px);
  line-height: clamp(25px, 5vw, 30px);
  font-family: Gilroy;
  letter-spacing: 2.2px;
`;
