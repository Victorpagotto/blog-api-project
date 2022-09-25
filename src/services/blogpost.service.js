const { Op } = require('sequelize');
const { BlogPost, PostCategory, User, Category, sequelize } = require('../models');

const SERVER_ERROR = 'Server error.';

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
      return resultHandler('SERVER_ERROR', { message: SERVER_ERROR }, true);
    });
  } catch (err) {
    console.log(err);
    return resultHandler('SERVER_ERROR', { message: SERVER_ERROR }, true);
  }
};

const getAll = async () => {
  try {
    const info = await BlogPost
      .findAll(
        { include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } }] },
      );
  if (info) {
    const formatInfo = info.map((position) => position.dataValues);
    return resultHandler('OK_FOUND', formatInfo, false);
  }
  return resultHandler('SERVER_ERROR', { message: SERVER_ERROR }, true);
  } catch (error) {
    console.log(error);
    return resultHandler('SERVER_ERROR', { message: SERVER_ERROR }, true);
  }
};

const getById = async (id) => {
  try {
    const info = await BlogPost.findOne(
      { where: { id },
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }] },
    );
    if (info) return resultHandler('OK_FOUND', info.dataValues, false);
    return resultHandler('NOT_FOUND', { message: 'Post does not exist' }, true);
  } catch (error) {
    console.log(error);
    return resultHandler('SERVER_ERROR', { message: SERVER_ERROR }, true);
  }
};

const update = async (id, userId, postInfo) => {
  try {
    const blogPost = await BlogPost.findOne({ where: { id } });
    if (blogPost.userId === userId) {
      await BlogPost.update({ ...postInfo }, { where: { id } });
      const newBlogPost = await BlogPost.findOne(
        { where: { id },
          include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } }] },
      );
      return resultHandler('OK_FOUND', newBlogPost.dataValues, false);
    }
    return resultHandler('BAD_REQUEST', { message: 'Unauthorized user' }, true);
  } catch (error) {
    console.log(error);
    return resultHandler('SERVER_ERROR', { message: SERVER_ERROR }, true);
  }
};

const destroy = async (id, userId) => {
  try {
    const blogPost = await BlogPost.findOne({ where: { id } });
    if (!blogPost) return resultHandler('NOT_FOUND', { message: 'Post does not exist' }, true);
    if (blogPost.userId === userId) {
      await BlogPost.destroy({ where: { id } });
      return resultHandler('NOT_CONT', undefined, false);
    }
    return resultHandler('BAD_REQUEST', { message: 'Unauthorized user' }, true);
  } catch (error) {
    console.log(error);
    return resultHandler('SERVER_ERROR', { message: SERVER_ERROR }, true);
  }
};

const search = async (term) => {
  try {
    const info = await BlogPost.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${term}%` } },
          { content: { [Op.like]: `%${term}%` } },
        ],
      },
      include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });
    return resultHandler('OK_FOUND', info || [], false);
  } catch (error) {
    console.log(error);
    return resultHandler('SERVER_ERROR', { message: SERVER_ERROR }, true);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy,
  search,
};
