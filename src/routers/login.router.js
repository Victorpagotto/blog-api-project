const express = require('express');

const loginRouter = express.Router();
const loginController = require('../controllers/login.controller');

loginRouter.use(express.json());

loginRouter.post('/', loginController.login);

module.exports = loginRouter;