import {QueryInterface} from 'sequelize';

export = {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.createTable('Incorporations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      }
    });
  },

  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.dropTable('Incorporations');
  },
};
