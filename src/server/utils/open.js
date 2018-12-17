const opn = require('opn');
const { host, port } = require('../config');

setTimeout(() => opn(`http://${host}:${port}`), 1000);
