import React from 'react';
import styled from 'styled-components';

export default function FAQ(props) {
  const { content } = props;

  return (
    <Container>
      <Heading>{content.heading}</Heading>
      <List>
        {content.questions.map((item) => (
          <ListItem key={item.question}>
            <Question>{item.question}</Question>
            <Answer>{item.answer}</Answer>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.section`
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1670px;
  margin: 225px auto 200px auto;
  display: flex;
  flex-flow: row wrap;
`;

const Heading = styled.h2`
  flex: 0 0 30%;
  font-family: Josefin Slab;
  font-size: clamp(30px, 5vw, 70px);
  line-height: clamp(37px, 5vw, 85px);
  margin: 0;

  @media (max-width: 1350px) {
    flex: 0 0 20%;
  }

  @media (max-width: 1100px) {
    flex: 0 0 100%;
    margin-bottom: 70px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 70%;

  @media (max-width: 1350px) {
    flex: 0 0 80%;
  }

  @media (max-width: 1100px) {
    flex: 0 0 100%;
  }
`;

const ListItem = styled.li`
  flex: 0 0 calc(50% - 27px);

  &:nth-child(odd) {
    margin-right: 54px;
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;

    &:nth-child(odd) {
      margin-right: 0;
    }
  }
`;

const Question = styled.p`
  font-size: 30px;
  line-height: 37px;
  font-family: Josefin Slab;
  color: #000;
  margin: 0 0 46px 0;
`;

const Answer = styled.p`
  font-size: 22px;
  line-height: 30px;
  font-family: Gilroy;
  letter-spacing: 2.2px;
  color: #37322c;
  margin: 0 0 89px 0;
`;
