//引入
var  express = require('express');

//应用对象
var  app = express();

//使用内置中间件去解析post请求中以urlencoded形式编码的参数
app.use(express.urlencoded({extended:true}));

//静态资源
app.use(express.static(__dirname + '/public'));

app.get('/test',(req,res)=>{
    console.log(req.query);
    res.send('get只有不怕死的人才配活着。');
});


app.post('/test_post',(req,res)=>{

    console.log(req.body);
    res.send('post蓝曦臣，我这一生害人无数，杀父杀兄杀妻杀子杀师杀友，天下的坏事我什么没做过！......可我独独没有想过要害你');
});



//监听
app.listen(8847,()=>{
    console.log('listen start..');
});


