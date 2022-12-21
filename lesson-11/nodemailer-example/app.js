require('dotenv').config();

const nodemailer = require('nodemailer');

const {META_UA_PASSWORD} = process.env;

const config = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'pavlobatov@meta.ua',
    pass: META_UA_PASSWORD
  }
};

const transport = nodemailer.createTransport(config);

const message = {
  to: 'batovpasha@gmail.com',
  from: 'pavlobatov@meta.ua',
  subject: 'Check email sending',
  html: 'Some email text'
};

transport.sendMail(message)
  .then(() => console.log('Email was successfully sent'))
  .catch(error => console.error(error));