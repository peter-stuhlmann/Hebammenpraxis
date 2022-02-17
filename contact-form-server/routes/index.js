const express = require('express');
const router = express.Router();

const getCourses = require('./get-courses');
const sendMessage = require('./send-message');

router.use('/get-courses', getCourses);
router.use('/send-message', sendMessage);

module.exports = router;
