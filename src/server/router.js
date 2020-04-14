const express = require('express');
const autoroutes = require('./internals/autoroutes');

const router = express.Router();

autoroutes(router, {
  '^/index': '/',
});

module.exports = router;
