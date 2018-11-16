require('dotenv').config();

const http = require('http');
const https = require('https');
const query = require('querystring');
const NewsAPI = require('newsapi');

const newsapi = process.env.newsAPIKey;

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});