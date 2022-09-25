const userService = require('../services/user.service');
const JWTToken = require('../authentication/JWTToken');
const { payloader } = require('../utils/utils');

const login = async (req, res) => {
  const { body } = req;
  if (!body.email || !body.password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const result = await userService.getByEmail(body.email);
  if (!result || result.password !== body.password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const payload = payloader(result);
  const token = JWTToken.encoder(payload);
  return res.status(200).json({ token });
};

module.exports = {
  login,
};
