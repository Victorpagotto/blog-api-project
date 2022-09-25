const express = require('express');

const postRouter = express.Router();
const postController = require('../controllers/post.controlller');
const { JWTAuthentification } = require('../middleweres/authentification');

postRouter.use(express.json());

postRouter.post('/', JWTAuthentification, postController.create);

module.exports = postRouter;