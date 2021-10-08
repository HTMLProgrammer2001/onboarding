'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('languages', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isDefault: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });

    await queryInterface.createTable('translates', {
      key: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'translate_key_language',
      },
      languageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: 'translate_key_language',
        references: { model: 'languages', key: 'id' },
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('languages');
    await queryInterface.dropTable('translates');
  },
};
