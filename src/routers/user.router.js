const express = require('express');

const userRouter = express.Router();
const userController = require('../controllers/user.controller');
const { validateUserInfo, JWTAuthentification } = require('../middleweres/authentification');

userRouter.use(express.json());
userRouter.post('/', validateUserInfo, userController.create);
userRouter.get('/', JWTAuthentification, userController.getAll);
userRouter.get('/:id', JWTAuthentification, userController.getById);

module.exports = userRouter;