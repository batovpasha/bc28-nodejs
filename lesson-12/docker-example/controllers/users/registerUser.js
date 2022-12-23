const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const {randomUUID} = require('crypto');
const { createError, sendEmail } = require('../../helpers');
const User = require('../../models/users');

const {BASE_URL} = process.env;

async function registerUser(req, res) {
  const {name, email, password} = req.body;

  const user = await User.findOne({email});

  if (user) {
    throw createError({status: 409, message: 'Email in use'});
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email, {protocol: 'https'});
  const verificationToken = randomUUID();

  const result = await User.create({
    name,
    email,
    password: hashPassword,
    avatarURL,
    verificationToken
  });

  // http://localhost:3000/api/users/verify/<verificationToken>
  const verificationTokenUrl = `${BASE_URL}/api/users/verify/${verificationToken}`;
  const message = {
    to: email,
    subject: 'Email verification',
    html: `<a href="${verificationTokenUrl}">Click to verify your email</a>`
  };

  await sendEmail(message);

  res.status(201).json({
    name: result.name,
    email: result.email
  });
}

module.exports = registerUser;