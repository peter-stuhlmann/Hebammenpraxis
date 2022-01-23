import React from 'react';
import styled from 'styled-components';

export default function FlexLayout(props) {
  const { content } = props;

  return (
    <Container>
      {content.map((item) => (
        <div key={item.heading}>
          <img src={item.img.src} alt={item.img.description} loading="lazy" />
          <Heading>{item.heading}</Heading>
          <Text dangerouslySetInnerHTML={{ __html: item.text }} />
        </div>
      ))}
    </Container>
  );
}

const Heading = styled.h2`
  text-align: left;
  font-size: clamp(30px, 5vw, 70px);
  line-height: clamp(37px, 5vw, 85px);
  font-family: Josefin Slab;
  margin: 72px 0 54px 0;
`;

const Text = styled.p`
  text-align: left;
  letter-spacing: 2.2px;
  color: #37322c;
  font-size: clamp(18px, 5vw, 22px);
  line-height: clamp(25px, 5vw, 30px);
  padding-right: 30px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    margin-bottom: 150px;
    padding-right: 0;
  }
`;

const Container = styled.section`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 1670px;
  margin: 0 auto 347px auto;
  padding: 15px;
  box-sizing: border-box;

  & > div {
    margin-right: 16px;
    flex: 0 0 calc((100% - 2 * 16px) / 3);

    &:nth-child(3n) {
      margin-right: 0;
    }

    img {
      width: 100%;
    }

    @media (max-width: 1000px) {
      flex: 0 0 100%;
    }
  }
`;
