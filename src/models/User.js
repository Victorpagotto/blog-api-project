module.exports = (seq, dt) => {
  const User = seq.define('User', {
    id: {
      type: dt.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    displayName: {
      type: dt.STRING,
      allowNull: false,
    },
    email: {
      allowNull: false,
      type: dt.STRING,
    },
    password: {
      allowNull: false,
      type: dt.STRING,
    },
    image: {
      type: dt.STRING,
    }
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  })

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      as: 'BlogPosts',
      onDelete: 'CASCADE',
    });
  };
  return User;
};