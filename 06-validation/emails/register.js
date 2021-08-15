const dotenv = require('dotenv');

dotenv.config();

const { SENDGRID_API_EMAIL_FROM, BASE_URL } = process.env;

module.exports = function (email) {
  return {
    to: email,
    from: SENDGRID_API_EMAIL_FROM,
    subject: 'Аккаунт создан',
    html: `
      <h1>Добро пожаловать в наш магазин!</h1>
      <p>Вы успешно создали аккаунт c email - ${email}</p>
      <hr />
      <a href="${BASE_URL}">Магазин курсов</a>
    `,
  };
};
