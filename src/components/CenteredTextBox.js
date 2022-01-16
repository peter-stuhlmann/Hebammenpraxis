import React from 'react';
import styled from 'styled-components';

export default function CenteredTextBox(props) {
  const { content } = props;

  return (
    <Container>
      <Heading dangerouslySetInnerHTML={{ __html: content.heading }} />
      <Text dangerouslySetInnerHTML={{ __html: content.text }} />
      <Image
        src={content.img.src}
        width="114"
        height="111"
        alt={content.img.description}
      />
    </Container>
  );
}

const Heading = styled.h2`
  font-family: Josefin Slab;
  font-size: clamp(30px, 5vw, 70px);
  line-height: clamp(37px, 5vw, 85px);
  color: #be9ea4;
  text-align: center;
  width: 100%;
  max-width: 880px;
  margin: 125px auto 45px auto;
`;

const Text = styled.p`
  text-align: center;
  font-size: 22px;
  line-height: 30px;
  font-family: Gilroy;
  letter-spacing: 2.2px;
  color: #37322c;
  width: 100%;
  max-width: 682px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 114px;
  height: 111px;
  margin: 30px auto;
  display: block;
`;

const Container = styled.section`
  margin: 125px 0 165px 0;
  padding: 15px;
`;
