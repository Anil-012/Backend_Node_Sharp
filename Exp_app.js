// using command npm install --save express
const http = require('http');

const express = require("express");

const app = express();

app.use((req,res,next)=>{
  console.log('In the middleware!');
  next();
});  //using middleware

app.use((req,res,next)=>{
  console.log('by using next in middleware in first console!');
});  //using middleware
const server = http.createServer(app);

server.listen(4000);