'use strict';

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Post', 'coverImageUrl', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('Post', 'coverImageUrl');
  },
};