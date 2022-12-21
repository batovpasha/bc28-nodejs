const {Schema, model} = require('mongoose');

const emailRegexp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

// 1. При реєстрації користувача ми відправляємо email з лінкою для підтвердження пошти
// 2. Створити роут для верифікації користувача + модифікувати authenticate middleware
// 3. Створити роут для повторної верифікації користувача

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    match: emailRegexp,
    unique: true,
    required: true
  },
  password: {
    type: String,
    minlength: 8,
    required: true
  },
  token: {
    type: String,
    default: ""
  },
  avatarURL: {
    type: String,
    required: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  verificationToken: {
    type: String,
    required: [true, 'Verification token is required']
  },
}, {
  versionKey: false,
  timestamps: true
});

const User = model('user', userSchema);

module.exports = User;
