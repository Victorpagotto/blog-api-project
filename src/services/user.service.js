const { User } = require('../models');
const { resultHandler } = require('../utils/utils');

const getById = async (id) => {
  const info = await User
    .findOne({ where: { id }, attributes: { exclude: ['password'] } });
  const message = 'User does not exist';
  if (info === null) return resultHandler('NOT_FOUND', { message }, true);
  return resultHandler('OK_FOUND', info, false);
};

const getByEmail = async (email) => {
  const info = await User
    .findOne({ where: { email } });
    return info;
};

module.exports = {
  getById,
  getByEmail,
};