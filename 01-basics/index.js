const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
    });

    if (req.url === '/') {
      fs.readFile(
        path.join(__dirname, 'views', 'index.html'),
        'utf-8',
        (error, content) => {
          if (error) {
            throw error;
          }

          res.end(content);
        }
      );
    } else if (req.url === '/about') {
      fs.readFile(
        path.join(__dirname, 'views', 'about.html'),
        'utf-8',
        (error, content) => {
          if (error) {
            throw error;
          }

          res.end(content);
        }
      );
    } else if (req.url === '/api/users') {
      res.writeHead(200, {
        'Content-Type': 'text/json',
      });

      const users = [
        { name: 'Matt', age: 37 },
        { name: 'Allison', age: 34 },
      ];

      res.end(JSON.stringify(users));
    }
  } else if (req.method === 'POST') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
    });

    const body = [];

    req.on('data', (data) => {
      body.push(Buffer.from(data));
    });

    req.on('end', () => {
      const message = body.toString().split('=')[1]; // [1] - индекс из title=Book, вернет Book

      res.end(`
        <h1>Ваше сообщение: ${message}</h1>
      `);
    });
  }
});

server.listen(3000, () => {
  console.log('Server is running...');
});
