const { resultHandler } = require('../utils/utils');
const categoryService = require('../services/category.service');

const validateFields = (title, content) => !title || !content;

const validateCategories = async (categories) => {
  const categoryList = await categoryService.getAll().then((res) => res.result);
  return categories.map((category) => {
    if (categoryList.some((categoryDb) => categoryDb.id === category)) {
      return category;
    }
    return undefined;
  }).filter((category) => category);
};

const validateAllPostInfo = async (info) => {
  let message;
  if (validateFields(info.title, info.content)) {
    message = { message: 'Some required fields are missing' };
    return resultHandler('BAD_FORMAT', message, true);
  }
  const filteredCategories = await validateCategories(info.categoryIds);
  if (filteredCategories.length <= 0) {
    message = { message: '"categoryIds" not found' };
    return resultHandler('BAD_FORMAT', message, true);
  }
  const result = { ...info, categoryIds: filteredCategories };
  return result;
};

module.exports = validateAllPostInfo;