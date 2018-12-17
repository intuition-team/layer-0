const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./router');
const config = require('./config');

const app = express();

// Parse JSON body for every request.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Parse cookies for every request.
app.use(cookieParser());

// Serve static files.
app.use('/static', express.static(config.static));

// Mount routes.
app.use('/', router);

// Start server listening.
app.listen(config.port, config.host, () => {

});
