const express = require('express');

const userRouter = express.Router();
const userController = require('../controllers/user.controller');
const { validateUserInfo } = require('../middleweres/authentification');

userRouter.use(express.json());
userRouter.post('/', validateUserInfo, userController.create);

module.exports = userRouter;