var express = require('express');
var app = express();


app.set('view engine', 'ejs'); //use ejs file without extention
app.use(express.static('public'));

app.get('/',function(req,res){

    res.redirect('/home');
});

app.get('/home',function(req,res){

    res.render('home',{title:'Haneen'});
});


app.listen(9070,(req,res)=>{

    console.log('server is running');
});