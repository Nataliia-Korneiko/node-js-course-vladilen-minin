const { body } = require('express-validator');
const User = require('../models/user');

exports.registerValidators = [
  body('name')
    .isLength({ min: 2 })
    .withMessage('Имя должно быть минимум 2 символа')
    .trim(),
  body('email')
    .isEmail()
    .withMessage('Введите корректный email')
    .custom(async (value) => {
      try {
        const user = await User.findOne({ email: value });

        if (user) {
          return Promise.reject('Пользователь с таким email уже существует');
        }
      } catch (error) {
        console.log(error);
      }
    })
    .normalizeEmail(),
  body('password', 'Пароль должен быть минимум 8 символов')
    .isLength({ min: 8, max: 56 })
    .isAlphanumeric()
    .trim(),
  body('confirm')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Пароли должны совпадать');
      }
      return true;
    })
    .trim(),
];

exports.courseValidators = [
  body('title')
    .isLength({ min: 2 })
    .withMessage('Минимальная длинна названия 2 символа')
    .trim(),
  body('price').isNumeric().withMessage('Введите корректную цену'),
  body('img', 'Введите корректный URL картинки').isURL(),
];
