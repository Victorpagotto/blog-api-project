const { encoder } = require('../authentication/JWTToken');
const userService = require('../services/user.service');
const { resultHandler, payloader } = require('../utils/utils');

const create = async (req, res) => {
  const { body } = req;
  const info = await userService.create(body);
  if (info) {
    const token = encoder(payloader(info.result));
    const { status, result } = resultHandler('OK_CREATED', { token }, false);
    return res.status(status).json(result);
  }
  const message = 'Server error.';
  const { status, result } = resultHandler('SERVER_ERROR', { message }, true);
  return res.status(status).json(result);
};

const getAll = async (req, res) => {
  const { status, result } = await userService.getAll();
  return res.status(status).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, result } = await userService.getById(id);
  res.status(status).json(result);
};

module.exports = {
  create,
  getAll,
  getById,
};
