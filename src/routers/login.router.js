const express = require('express');

const loginRouter = express.Router();

loginRouter.use(express.json());

module.exports = loginRouter;