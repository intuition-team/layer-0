const express = require('express');
const autoroutes = require('./internals/autoroutes');

const router = express.Router();

autoroutes(router);

const footerWords = [
  'дизайн',
  'мозг',
  'информация',
  'язык',
  'текст',
  'код',
  'документ',
  'метод',
  'пустота',
  'навсегда',
  'ответственность',
  'игра',
  'любовь',
  'свобода',
  'интерес',
  'забота',
  'синхронизация',
  'дизайнер',
  'ниндзя',
  'я',
];

router.get('/', (req, res) => {
  res.render('index', { footerWords });
});

module.exports = router;
