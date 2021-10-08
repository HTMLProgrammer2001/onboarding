import { QueryInterface } from 'sequelize';

export = {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.createTable('Translates', {
      key: {
        type: Sequelize.STRING,
      },
      languageId: {
        type: Sequelize.NUMBER,
      },
      value: {
        type: Sequelize.STRING,
      },
    });
  },

  down: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.dropTable('Translates');
  },
};
