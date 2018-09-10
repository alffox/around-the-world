var model = {};

var octopus = {

    initData: function() {
        octopus.getLocations();
    },

    getLocations: function() {
        $.getJSON("js/locations.json", function(locations) {
            view.renderLocations(locations);
            octopus.setCurrentLocation(locations, 0);
            octopus.getButtonsLocationData(locations);
            octopus.getDropdownLocationData(locations);
        });
    },

    getButtonsLocationData: function(locations) {

        var checks = document.querySelectorAll('.btn');

        checks.forEach(function(check){
          check.addEventListener('click', checkIndex);
        })

        function checkIndex(event){
            var clickedLocationIndexPos = Array.from(checks).indexOf(event.target);
            octopus.setCurrentLocation(locations, clickedLocationIndexPos);
        }

    },

    getDropdownLocationData: function(locations) {

        var checks = document.querySelectorAll('.dropdown-item');

        checks.forEach(function(check){
          check.addEventListener('click', checkIndex);
        })

        function checkIndex(event){
            var clickedLocationIndexPos = Array.from(checks).indexOf(event.target);
            octopus.setCurrentLocation(locations, clickedLocationIndexPos);
        }

    },

    setCurrentLocation: function(locations, index) {
        var clickedLocation = locations.locations[index].title;
        var clickedLocationCountryCode = locations.locations[index].country_code;
        var clickedLocationCountry = locations.locations[index].country;
        var clickedLocationLat = locations.locations[index].location.lat;
        var clickedLocationLon = locations.locations[index].location.lon;

        octopus.getNews(clickedLocationCountryCode);
        octopus.getWeather(clickedLocationCountryCode, clickedLocationLat,clickedLocationLon);
        octopus.getWebCam(clickedLocationLat,clickedLocationLon);
        octopus.getMap(clickedLocationLat,clickedLocationLon, clickedLocation);
        octopus.getWiki(clickedLocationCountry);
        octopus.getPictures(clickedLocationCountry);
    },

    getNews: function(clickedLocationCountryCode) {
        //$.getJSON("js/news.json", function(news) {
        //});
        //Actual method:
        $.ajax({
            url: `https://newsapi.org/v2/top-headlines?country=${clickedLocationCountryCode}&apiKey=a1bb66430a7249f9a4aee6be1d91aa99`,
            method: "GET",
            error: function() {
                console.log("there was an error");
            },
            success: function(news) {
                view.renderNews(news);
            }
        });
    },

    getWeather: function(clickedLocationCountryCode, clickedLocationLat,clickedLocationLon) {

        if (clickedLocationCountryCode === "us") {
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?lat=${clickedLocationLat}&lon=${clickedLocationLon}&appid=${weatherAPIKey}&units=imperial`,
            method: "GET",
            error: function() {
                console.log("there was an error");
            },
            success: function(weather) {
                view.renderWeather(weather);
            }
        });
        }
        else {
            $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?lat=${clickedLocationLat}&lon=${clickedLocationLon}&appid=${weatherAPIKey}&units=metric`,
            method: "GET",
            error: function() {
                console.log("there was an error");
            },
            success: function(weather) {
                view.renderWeather(weather);
            }
        });
        }
    },

    getWebCam: function(clickedLocationLat,clickedLocationLon) {

            var api = `https://webcamstravel.p.mashape.com/webcams/list/nearby=${clickedLocationLat},${clickedLocationLon},50/limit=1?show=webcams%3Aimage%2Clocation&amp;lang=en`;

            $.ajax({
              headers: {
                "X-Mashape-Key": webCamAPIKey,
                "X-Mashape-Host": "webcamstravel.p.mashape.com"
              },
              url: api,
              success: function(webcam) {
                view.renderWebCam(webcam);
              }
            });
    },

    getMap: function(clickedLocationLat,clickedLocationLon, clickedLocation) {
            var currentLatLng = {lat: clickedLocationLat,lng: clickedLocationLon};

            var map = new google.maps.Map(document.getElementById('map'), {
            center: currentLatLng,
            disableDefaultUI: true,
            zoom: 4,
            gestureHandling: 'greedy'
            });

            var marker = new google.maps.Marker({
              position: currentLatLng,
              map: map,
              title: clickedLocation
            });

            },

    getWiki: function(clickedLocationCountry) {

            $.ajax({
            url: `https://en.wikipedia.org/api/rest_v1/page/summary/${clickedLocationCountry}`,
            method: "GET",
            error: function() {
                console.log("there was an error");
            },
            success: function(wiki) {
                view.renderWiki(wiki);
            }
        });
    },

    getPictures: function(clickedLocationCountry) {
            $.ajax({
            url: `https://api.unsplash.com/search/photos?client_id=${unsplashAPIKey}&query=${clickedLocationCountry}`,//client-id=Access Key
            method: "GET",
            error: function() {
                console.log("there was an error");
            },
            success: function(pictures) {
                //view.renderPictures(pictures);
            }
            });
        }

};

var view = {

    renderLocations: function(locations) {

        for (var i = 0; i < locations.locations.length; i++) {
            var place = locations.locations[i].title;
            var country = locations.locations[i].country;

            $('.location-tags').append('<button type="button" class="btn btn-primary m-1">' + place + ', ' + country + '</button>');

            if (locations.locations[i].continent === "Americas") {
            $('#americas').append('<a class="dropdown-item">' + place + ', ' + country + '</a>');
                }
            else if (locations.locations[i].continent === "Europe") {
            $('#europe').append('<a class="dropdown-item" href="#">' + place + ', ' + country + '</a>');
                }
            else if (locations.locations[i].continent === "Africa") {
            $('#africa').append('<a class="dropdown-item" href="#">' + place + ', ' + country + '</a>');
                }
            else if (locations.locations[i].continent === "Asia-Pacific") {
            $('#asia-pacific').append('<a class="dropdown-item" href="#">' + place + ', ' + country + '</a>');
                }
            }
    },


    renderNews: function(news) {
        var $attribution = $('<p class="top">Free news API for Developers</p><h1>Powered by <a href="https://newsapi.org/">News API</a></h1>');
        $(".wrapper").empty().append($attribution);

        for (var i = 0; i < 10; i++) {
            var author = news.articles[i].author;
            var title = news.articles[i].title;
            var description = news.articles[i].description;
            var artUrl = news.articles[i].url;

            var $author = $('<div class="author">Author: ' + author + "</div >");
            var $title = $("<a href=" + artUrl + '><div class="title">' + title + "</div ></a>");
            var $description = $("<a href=" + artUrl + '><div class="description">' + description + "</div ></a>");

            $(".wrapper").append($author, $title, $description);
            //console.log(artUrl);
        }
    },

    renderWeather: function(weather) {

        $(".weather").empty();

            var place = weather.name;
            var temperature = weather.main.temp;
            var weatherdescription = weather.weather[0].main;
            var iconKey = weather.weather[0].icon;
            var iconURL = 'http://openweathermap.org/img/w/' + iconKey + '.png'

            $(".weather").append("<p>" + place + "</p>", "<p>" + temperature + "</p>", "<p>" + weatherdescription + "</p>", "<img src=" + iconURL + ">");
    },

    renderWebCam: function(webcam) {
        $(".webcam").empty();

        var webCamImageURL = webcam.result.webcams[0].image.current.preview;

        $(".webcam").append('<img class="img-fluid" src="' + webCamImageURL + '">');
    },

    renderWiki: function(wiki) {
        $(".wiki").empty();

        var wikiTitle = wiki.title;
        var wikiExtract = wiki.extract;
        var wikiUrl = wiki.content_urls.mobile.page;


        $(".wiki").append("<p>" + wikiTitle + "</p>", "<p>" + wikiExtract + "</p>", "<a href=" + wikiUrl +">Find more ...</a>");

    },

    renderPictures: function(pictures) {



        $(".card-columns").empty();

        for (var i = 0; i < 10; i++) {

            var imgURL = pictures.results[i].urls.regular;

            $(".card-columns").append('<div class="card"><img class="card-img-top img-fluid" src=' + imgURL + ' alt="placeholder alt text"><div class="card-block"><h4 class="card-title">Card title</h4><p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p><p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p></div></div>');
    }
}

};

octopus.initData();