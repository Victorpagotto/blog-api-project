module.exports = (seq, dt) => {
  const BlogPost = seq.define('BlogPost', {
    id: {
      type: dt.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      allowNull: false,
      type: dt.STRING,
    },
    content: {
      allowNull: false,
      type: dt.STRING,
    },
    published: {
      type: dt.DATE,
      allowNull: false,
    },
    updated: {
      type: dt.DATE,
      allowNull: false,
    },
    userId: {
      type: dt.INTEGER,
      allowNull: false,
    }
  },
  {
    underscored: true,
    tableName: 'blog_posts',
    createdAt: 'published',
    updatedAt: 'updated',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return BlogPost;
};