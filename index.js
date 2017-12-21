// main starting point of the application
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const router = require('./router');

//App setup
const app = express();
app.use(morgan('combined')); //login framwork 
//  body-parser可以用多個  像 14行就是 解析 x-www-form-urlencoded用的bodyParser
//  不寫14行，這個express server就沒辦法接  x-www-form-urlencoded用的bodyParser型態的request,
//  req.body.requestParameterName....   body會變undefined
//  而且 urlencoded的bodyParser還必須設定在 json的bodyParser之前
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json({type:'*/*'})); 
 
 router(app);   // build the router, body-parser的所有設定都必須在這行之前完成

// server setup
const PORT = process.env.PORT || 3090;

const server = http.createServer(app);
server.listen(PORT,()=>{ 
        console.log(`server has start up on port :${PORT}`);
    });

// app.listen(PORT,()=>{
//     console.log(`server has start up on port :${PORT}`);
// });    

app.post('/',(req,res,next)=>{
        console.log('theName :',req.body.name);  
        res.send('you are pretty good');
    });