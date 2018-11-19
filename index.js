require('dotenv').config();

const https = require('https');
const query = require('querystring');
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.newsAPIKey);
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 80;

app.get('/newsEndpoint*', function(req, res) {
    newsapi.v2.everything({
          q: req.url.substring("/newsEndpoint?q=".length),
          sortBy: 'popularity',
        }).then(response => {
          try {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response));
          } catch (e) {
            console.error(e.message);
          }
        });
});

app.get('/weatherEndpoint*', function(req, res) {
      var wheatherQueryString = req.url.substring("/weatherEndpoint".length);
      wheatherQueryString += "&appid=" += process.env.weatherAPIKey;

      var weatherUrl = "https://api.openweathermap.org/data/2.5/weather" + wheatherQueryString;
      https.get(weatherUrl, (resp) =>{
        let rawData = '';
        resp.on('data', (chunk) => { rawData += chunk; });
        resp.on('end', () => {
          try {
           const parsedData = JSON.parse(rawData);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(parsedData));

          } catch (e) {
            console.error(e.message);
          }
        });
      }).on('error', function (e) {
          console.log(e.message);
      });
});

app.get('/picturesEndpoint*', function(req, res) {
      var picturesQueryString = req.url.substring("/picturesEndpoint".length);
      picturesQueryString += "&client_id=" += process.env.unsplashAPIKey;

      var pictureUrl = "https://api.unsplash.com/search/photos" + picturesQueryString;
      https.get(pictureUrl, (resp) =>{
        let rawData = '';
        resp.on('data', (chunk) => { rawData += chunk; });
        resp.on('end', () => {
          try {
           const parsedData = JSON.parse(rawData);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(parsedData));

          } catch (e) {
            console.error(e.message);
          }
        });
      }).on('error', function (e) {
          console.log(e.message);
      });
});

app.get('/webcamEndpoint*', function(req, res) {
    var queryParams = query.parse(req.url.substring("/webcamEndpoint?".length));

    if (queryParams['countryCode'] === "ma" || "cn" || "in") {
        var api = '/webcams/list/country=' + queryParams['countryCode'] +'/orderby=random?show=webcams%3Aimage%2Clocation&amp;lang=en';
    } else {
        var api = '/webcams/list/nearby=' + queryParams['lat'] + ',' + queryParams['lon']+ ',50/orderby=random/limit=1?show=webcams%3Aimage%2Clocation&amp;lang=en';
    }

      var options = {
        host : 'webcamstravel.p.mashape.com',
        port : 443,
        path : api,
        method : 'GET',
        headers: {
             "X-Mashape-Key": process.env.webCamAPIKey,
             "X-Mashape-Host": "webcamstravel.p.mashape.com"
        }
      };

      https.get(options, (resp) =>{
        let rawData = '';
        resp.on('data', (chunk) => { rawData += chunk; });
        resp.on('end', () => {
          try {
           const parsedData = JSON.parse(rawData);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(parsedData));

          } catch (e) {
            console.error(e.message);
          }
        });
      }).on('error', function (e) {
          console.log(e.message);
      });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});