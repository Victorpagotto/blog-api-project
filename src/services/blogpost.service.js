const { BlogPost, PostCategory, User, Category, sequelize } = require('../models');

const { resultHandler } = require('../utils/utils');

const create = async (postInfo, userInfo) => {
  const postLoad = { title: postInfo.title, content: postInfo.content, userId: userInfo.id };
  try {
    return await sequelize.transaction(async (trs) => {
      const info = await BlogPost.create(postLoad, { transaction: trs });
      if (info) {
        const postCategoryLoad = postInfo.categoryIds.map((category) => (
          { categoryId: category, postId: info.dataValues.id }
        ));
        await PostCategory.bulkCreate(postCategoryLoad, { transaction: trs });
        return resultHandler('OK_CREATED', info.dataValues, false);
      }
      return resultHandler('SERVER_ERROR', { message: 'Server error.' }, true);
    });
  } catch (err) {
    console.log(err);
    return resultHandler('SERVER_ERROR', { message: 'Server error.' }, true);
  }
};

const getAll = async () => {
  const info = await BlogPost
    .findAll(
      { include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }] },
    );
  if (info) {
    const formatInfo = info.map((position) => position.dataValues);
    return resultHandler('OK_FOUND', formatInfo, false);
  }
  return resultHandler('SERVER_ERROR', { message: 'Server error.' }, true);
};

module.exports = {
  create,
  getAll,
};
