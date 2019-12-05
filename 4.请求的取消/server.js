//
const express = require('express');

const app = express();

//使用内置中间件去解析post请求中以urlencoded形式编码的参数
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname + '/public'));


app.get('/get_code',(req,res)=>{

    console.log('有人请求要验证码 , 人的一生会遭遇各种各样的事，其中有令人难以置信的事，也有不讲道理的事，但这就是生活。');

    //过2秒后给发送验证码
    setTimeout(()=>{
        let code = Math.floor(Math.random()*8999 + 1000);

        res.send(code.toString());
    },2000)
});

//
app.listen(8847,()=>{
    console.log('服务器启动了    listen....');
});