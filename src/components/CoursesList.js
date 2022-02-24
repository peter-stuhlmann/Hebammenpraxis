import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from './Button';
import LoadingSpinner from './LoadingSpinner';

import monthNameGenerator from '../helpers/monthNameGenerator';

import content from '../data/courses.js';
import courseTemplates from '../data/courseTemplates.js';

export default function CoursesList(props) {
  const { setContactFormVisibility } = props;

  const [courses, setCourses] = useState(null);

  const requestOptions = (formData) => {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };
  };

  useEffect(() => {
    Promise.all(
      courseTemplates.map((template) => {
        return fetch(
          `${process.env.REACT_APP_SERVER}/get-courses`,
          requestOptions(template)
        )
          .then((response) => response.json())
          .then((data) => {
            return data.kursarten[0].vorlagen[0].kurse;
          })
          .catch((error) => console.log(error));
      })
    ).then((all) => {
      const allCourses = all.flat();

      // sort by date
      allCourses.sort(function (a, b) {
        const keyA = `${a.ersterTermin.slice(6, 10)}-${a.ersterTermin.slice(
          3,
          5
        )}-${a.ersterTermin.slice(0, 2)}`;

        const keyB = `${b.ersterTermin.slice(6, 10)}-${b.ersterTermin.slice(
          3,
          5
        )}-${b.ersterTermin.slice(0, 2)}`;

        if (keyA < keyB) {
          return -1;
        }
        if (keyA > keyB) {
          return 1;
        }
        return 0;
      });

      setCourses(allCourses);
    });
  }, []);

  return (
    <Container>
      <Wrapper>
        <Column>
          <Heading>{content.coursesList.heading}</Heading>
          <Text>{content.coursesList.text}</Text>
          <Image
            src={content.coursesList.img.src}
            alt={content.coursesList.img.description}
          />
        </Column>
        <Column>
          {courses ? (
            <List>
              {courses.map((course) => (
                <ListItem key={course.id}>
                  <Name>{course.bezeichnung}</Name>
                  <div>
                    <Date>
                      {course.ersterTermin.slice(0, 2)}.{' '}
                      {monthNameGenerator(course.ersterTermin.slice(3, 5))}{' '}
                      {' - '}
                      {course.vonUhrzeit.slice(0, 5)}
                      {' - '}
                      {course.bisUhrzeit.slice(0, 5)} Uhr
                    </Date>
                    <Button
                      href={`${content.coursesList.button[0].href}?id=${course.id}&title=${course.bezeichnung}&startDate=${course.ersterTermin}`}
                    >
                      {content.coursesList.button[0].text}
                    </Button>
                  </div>
                </ListItem>
              ))}
            </List>
          ) : (
            <LoadingSpinner />
          )}
          <ButtonContainer>
            <Button
              href={content.coursesList.button[1].href}
              onClick={() => setContactFormVisibility(true)}
            >
              {content.coursesList.button[1].text}
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

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1400px) {
      flex-direction: column;
      align-items: flex-start;

      a {
        margin-top: 30px;
      }
    }
  }
`;

const Name = styled.span`
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
