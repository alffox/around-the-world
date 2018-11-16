require('dotenv').config();

const http = require('http');
const https = require('https');
const query = require('querystring');
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.newsAPIKey);

const hostname = '127.0.0.1';
const port = 3000;
const clientHost = 'http://localhost:8000';

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
    } else if (req.url.startsWith("/weatherEndpoint?")) {
        /* As we don't use a specific API for weather, we just want to pass the
          query string starting with '?' to the weather api url, that's why we check
          for /weatherEndpoint? in the if clause, to be sure, that a query string is passed
          but we substring the remaining part starting with the '?'
        */
        var wheatherQueryString = req.url.substring("/weatherEndpoint".length);
        wheatherQueryString += "&appid=" + process.env.weatherAPIKey;

        var weatherUrl = "https://api.openweathermap.org/data/2.5/weather" + wheatherQueryString;
        https.get(weatherUrl, (resp) => {
            let rawData = '';
            resp.on('data', (chunk) => {
                rawData += chunk;
            });
            resp.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.setHeader('Access-Control-Allow-Origin', clientHost);
                    res.end(JSON.stringify(parsedData));
                } catch (e) {
                    console.error(e.message);
                }
            });
        }).on('error', function(e) {
            console.log(e.message);
        });
    } else if (req.url.startsWith("/webcamEndpoint?countryCode=")) {
        var queryParams = query.parse(req.url.substring("/webcamEndpoint?".length));

        if (queryParams['countryCode'] === "ma" || "cn" || "in") {
            var api = '/webcams/list/country=' + queryParams['countryCode'] + '/orderby=random?show=webcams%3Aimage%2Clocation&amp;lang=en';
        } else {
            var api = '/webcams/list/nearby=' + queryParams['lat'] + ',' + queryParams['lon'] + ',50/orderby=random/limit=1?show=webcams%3Aimage%2Clocation&amp;lang=en';
        }

        var options = {
            host: 'webcamstravel.p.mashape.com',
            port: 443,
            path: api,
            method: 'GET',
            headers: {
                "X-Mashape-Key": process.env.webCamAPIKey,
                "X-Mashape-Host": "webcamstravel.p.mashape.com"
            }
        };

        https.get(options, (resp) => {
            let rawData = '';
            resp.on('data', (chunk) => {
                rawData += chunk;
            });
            resp.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.setHeader('Access-Control-Allow-Origin', clientHost);
                    res.end(JSON.stringify(parsedData));

                    console.log(JSON.stringify(parsedData));
                } catch (e) {
                    console.error(e.message);
                }
            });
        }).on('error', function(e) {
            console.log(e.message);
        });
    } else if (req.url.startsWith("/picturesEndpoint?")) {

        var picturesQueryString = req.url.substring("/picturesEndpoint".length);
        picturesQueryString += "&client_id=" + process.env.unsplashAPIKey;

        var picturesUrl = "https://api.unsplash.com/search/photos" + picturesQueryString;

        https.get(picturesUrl, (resp) => {
            let rawData = '';
            resp.on('data', (chunk) => {
                rawData += chunk;
            });
            resp.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.setHeader('Access-Control-Allow-Origin', clientHost);
                    res.end(JSON.stringify(parsedData));
                } catch (e) {
                    console.error(e.message);
                }
            });
        }).on('error', function(e) {
            console.log(e.message);
        });
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});