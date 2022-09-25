const JWTToken = require('../authentication/JWTToken');
const validateAll = require('../authentication/validateUserInfo');
const userService = require('../services/user.service');
const { resultHandler } = require('../utils/utils');

const JWTAuthentification = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });
  const decoded = JWTToken.decoder(token);
  if (!decoded) return res.status(401).json({ message: 'Expired or invalid token' });
  try {
    const user = await userService.getById(decoded.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
    throw new Error({ message: err.message, location: 'JWT authentication' });
  }
};

const validateUserInfo = async (req, res, next) => {
  const { status, result } = await validateAll(req.body);
  if (result.message) {
    return res.status(status).json(result);
  }
  next();
};

const validateCategoryInfo = (req, res, next) => {
  if (!req.body.name) {
    const { status, result } = resultHandler('BAD_FORMAT', { message: '"name" is required' }, true);
    return res.status(status).json(result);
  }
  next();
};

module.exports = {
  JWTAuthentification,
  validateUserInfo,
  validateCategoryInfo,
};