require('dotenv').config();

const http = require('http');
const https = require('https');
const query = require('querystring');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.newsAPIKey);


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
      if (req.url.startsWith("/newsEndpoint?q=")) {
        newsapi.v2.everything({
            q: req.url.substring("/newsEndpoint?q=".length),
            sortBy: 'popularity',
        }).then(response => {
            console.log(response);
            try {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
                res.end(JSON.stringify(response));
            } catch (e) {
                console.error(e.message);
            }
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});