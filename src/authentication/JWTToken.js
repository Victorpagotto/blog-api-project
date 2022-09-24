const jwt = require('jsonwebtoken');
require('dotenv').config();

const srt = process.env.JWT_SECRET || 'suasenhagenerica';

const encoder = (payload) => {
  const config = {
    algorithm: 'HS256',
  };
  return jwt.sign({ data: { ...payload } }, srt, config);
};

const decoder = (token) => (
  jwt.verify(token, srt)
);

module.exports = {
  encoder,
  decoder,
};