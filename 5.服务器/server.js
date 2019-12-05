//引入
var  express = require('express');

// var BodyParser = require('body-parser');

//应用对象
var  app = express();

//使用内置中间件去解析post请求中以urlencoded形式编码的参数
// app.use(BodyParser.urlencoded({extended:true}));

//静态资源
// app.use(express.static(__dirname + '/public'));

app.get('/test',(req,res)=>{

    console.log(req.query);

    res.send('只有不怕死的人才配活着。在自称善意的之时，即存恶意。');
});



//监听
app.listen(80,()=>{
    console.log('listen start..');
});
