let express = require('express');

let app = express();

app.listen(3002, _ => {
    console.log('OK!');
});

app.get('/list', (req, res) =>{
    let { callback = Function.prototype }  = req.query;
    let data = {
        code:0,
        message: '请求成功'
    };
    res.send(`${callback}(${JSON.stringify(data)})`);
})