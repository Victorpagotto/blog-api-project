const { Category } = require('../models');
const { resultHandler } = require('../utils/utils');

const create = async (userInfo) => {
  const info = await Category.create(userInfo);
  if (info) return resultHandler('OK_CREATED', info.dataValues, false);
  return resultHandler('SERVER_ERROR', { message: 'Server error.' }, true);
};

const getAll = async () => {
  const info = await Category.findAll();
  if (info) return resultHandler('OK_FOUND', info, false);
  return resultHandler('SERVER_ERROR', { message: 'Server error.' }, true);
};

module.exports = {
  create,
  getAll,
};
