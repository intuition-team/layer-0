const express = require('express');

const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('ok');
});

module.exports = router;
