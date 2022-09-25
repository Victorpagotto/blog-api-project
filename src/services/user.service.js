const { User } = require('../models');
const { resultHandler } = require('../utils/utils');

const SERVER_ERROR = 'Server error.';

const getById = async (id) => {
  try {
    const info = await User
      .findOne({ where: { id }, attributes: { exclude: ['password'] } });
    const message = 'User does not exist';
    if (!info) return resultHandler('NOT_FOUND', { message }, true);
    return resultHandler('OK_FOUND', info.dataValues, false);
  } catch (error) {
    console.log(error);
    return resultHandler('SERVER_ERROR', { message: SERVER_ERROR }, true);
  }
};

const getByEmail = async (email) => {
    try {
      const info = await User
        .findOne({ where: { email } });
      return info;
    } catch (error) {
      console.log(error);
      return resultHandler('SERVER_ERROR', { message: SERVER_ERROR }, true);
    }
};

const create = async (userInfo) => {
  try {
    const info = {
      ...userInfo,
      image: userInfo.image || '',
    };
    const result = await User.create(info);
    if (result) return resultHandler('OK_CREATED', result.dataValues, false);
    return resultHandler('SERVER_ERROR', { message: 'Server error' }, true);
  } catch (error) {
    console.log(error);
    return resultHandler('SERVER_ERROR', { message: SERVER_ERROR }, true);
  }
};

const getAll = async () => {
  try {
    const info = await User.findAll({ attributes: { exclude: ['password'] } });
    const formatInfo = info.map((position) => position.dataValues);
    return resultHandler('OK_FOUND', formatInfo, false);
  } catch (error) {
    console.log(error);
    return resultHandler('SERVER_ERROR', { message: SERVER_ERROR }, true);
  }
};

module.exports = {
  getById,
  getByEmail,
  create,
  getAll,
};