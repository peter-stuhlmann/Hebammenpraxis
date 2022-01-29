import React from 'react';

import ImageBanner from '../components/ImageBanner';
import Article from '../components/Article';
import CoursesList from '../components/CoursesList';

import courses from '../data/courses';
import coursesList from '../data/coursesList';

export default function Courses() {
  return (
    <>
      <ImageBanner content={courses.banner} height="659px" textWidth="1500px" />
      <CoursesList coursesList={coursesList} />
      <Article content={courses.article[0]} buttonColor={['#E3E0D4', '#fff']} />
    </>
  );
}
