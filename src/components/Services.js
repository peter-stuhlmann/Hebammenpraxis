import React, { Fragment } from 'react';
import styled from 'styled-components';

import Button from './Button';

export default function Services(props) {
  const { content } = props;

  return (
    <Container>
      <Wrapper>
        <Heading>{content.heading}</Heading>
        <ImageContainer>
          <Image src={content.img.src} alt={content.img.description} />
        </ImageContainer>
        <ContentBox>
          <Content>
            {content.description.map((section, index) => (
              <Fragment key={index}>
                {section.heading && <Title>{section.heading}</Title>}
                {section.list && (
                  <List>
                    {section.list.map((listItem) => (
                      <ListItem
                        key={listItem}
                        dangerouslySetInnerHTML={{ __html: listItem }}
                      />
                    ))}
                  </List>
                )}
              </Fragment>
            ))}
            <CustomizedButton href={content.button.href}>
              {content.button.linkText}
            </CustomizedButton>
          </Content>
        </ContentBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  background-color: #e3e0d4;
  padding: 0 15px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 110px 0;
`;

const Heading = styled.h2`
  font-size: 40px;
  line-height: 48px;
  font-family: Josefin Slab;
  font-weight: normal;
  color: #000;
  flex: 0 0 100%;
`;

const ImageContainer = styled.div`
  flex: 0 0 40%;

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const ContentBox = styled.div`
  flex: 0 0 60%;

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 566px;
  margin: 3vw auto 0 auto;
  padding: 15px;
  box-sizing: border-box;
`;

const Title = styled.span`
  font-family: Gilroy;
  font-size: clamp(18px, 5vw, 22px);
  line-height: clamp(25px, 5vw, 30px);
  letter-spacing: 2.2px;
  color: #37322c;
  display: inline-block;
  margin: 40px 0 6px 0;
`;

const List = styled.ul`
  margin: 0 0 0 20px;
  padding: 0;

  @media (max-width: 480px) {
    margin: 0 0 0 10px;
  }
`;

const ListItem = styled.li`
  font-family: Gilroy;
  font-size: clamp(18px, 5vw, 22px);
  line-height: clamp(25px, 5vw, 30px);
  letter-spacing: 2.2px;
  color: #37322c;
  padding-inline-start: 0;
  margin: 6px 0;
`;

const CustomizedButton = styled(Button)`
  margin-top: 100px;
`;
