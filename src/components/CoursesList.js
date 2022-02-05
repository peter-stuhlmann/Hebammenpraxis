import React from 'react';
import styled from 'styled-components';

import Button from './Button';

import monthNameGenerator from '../helpers/monthNameGenerator';

export default function CoursesList(props) {
  const { coursesList, setContactFormVisibility } = props;

  return (
    <Container>
      <Wrapper>
        <Column>
          <Heading>Kurse</Heading>
          <Text>
            Die Schwangerschaft ist ein besonderer Lebensabschnitt mit
            wunderbaren und intensiven Augenblicken. Wir unterstützen dich
            sorgsam während der Zeit deines wachsenden Bauches und den damit
            verbundenen Veränderungen.
          </Text>
          <Image
            src="https://image-placeholder.vercel.app/?w=536&h=685"
            alt=""
          />
        </Column>
        <Column>
          <List>
            {coursesList.map((course) => (
              <ListItem key={course.name + course.dateStart}>
                <Name dangerouslySetInnerHTML={{ __html: course.name }} />
                <Date>
                  {course.dateStart.slice(8, 10)}.{' '}
                  {monthNameGenerator(course.dateStart.slice(5, 7))}{' '}
                  {/* {course.dateStart.slice(0, 4)} */}
                  {' - '}
                  {course.dateStart.slice(11, 13)}:
                  {course.dateStart.slice(13, 15)}
                  {' - '}
                  {course.dateEnd.slice(11, 13)}:{course.dateEnd.slice(13, 15)}{' '}
                  Uhr
                </Date>
              </ListItem>
            ))}
          </List>
          <ButtonContainer>
            <Button href="/kurs-buchen">Kurs buchen</Button>
            <Button href="/" onClick={() => setContactFormVisibility(true)}>
              Kontaktformular
            </Button>
          </ButtonContainer>
        </Column>
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  background-color: #e3e0d4;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 1670px;
  margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
`;

const Column = styled.div`
  padding-bottom: 320px;

  &:first-child {
    flex: 0 0 33%;

    @media (max-width: 1000px) {
      flex: 0 0 calc(50% - 80px);
    }

    @media (max-width: 768px) {
      flex: 0 0 100%;
      padding-bottom: 0;
    }
  }

  &:last-child {
    flex: 0 0 calc(67% - 100px);
    margin-left: 100px;

    @media (max-width: 1000px) {
      flex: 0 0 50%;
      margin-left: 80px;
    }

    @media (max-width: 768px) {
      flex: 0 0 100%;
      margin-left: 0;
    }
  }
`;

const Heading = styled.h2`
  flex: 0 0 30%;
  font-family: Josefin Slab;
  font-size: clamp(30px, 5vw, 70px);
  line-height: clamp(37px, 5vw, 85px);
  font-weight: normal;
  margin: 135px 0 48px 0;
`;

const Text = styled.p`
  color: #37322c;
  font-size: clamp(18px, 5vw, 22px);
  line-height: clamp(25px, 5vw, 30px);
  font-family: Gilroy;
  letter-spacing: 2.2px;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  margin: 100px 0 0 0;
`;

const List = styled.ul`
  width: 100%;
  max-width: 900px;
  margin: 175px auto 0 auto;
  padding: 15px;
  box-sizing: border-box;
  list-style-type: none;
`;

const ListItem = styled.li`
  border-bottom: 2px solid #707070;
  padding: 71px 0;
  cursor: pointer;
`;

const Name = styled.div`
  font-family: Josefin Slab;
  font-size: clamp(30px, 5vw, 70px);
  line-height: clamp(37px, 5vw, 85px);
  font-weight: normal;
  margin: 0 0 46px 0;
`;

const Date = styled.div`
  color: #000;
  font-size: 40px;
  line-height: 48px;
  font-family: Josefin Slab;
`;

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 111px auto 0 auto;
  padding: 15px;
  box-sizing: border-box;

  & > a:first-child {
    margin-right: 68px;
    margin-bottom: 30px;
  }
`;
