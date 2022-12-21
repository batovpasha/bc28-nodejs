require('dotenv').config();

const sgMail = require('@sendgrid/mail');

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const message = {
  to: 'batovpasha@gmail.com',
  from: 'batovpasha@gmail.com',
  subject: 'Check email sending',
  html: '<h1>Some email text</h1>'
};

sgMail.send(message)
  .then(() => console.log('Email was successfully sent'))
  .catch(error => console.error(error.response.body));