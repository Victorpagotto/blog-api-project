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
      as: 'categories',
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
      onDelete: 'CASCADE',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
      onDelete: 'CASCADE',
    });
  };

  return PostCategory;
};