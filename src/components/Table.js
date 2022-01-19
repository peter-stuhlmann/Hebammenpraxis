import React from 'react';
import styled from 'styled-components';

export default function Table(props) {
  const { content, alternate } = props;

  return (
    <Container alternate={alternate}>
      {content.map((entry) => (
        <Entry key={entry.content.heading} alternate={alternate}>
          <Content>
            <Heading alternate={alternate}>{entry.heading}</Heading>
            <Description
              alternate={alternate}
              dangerouslySetInnerHTML={{ __html: entry.description }}
              style={{ maxWidth: '400px' }}
            />
          </Content>
          <Content large>
            <Heading
              alternate={alternate}
              dangerouslySetInnerHTML={{ __html: entry.content.heading }}
            />
            <Description
              alternate={alternate}
              dangerouslySetInnerHTML={{ __html: entry.content.description }}
            />
          </Content>
        </Entry>
      ))}
    </Container>
  );
}

const Container = styled.section`
  background-color: ${(props) => (props.alternate ? '#A49194' : '#e3e0d4')};
  padding: 0 15px 110px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const Entry = styled.div`
  padding: 110px 15px;
  box-sizing: border-box;
  border-bottom: 2px solid ${(props) => (props.alternate ? '#fff' : '#707070')};
  display: flex;
  flex-flow: row wrap;
`;

const Heading = styled.h2`
  flex: 0 0 40%;
  font-family: Josefin Slab;
  font-size: clamp(30px, 5vw, 70px);
  line-height: clamp(37px, 5vw, 85px);
  margin: 0;
  color: ${(props) => (props.alternate ? '#fff' : '#000')};

  @media (max-width: 480px) {
    flex: 0 0 100%;
    margin-bottom: 45px;
  }
`;

const Content = styled.div`
  flex: 0 0 ${(props) => (props.large ? 60 : 40)}%;
  padding: 15px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const Description = styled.p`
  font-family: Gilroy;
  font-size: clamp(18px, 5vw, 22px);
  line-height: clamp(25px, 5vw, 30px);
  letter-spacing: 2.2px;
  color: ${(props) => (props.alternate ? '#fff' : '#37322c')};

  a {
    color: ${(props) => (props.alternate ? '#fff' : '#37322c')};
  }
`;
