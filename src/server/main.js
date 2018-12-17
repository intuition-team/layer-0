const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const router = require('./router');
const config = require('./config');

// Initialize Express app.
const app = express();
const url = `http://${config.host}:${config.port}`;

// Watch file changes in development environment.
if (config.isDevelopment) {
  require('./utils/watch')(app);
}

// Use Pug as template engine.
app.set('views', config.views);
app.set('view engine', 'pug');

// Log every request.
app.use(morgan('combined'));

// Parse JSON body for every request.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Parse cookies for every request.
app.use(cookieParser());

// Serve static files.
app.use('/', express.static(config.static));

// Mount routes.
app.use('/', router);

// Start server listening.
app.listen(config.port, config.host, (error) => {
  if (error) throw error;

  console.log(`Listening at ${url}...`);
});
