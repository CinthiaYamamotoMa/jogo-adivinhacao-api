'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('ranking', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      total_time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      attempts: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      round: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ranking');
  }
};
