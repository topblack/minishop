const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const wechat = require('wechat');

const wxconfig = {
  token: '',
  appid: 'wxd7ee1df72e23c66e',
  encodingAESKey: ''
};

const handleWeChatGet = (req: any, res: any) => {
  res.send(req.query.echostr);
}

const handleGetDetail = (req: any, res: any) => {
  res.sendFile(path.join(__dirname, '../ui/index.html'));
}

const handleGetPayment = (req: any, res: any) => {
  res.sendFile(path.join(__dirname, '../ui/index.html'));
}


app.use('/wechat', wechat(wxconfig, function (req: any, res: any, next: any) {
  console.log(req.weixin);
  let message = req.weixin;

  if (message.Content === '1') {
    res.replay('Hi~');
  }
}))

app.get('/wx', handleWeChatGet)
  .use('/', express.static('ui'))
  .get('/detail/:actId', handleGetDetail)
  .get('/payment/:actId', handleGetPayment);

app.listen(8080, function () {
  console.info('Listening the port 8080...');
});

