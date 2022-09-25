const express = require('express');

const postRouter = express.Router();
const postController = require('../controllers/blogpost.controlller');
const { JWTAuthentification } = require('../middleweres/authentification');

postRouter.use(express.json());

postRouter.get('/search', JWTAuthentification, postController.search);
postRouter.get('/:id', JWTAuthentification, postController.getById);
postRouter.put('/:id', JWTAuthentification, postController.update);
postRouter.delete('/:id', JWTAuthentification, postController.destroy);
postRouter.post('/', JWTAuthentification, postController.create);
postRouter.get('/', JWTAuthentification, postController.getAll);

module.exports = postRouter;