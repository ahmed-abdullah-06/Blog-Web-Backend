'use strict';

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Post', 'tags', {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
      defaultValue: [],
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('Post', 'tags');
  },
};