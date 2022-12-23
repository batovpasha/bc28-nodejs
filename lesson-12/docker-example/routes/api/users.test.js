require('dotenv').config();

const app = require('../../app');
const mongoose = require('mongoose');
const User = require('../../models/users');
const request = require('supertest');

const {DB_TEST_HOST, PORT} = process.env;

describe('test users routes', () => {
  let server;

  beforeAll(() => {
    server = app.listen(PORT);
  });

  afterAll(() => {
    server.close();
  });

  beforeEach(async () => {
    await mongoose.connect(DB_TEST_HOST);
  });

  // afterEach((done) => {
  //   mongoose.connection.db.dropCollection(() => {
  //     mongoose.connection.close(() => done());
  //   });
  // });

  // 1. Ендпоінт відповідає з статус кодом 200 та токеном у тілі відповіді
  // 2. В базу даних успішно записався новий токен для користувача
  test('user login successfully', async () => {
    // AAA:
    //   Arrange - фаза підготовки
    //   Act - виконання дії
    //   Assert - перевірка результатів

    // Arrange
    const newUser = {
      name: 'Pavlo',
      email: 'random@gmail.com',
      password: '$2a$10$EPDgimSV01cMOLylzasXduhxdpZUsH9J6FWilHox02k3nSTxETOP2',
      avatarURL: 'http://example.com'
    };

    const user = await User.create(newUser);

    // Act
    const userLoginData = {
      email: 'random@gmail.com',
      password: '12345678'
    };

    const response = await request(app).post('/api/users/login').send(userLoginData);

    // Assert
    expect(response.statusCode).toEqual(200);

    const {token} = response.body;

    expect(token).toEqual(expect.any(String));

    const userFromDb = await User.findById(user._id);

    expect(userFromDb.token).toEqual(token);
  });
});

