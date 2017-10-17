const express = require('express')
const app = express()

const handleWeChatGet = (req: any, res: any) => {
  res.send(req.params.echostr);
}

app.get('/wx', handleWeChatGet).use('/', express.static('ui'));

app.listen(8080, function () {
  console.info('Listening the port 8080...');
});

