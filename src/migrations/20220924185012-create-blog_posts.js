'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('blog_posts', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      published: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      updated: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        }
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    queryInterface.dropTable('blog_posts');
  }
};
