'use strict';

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('User', 'age', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    await queryInterface.addColumn('User', 'gender', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('User', 'age');
    await queryInterface.removeColumn('User', 'gender');
  },
};