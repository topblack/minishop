const express = require('express')
const app = express()

app.use('/', express.static('ui'));

app.get('/wx', this.handleWeChatGet);

app.listen(8080, function () {
  console.info('Listening the port 8080...');
});

const handleWeChatGet = (req: any, res: any) => {
  res.send(req.params.echostr);
}