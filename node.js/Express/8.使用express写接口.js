const express = require('express');

const app = express();

const router =require('./apiRouter.js');
//* 注册路由到app上
app.use('/api', router);


app.listen(80, () => {
  console.log('Server is running at http://127.0.0.1');
});
