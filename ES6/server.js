const koa = require('koa');
const mysql = require('koa-mysql');

//创建数据库连接
let db = mysql.createPool({ host: 'localhost', user: 'root', password: '', database: '20170702' });

let server = new koa();

server.use(function* () {
    // this.body = 'abc';
    let data = yield db.query(`SELECT * FROM  user_table`);
    this.body = data;
})
server.listen(8080);