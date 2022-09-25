const categoryService = require('../services/category.service');

const create = async (req, res) => {
  const { status, result } = await categoryService.create(req.body);
  return res.status(status).json(result);
};

const getAll = async (req, res) => {
  const { status, result } = await categoryService.getAll();
  return res.status(status).json(result);
};

module.exports = {
  create,
  getAll,
};
