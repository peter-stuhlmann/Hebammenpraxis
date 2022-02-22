const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  const url = 'https://login.miya360.de/apps/call/portal/kursanmeldung';

  const body = {
    token: process.env.TOKEN,
    ...req.body,
  };

  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    const response = await axios.post(url, body);
    const { data: responseData } = await response;

    return res.status(200).json(responseData);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
