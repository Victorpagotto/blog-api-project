const { encoder } = require('../authentication/JWTToken');
const userService = require('../services/user.service');
const { resultHandler, payloader } = require('../utils/utils');

const create = async (req, res) => {
  const { body } = req;
  const info = await userService.create(body);
  if (info) {
    const token = encoder(payloader(info));
    const { status, result } = resultHandler('OK_CREATED', { token }, false);
    return res.status(status).json(result);
  }
  const message = 'Server error.';
  const { status, result } = resultHandler('SERVER_ERROR', { message }, true);
  return res.status(status).json(result);
};

module.exports = {
  create,
};
