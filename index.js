// main starting point of the application
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

//App setup
const app = express();

// server setup
const PORT = process.env.PORT || 3090;

const server = http.createServer(app);
server.listen(PORT,()=>{ 
        console.log(`server has start up on port :${PORT}`);
    });

// app.listen(PORT,()=>{
//     console.log(`server has start up on port :${PORT}`);
// });    