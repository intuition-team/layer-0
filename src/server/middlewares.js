const notFound = () => (req, res) => {
  res.status(404);

  // Respond with html page.
  if (req.accepts('html')) {
    res.render('404');
  } else if (req.accepts('json')) {
    res.send({ error: 'Not found' });
  } else {
    res.type('txt').send('Not found');
  }
};

module.exports = {
  notFound,
};
