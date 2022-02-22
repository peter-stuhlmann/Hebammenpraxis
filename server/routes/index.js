const express = require('express');
const router = express.Router();

const bookCourses = require('./book-courses');
const getCourses = require('./get-courses');
const sendMessage = require('./send-message');

router.use('/book-courses', bookCourses);
router.use('/get-courses', getCourses);
router.use('/send-message', sendMessage);

module.exports = router;
