'use strict';

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comment', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Post', key: 'id' },
        onDelete: 'CASCADE',
      },
      authorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'User', key: 'id' },
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Comment');
  },
};