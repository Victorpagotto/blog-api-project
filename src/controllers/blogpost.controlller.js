const validateAllPostInfo = require('../authentication/vallidatePostInfo');
const blogPostService = require('../services/blogpost.service');
const { resultHandler } = require('../utils/utils');

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

const update = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const postInfo = req.body;
  if (!postInfo.title || !postInfo.content) {
    const message = { message: 'Some required fields are missing' };
    const { status, result } = resultHandler('BAD_FORMAT', message, true);
    return res.status(status).json(result);
  }
  const { status, result } = await blogPostService.update(id, userId, postInfo);
  return res.status(status).json(result);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const { status, result } = await blogPostService.destroy(id, userId);
  return res.status(status).json(result);
};

const search = async (req, res) => {
  const { q } = req.query;
  if (q) {
    const { status, result } = await blogPostService.search(q);
    return res.status(status).json(result);
  }
  const { status, result } = await blogPostService.getAll();
  return res.status(status).json(result);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy,
  search,
};
