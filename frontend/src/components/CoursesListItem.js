import React from 'react';
import styled from 'styled-components';

import Button from './Button';

import monthNameGenerator from '../helpers/monthNameGenerator';

export default function CourseesListItem(props) {
  const { course, content } = props;

  return (
    <ListItem key={course.id}>
      <Name>{course.bezeichnung}</Name>
      <div>
        <div>
          <Date>
            {course.ersterTermin.slice(0, 2)}.{' '}
            {monthNameGenerator(course.ersterTermin.slice(3, 5))} {' - '}
            {course.vonUhrzeit.slice(0, 5)}
            {' - '}
            {course.bisUhrzeit.slice(0, 5)} Uhr
          </Date>
          <Availability>
            {course.anzahlPlaetze > 0 ? (
              <>Noch {course.anzahlPlaetze} Plätze verfügbar.</>
            ) : (
              <>Keine Plätze mehr verfügbar.</>
            )}
          </Availability>
        </div>
        <Button
          href={`${content.coursesList.button[0].href}?id=${course.id}&title=${course.bezeichnung}&startDate=${course.ersterTermin}&description=${course.beschreibung}`}
          disabled={course.anzahlPlaetze === 'Ausgebucht'}
        >
          {course.anzahlPlaetze > 0
            ? content.coursesList.button[0].text
            : 'Augebucht'}
        </Button>
      </div>
    </ListItem>
  );
}

const ListItem = styled.li`
  border-bottom: 2px solid #707070;
  padding: 71px 0;

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

const Availability = styled.div`
  font-family: Josefin Slab;
  font-size: 25px;
  margin-top: 15px;
`;
