const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASS,
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log('Successfully verified');
    }
  });

  const name = req.body.name;
  const address = req.body.address;
  const email = req.body.email;
  const phone = req.body.phone;
  const delivery = req.body.delivery;
  const gravida = req.body.gravida;
  const para = req.body.para;
  const message = req.body.message;
  const html = `<b>Name:</b> ${name}<br /><b>Adresse:</b> ${address}<br /><b>E-Mail:</b> ${email}<br /><b>Telefon:</b> ${phone}<br /><b>ET:</b> ${delivery}<br /><b>Gravida:</b> ${gravida}<br /><b>Para:</b> ${para}<br /><b>Nachricht:</b> ${message}<br /><br /><i>Diese Anfrage wurde über das Betreuungsformular auf der Website gestellt.</i>`;
  const text = `Name: ${name} \nAdresse: ${address} \nE-Mail: ${email} \nTelefon: ${phone} \nET: ${delivery} \nGravida: ${gravida} \nPara: ${para} \nNachricht: ${message} \n\n Diese Anfrage wurde über das Betreuungsformular auf der Website gestellt.`;

  const mail = {
    from: {
      name: name,
      address: process.env.MAIL,
    },
    to: process.env.USER,
    subject: 'Betreuungsanfrage',
    html: html,
    text: text,
  };

  transporter.sendMail(mail, (err) => {
    if (err) {
      res.json({
        status: 'fail',
      });
    } else {
      res.json({
        status: 'success',
      });
    }
  });
});

module.exports = router;
