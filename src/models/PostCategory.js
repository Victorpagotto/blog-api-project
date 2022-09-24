module.exports = (seq, dt) => {
  const PostCategory = seq.define('PostCategory', {
    postId: {
      type: dt.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    categoryId: {
      type: dt.INTEGER,
      primaryKey: true,
      allowNull: false,
    }
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
  };

  return PostCategory;
};