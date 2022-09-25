const JWTToken = require('../authentication/JWTToken');
const validateAll = require('../authentication/validateUserInfo');
const userService = require('../services/user.service');

const JWTAuthentification = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token não encontrado' });
  const decoded = JWTToken.decoder(token);
  try {
    const user = await userService.getById(decoded.data.userId);
    if (!user) return res.status(404).json({ message: 'Erro ao procurar usuário do token.' });
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

module.exports = {
  JWTAuthentification,
  validateUserInfo,
};