const express = require('express')
const app = express()

app.use('/', express.static('ui'));

app.listen(8080, function () {
  console.info('Listening the port 8080...');
});