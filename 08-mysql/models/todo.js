const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const todo = sequelize.define('Todo', {
  id: {
    primaryKey: true,
    autoIncrement: true, // для увеличения id
    allowNull: false, // запрещаем значение null
    type: Sequelize.INTEGER,
  },
  title: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  done: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
});

module.exports = todo;
