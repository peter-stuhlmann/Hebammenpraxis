import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import CourseBookingForm from '../components/CourseBookingForm';
import useQuery from '../helpers/useQuery';

export default function CourseBooking(props) {
  const { setSendingStatus, sendingStatus } = props;

  const query = useQuery();

  const id = query.get('id');
  const title = query.get('title');
  const startDate = query.get('startDate');
  const description = query.get('description');

  return query.get('id') ? (
    <>
      <CourseBookingForm
        courseId={id}
        courseTitle={title}
        courseStartDate={startDate}
        courseDescription={description}
        sendingStatus={sendingStatus}
        setSendingStatus={setSendingStatus}
      />
    </>
  ) : (
    <Container>
      <Text>Es wurde kein Kurs ausgewählt.</Text>
      <Button href="/kurse" color={['#E3E0D4', '#fff']}>
        Zur Kursliste
      </Button>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  max-width: 1670px;
  padding: 100px 15px;
  box-sizing: border-box;
  margin: 0 auto;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.p`
  text-align: center;
  font-size: 22px;
  line-height: 30px;
  font-family: Gilroy;
  color: #000;
`;
