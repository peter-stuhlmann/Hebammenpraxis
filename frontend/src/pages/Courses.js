import React from 'react';

import ImageBanner from '../components/ImageBanner';
import Article from '../components/Article';
import CoursesList from '../components/CoursesList';

import courses from '../data/courses';

export default function Courses(props) {
  const { setContactFormVisibility } = props;

  return (
    <>
      <ImageBanner
        content={courses.banner}
        height="659px"
        textWidth="1475px"
        backgroundColor="#bfb1b4"
      />
      {courses.article.map((course, i) => (
        <Article key={i} content={course} buttonColor={['#E3E0D4', '#fff']} />
      ))}
      <CoursesList setContactFormVisibility={setContactFormVisibility} />
    </>
  );
}
