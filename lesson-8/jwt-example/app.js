require('dotenv').config();

const jwt = require('jsonwebtoken');

const {JWT_SECRET_KEY} = process.env;

const payload = {
  id: 'kjnaklsa42sfioasjdfpio'
};

const token = jwt.sign(payload, JWT_SECRET_KEY, {expiresIn: '1h'});

const result = jwt.verify(token, JWT_SECRET_KEY);

console.log('Positive case:', result);

const decodedPayload = jwt.decode(token);

console.log('Decoded token:', decodedPayload);

console.log('Negative case:');

const wrongToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImtqbmFrbHNhNDJzZmlvYXNqZGZwaW8iLCJpYXQiOjE2NzA1MjM1NDMsImV4cCI6MTY3MDUyNzE0M30.wzHYP2Ogbc_-iUEW2viWIB683Lx0VlyEiaFbiOFhgr1';

try {
  const result = jwt.verify(wrongToken, JWT_SECRET_KEY);
} catch (err) {
  console.error(err);
}
