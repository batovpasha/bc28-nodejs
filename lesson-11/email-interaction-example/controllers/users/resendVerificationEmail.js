const { createError, sendEmail } = require('../../helpers');
const User = require('../../models/users');

const {BASE_URL} = process.env;

async function resendVerificationEmail(req, res) {
  const {email} = req.body;

  const user = await User.findOne({email});

  if (!user) {
    throw createError({status: 404, message: 'User not found'});
  }

  if (user.isVerified) {
    throw createError({
      status: 400,
      message: 'User is already verified',
    });
  }

  const verificationTokenUrl = `${BASE_URL}/api/users/verify/${user.verificationToken}`;
  const message = {
    to: email,
    subject: 'Email verification',
    html: `<a href="${verificationTokenUrl}">Click to verify your email</a>`
  };

  await sendEmail(message);

  res.json({
    message: 'Email was resent successfully'
  });
}

module.exports = resendVerificationEmail;