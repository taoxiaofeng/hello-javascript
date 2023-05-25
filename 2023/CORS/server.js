var express = require('express');

// 90端口的服务 将当前目录作为http服务
var app = express();
app.use(express.static(__dirname));
app.listen(90);

// 91端口的服务
var app2 = express();

// 1、修改响应头解决跨域问题
// app2.get("/", function(req, res) {
//   // 增加响应头解决跨域问题
//   res.header('Access-Control-Allow-Origin', '*');
//   res.send("你好");
// });

// 2、使用jsonp解决跨域问题
app2.get("/", function(req, res) {
  var funcname = req.query.callback;
  res.send(funcname + "({name:'张三'})");
});
app2.listen(91);