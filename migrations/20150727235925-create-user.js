'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        type: Sequelize.STRING(20),
        primaryKey: true,
        unique: true,
        comment: '手機號碼',
      },
      passward: Sequelize.STRING(20),
      name: Sequelize.STRING(20),
      type: {
        type: Sequelize.INTEGER(1),
        comment: '0:使用者, 1:超級管理者, 2:管理者, 3:停用'
      },
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  }
};