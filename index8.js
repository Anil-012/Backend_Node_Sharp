//This is the final submit on git for assignment  name Request / Response
const http = require('http');

const server = http.createServer((req, res) => {

  const url = req.url;

  res.setHeader('Content-Type', 'text/plain');

  if (url === '/home') {
    res.end('Welcome home');
  } else if (url === '/about') {
    res.end('Welcome to About Us page');
  } else if (url === '/node') {
    res.end('Welcome to my Node.js project');
  }
  else {
    res.statusCode = 404;
    res.end('Welcome to my Node Js project');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
