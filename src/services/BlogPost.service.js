const { BlogPost, PostCategory, sequelize } = require('../models');
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
    console.log(`At BlogPost.service create: ${err}`);
    return resultHandler('SERVER_ERROR', { message: 'Server error.' }, true);
  }
};

module.exports = {
  create,
};
