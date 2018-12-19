const express=require('express');
const http=require('http');
const bodyParser=require('body-parser');
const morgon=require('morgan');
const app=express();
const router=require('./router');
const mongoose=require('mongoose');
//db setup
mongoose.connect('mongodb://localhost:reena_auth/reena');


//app setup
app.use(morgon('combined'));
app.use(bodyParser.json({type:'*/*'}))
router(app);

//server setup
const port=process.env.PORT||3000;
const server=http.createServer(app);
server.listen(port);
console.log('server is listening',port);
