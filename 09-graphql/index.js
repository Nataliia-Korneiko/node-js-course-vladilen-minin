const express = require('express');
const graphqlHTTP = require('express-graphql');
const sequelize = require('./utils/database');
const schema = require('./graphql/schema');
const resolver = require('./graphql/resolver');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  })
);

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
