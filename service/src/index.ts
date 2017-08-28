const express = require('express')
const app = express()

app.use('/ui', express.static('ui'));

app.get('/', function (req: any, res: any) {
  res.send('Hello World!')
});

app.listen(8080, function () {
  console.info('Listening the port 8080...');
});