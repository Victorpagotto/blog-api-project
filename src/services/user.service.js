const { User } = require('../models');
const { resultHandler } = require('../utils/utils');

const getById = async (id) => {
  const info = await User
    .findOne({ where: { id }, attributes: { exclude: ['password'] } });
  const message = 'User does not exist';
  if (!info) return resultHandler('NOT_FOUND', { message }, true);
  return resultHandler('OK_FOUND', info.dataValues, false);
};

const getByEmail = async (email) => {
  const info = await User
    .findOne({ where: { email } });
    return info;
};

const create = async (userInfo) => {
  const info = {
    ...userInfo,
    image: userInfo.image || '',
  };
  const result = await User.create(info);
  if (result) return resultHandler('OK_CREATED', result.dataValues, false);
  return resultHandler('SERVER_ERROR', { message: 'Server error' }, true);
};

const getAll = async () => {
  const result = await User.findAll({ attributes: { exclude: ['password'] } });
  return resultHandler('OK_FOUND', result, false);
};

module.exports = {
  getById,
  getByEmail,
  create,
  getAll,
};