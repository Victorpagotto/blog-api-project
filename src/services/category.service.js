const { Category } = require('../models');
const { resultHandler } = require('../utils/utils');

const SERVER_ERROR = 'Server error.';

const create = async (userInfo) => {
  try {
    const info = await Category.create(userInfo);
    if (info) return resultHandler('OK_CREATED', info.dataValues, false);
    return resultHandler('SERVER_ERROR', { message: SERVER_ERROR }, true);
  } catch (error) {
    console.log(error);
    return resultHandler('SERVER_ERROR', { message: SERVER_ERROR }, true);
  }
};

const getAll = async () => {
  try {
    const info = await Category.findAll();
    const formatInfo = info.map((position) => position.dataValues);
    if (info) return resultHandler('OK_FOUND', formatInfo, false);
    return resultHandler('SERVER_ERROR', { message: SERVER_ERROR }, true);
  } catch (error) {
    console.log(error);
    return resultHandler('SERVER_ERROR', { message: SERVER_ERROR }, true);
  }
};

module.exports = {
  create,
  getAll,
};
