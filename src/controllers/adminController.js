const { v4: uuidv4 } = require('uuid');
const dotenv = require('dotenv');
const Unauthorized = require('../errors/Unauthorized');

dotenv.config();

function login({ email, password }) {
  const validEmail = process.env.ADMIN_EMAIL;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (validEmail !== email || validPassword !== password) throw new Unauthorized();

  const token = uuidv4();
  return { token };
}

module.exports = { login };