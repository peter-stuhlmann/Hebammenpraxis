import React from 'react';

import Map from '../components/Map';
import Table from '../components/Table';

import contact from '../data/contact';

export default function Contact() {
  return (
    <>
      <Map content={contact} />
      <Table content={contact.news} alternate />
    </>
  );
}
