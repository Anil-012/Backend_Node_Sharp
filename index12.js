const http = require('http');
const fs = require('fs');

// Create the message.txt file if it doesn't exist
if (!fs.existsSync('message.txt')) {
  fs.writeFileSync('message.txt', '', 'utf8');
}

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Chat App</title></head>');
    res.write('<body>');
    
    // Read existing messages from the file and display them
    const messages = fs.readFileSync('message.txt', 'utf8').split('\n').filter(Boolean);
    res.write('<h1>Chat Messages</h1>');
    res.write('<ul>');
    messages.forEach((message) => {
      res.write(`<li>${message}</li>`);
    });
    res.write('</ul>');
    
    res.write('<form action="/message" method="POST">');
    res.write('<input type="text" name="message"><button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString(); // Append the data to the body variable
    });

    req.on('end', () => {
      const message = body.split('=')[1];

      // Append the new message to the file
      fs.appendFileSync('message.txt', message + '\n', 'utf8', (err) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end();
        } else {
          // Redirect to the homepage after adding the message
          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
        }
      });
    });
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>CreatedByAnil</title></head>');
    res.write('<body><h1>Hello from my Node.js</h1></body>');
    res.write('</html>');
    res.end();
  }
});

server.listen(4000);
