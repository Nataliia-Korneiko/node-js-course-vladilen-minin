const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
  res.render('index', {
    title: 'Главная страница',
    isHome: true,
  });
});

module.exports = router;
