const bcrypt = require('bcryptjs');

async function hashPassword(password) {
  const result = await bcrypt.hash(password, 10);

  // const passwordCompare = await bcrypt.compare('12345678', result);

  // console.log({passwordCompare});

  return result;
}

hashPassword('12345678');