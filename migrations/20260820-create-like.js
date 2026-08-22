'use strict';

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Like', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Post', key: 'id' },
        onDelete: 'CASCADE',
      },
      userId: {
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

    // Prevents the same user from liking the same post twice
    await queryInterface.addConstraint('Like', {
      fields: ['postId', 'userId'],
      type: 'unique',
      name: 'unique_post_user_like',
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Like');
  },
};