const { Router } = require('express');
const Course = require('../models/course');

const router = Router();

function mapCartItems(cart) {
  return cart.items.map((item) => ({
    ...item.courseId._doc,
    id: item.courseId.id,
    count: item.count,
  }));
}

function computePrice(courses) {
  return courses.reduce((total, course) => {
    return (total += course.price * course.count);
  }, 0);
}

router.post('/add', async (req, res) => {
  const course = await Course.findById(req.body.id);

  await req.user.addToCart(course);
  res.redirect('/cart');
});

router.get('/', async (req, res) => {
  const user = await req.user.populate('cart.items.courseId').execPopulate();

  // const courses = user.cart.items.map();
  const courses = mapCartItems(user.cart);

  res.render('cart', {
    title: 'Корзина',
    isCart: true,
    courses: courses,
    price: computePrice(courses),
  });
});

router.delete('/remove/:id', async (req, res) => {
  await req.user.removeFromCart(req.params.id);

  const user = await req.user.populate('cart.items.courseId').execPopulate();
  const courses = mapCartItems(user.cart);
  const cart = {
    courses,
    price: computePrice(courses),
  };

  res.status(200).json(cart);
});

module.exports = router;
