const { resultHandler } = require('../utils/utils');
const userService = require('../services/user.service');

const validateName = (name) => !name || name.length < 8;
const validatePassword = (password) => !password || password.length < 6;
const validateEmail = (email) => (
  !email || !email.match((/^((\w+)([.-]?\w+)*)@((\w+)([.-]?\w+)*(\.\w+))/i))
);

const validateAll = async (info) => {
  let message;
  if (validateName(info.displayName)) {
    message = '"displayName" length must be at least 8 characters long';
    return resultHandler('BAD_FORMAT', { message }, true);
  }
  if (validatePassword(info.password)) {
    message = '"password" length must be at least 6 characters long';
    return resultHandler('BAD_FORMAT', { message }, true);
  }
  if (validateEmail(info.email)) {
    message = '"email" must be a valid email';
    return resultHandler('BAD_FORMAT', { message }, true);
  }
  if (await userService.getByEmail(info.email)) {
    message = 'User already registered';
    return resultHandler('CONFLICT', { message }, true);
  }
  return resultHandler('OK_FOUND', true, true);
};

module.exports = validateAll;