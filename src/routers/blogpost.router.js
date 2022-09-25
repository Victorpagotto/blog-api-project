const express = require('express');

const postRouter = express.Router();
const postController = require('../controllers/blogpost.controlller');
const { JWTAuthentification } = require('../middleweres/authentification');

postRouter.use(express.json());

postRouter.post('/', JWTAuthentification, postController.create);
postRouter.get('/', JWTAuthentification, postController.getAll);
postRouter.get('/:id', JWTAuthentification, postController.getById);

module.exports = postRouter;