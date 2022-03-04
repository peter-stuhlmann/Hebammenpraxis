import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Map from '../components/Map';
import Table from '../components/Table';

import contact from '../data/contact';

export default function Contact() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_WP_SERVER}/events`)
      .then((res) => {
        const events = res.data.map((item, index) => {
          return {
            heading: index === 0 ? 'Aktuelles' : '',
            content: {
              heading: item.title.rendered,
              description: item.content.rendered || '',
            },
          };
        });
        setEvents(events);
      })
      .catch(() => {
        setEvents('error');
      });
  }, []);

  return (
    <>
      <Map content={contact} />
      <Table content={contact.data} heading={contact.data.heading} alternate />
      <Table content={events} heading="Aktuelles" alternate />
    </>
  );
}
