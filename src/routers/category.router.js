const express = require('express');

const categoryRouter = express.Router();
const categoryController = require('../controllers/category.controller');
const { validateCategoryInfo, JWTAuthentification } = require('../middleweres/authentification');

categoryRouter.use(express.json());

categoryRouter.post('/', JWTAuthentification, validateCategoryInfo, categoryController.create);
categoryRouter.get('/', JWTAuthentification, categoryController.getAll);

module.exports = categoryRouter;