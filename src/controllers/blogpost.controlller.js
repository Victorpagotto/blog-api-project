const validateAllPostInfo = require('../authentication/vallidatePostInfo');
const blogPostService = require('../services/blogpost.service');

const create = async (req, res) => {
  const validation = await validateAllPostInfo(req.body);
  if (!validation.status) {
    const postInfo = req.body;
    postInfo.categoryIds = validation.categoryIds;
    const userInfo = req.user;
    const { status, result } = await blogPostService.create(postInfo, userInfo);
    return res.status(status).json(result);
  }
  const { status, result } = validation;
  return res.status(status).json(result);
};

const getAll = async (_req, res) => {
  const { status, result } = await blogPostService.getAll();
  return res.status(status).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, result } = await blogPostService.getById(id);
  return res.status(status).json(result);
};

module.exports = {
  create,
  getAll,
  getById,
};
