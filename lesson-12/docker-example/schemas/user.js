const Joi = require('joi');

const emailRegexp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

const registerUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(8).required()
});

const loginUserSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(8).required()
});

const resendVerificationEmail = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = {
  registerUserSchema,
  loginUserSchema,
  resendVerificationEmail
};