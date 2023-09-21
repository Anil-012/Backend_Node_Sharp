// creating server 

 const http = require("http");

 http.createServer((req,resp)=>{
  resp.write("hello this is anil");
  resp.end();
 }).listen(4000);