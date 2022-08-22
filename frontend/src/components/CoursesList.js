import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from './Button';
import Course from './CoursesListItem';
import LoadingSpinner from './LoadingSpinner';

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
            return {
              heading: data.kursarten[0].name,
              courses: data.kursarten[0].vorlagen[0].kurse,
            };
          })
          .catch((error) => console.log(error));
      })
    ).then((all) => {
      setCourses(all);
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
            courses.map((template, index) => (
              <List key={index}>
                {template
                  ? template.courses.length &&
                    template.courses.map((course, i) => (
                      <Course key={i} course={course} content={content} />
                    ))
                  : 'Keine Kurse gefunden.'}
              </List>
            ))
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
    margin-top: 155px;

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
  margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
  list-style-type: none;
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
