const express = require('express');
const sequelize = require('./utils/database');
const todoRoutes = require('./routes/todo');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/api/todo', todoRoutes);

async function start() {
  try {
    await sequelize.sync({
      // force: true, // удаляет таблицу date в db и обновляет значения (нужно сразу комментировать)
    });
    app.listen(PORT);
  } catch (error) {
    console.log(error);
  }
}

start();
