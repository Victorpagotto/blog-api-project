const validateAllPostInfo = require('../authentication/vallidatePostInfo');
const blogPostService = require('../services/BlogPost.service');

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

module.exports = {
  create,
};
