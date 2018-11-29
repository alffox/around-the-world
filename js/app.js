var restAPIServer = 'https://liferay-aroundtheworld.wedeploy.io';

var model = {

    "locations": [{
            "title": "Diamond Bar",
            "continent": "Americas",
            "country": "USA",
            "ISO_3166_1_alpha_2": "us",
            "state_name": "California",
            "state_code": "CA",
            "language": "en",
            "location": {
                "lat": 33.997762,
                "lon": -117.814565
            }
        },
        {
            "title": "Chicago",
            "continent": "Americas",
            "country": "USA",
            "ISO_3166_1_alpha_2": "us",
            "state_name": "Illinois",
            "state_code": "IL",
            "language": "en",
            "location": {
                "lat": 41.886448,
                "lon": -87.634293
            }
        },
        {
            "title": "Hamilton",
            "continent": "Americas",
            "country": "USA",
            "ISO_3166_1_alpha_2": "us",
            "state_name": "Ohio",
            "state_code": "OH",
            "language": "en",
            "location": {
                "lat": 39.399105,
                "lon": -84.56109
            }
        },
        {
            "title": "Raleigh",
            "continent": "Americas",
            "country": "USA",
            "ISO_3166_1_alpha_2": "us",
            "state_name": "North Carolina",
            "state_code": "NC",
            "language": "en",
            "location": {
                "lat": 35.802156,
                "lon": -78.708269
            }
        },
        {
            "title": "Markham",
            "continent": "Americas",
            "country": "Canada",
            "ISO_3166_1_alpha_2": "ca",
            "state_name": "Ontario",
            "state_code": "ON",
            "language": "en",
            "location": {
                "lat": 43.85006,
                "lon": -79.363188
            }
        },
        {
            "title": "Recife",
            "continent": "Americas",
            "country": "Brazil",
            "ISO_3166_1_alpha_2": "br",
            "state_name": "Pernambuco",
            "state_code": "PE",
            "language": "pt",
            "location": {
                "lat": -8.034983,
                "lon": -34.917969
            }
        },
        {
            "title": "São Paulo",
            "continent": "Americas",
            "country": "Brazil",
            "ISO_3166_1_alpha_2": "br",
            "state_name": "São Paulo",
            "state_code": "SP",
            "language": "pt",
            "location": {
                "lat": -23.557027,
                "lon": -46.663198
            }
        },
        {
            "title": "Eschborn",
            "continent": "Europe",
            "country": "Germany",
            "ISO_3166_1_alpha_2": "de",
            "state_name": "Hesse",
            "state_code": "",
            "language": "de",
            "location": {
                "lat": 50.135794,
                "lon": 8.571555
            }
        },
        {
            "title": "Madrid",
            "continent": "Europe",
            "country": "Spain",
            "ISO_3166_1_alpha_2": "es",
            "state_name": "Community of Madrid",
            "state_code": "",
            "language": "es",
            "location": {
                "lat": 40.476303,
                "lon": -3.685699
            }
        },
        {
            "title": "London",
            "continent": "Europe",
            "country": "United Kingdom",
            "ISO_3166_1_alpha_2": "gb",
            "state_name": "London",
            "state_code": "",
            "language": "en",
            "location": {
                "lat": 51.449215,
                "lon": -0.329519
            }
        },
        {
            "title": "Dublin",
            "continent": "Europe",
            "country": "Ireland",
            "ISO_3166_1_alpha_2": "ie",
            "state_name": "Leinster",
            "state_code": "",
            "language": "en",
            "location": {
                "lat": 53.338277,
                "lon": -6.242025
            }
        },
        {
            "title": "Concorezzo",
            "continent": "Europe",
            "country": "Italy",
            "ISO_3166_1_alpha_2": "it",
            "state_name": "Monza Brianza",
            "state_code": "MB",
            "language": "it",
            "location": {
                "lat": 45.596258,
                "lon": 9.325988
            }
        },
        {
            "title": "Budapest",
            "continent": "Europe",
            "country": "Hungary",
            "ISO_3166_1_alpha_2": "hu",
            "state_name": "Budapest",
            "state_code": "",
            "language": "hu",
            "location": {
                "lat": 47.553462,
                "lon": 19.078457
            }
        },
        {
            "title": "Paris",
            "continent": "Europe",
            "country": "France",
            "ISO_3166_1_alpha_2": "fr",
            "state_name": "Île-de-France",
            "state_code": "",
            "language": "fr",
            "location": {
                "lat": 48.873782,
                "lon": 2.335101
            }
        },
        {
            "title": "Leiden",
            "continent": "Europe",
            "country": "The Netherlands",
            "ISO_3166_1_alpha_2": "nl",
            "state_name": "South Holland",
            "state_code": "",
            "language": "nl",
            "location": {
                "lat": 52.160285,
                "lon": 4.512023
            }
        },
        {
            "title": "Casablanca",
            "continent": "Africa",
            "country": "Morocco",
            "ISO_3166_1_alpha_2": "ma",
            "state_name": "Casablanca-Settat",
            "state_code": "",
            "language": "ar",
            "location": {
                "lat": 33.5866,
                "lon": -7.632392
            }
        },
        {
            "title": "Dalian",
            "continent": "Asia-Pacific",
            "country": "China",
            "ISO_3166_1_alpha_2": "cn",
            "state_name": "Liaoning",
            "state_code": "",
            "language": "cn",
            "location": {
                "lat": 38.864052,
                "lon": 121.532561
            }
        },
        {
            "title": "Tokyo",
            "continent": "Asia-Pacific",
            "country": "Japan",
            "ISO_3166_1_alpha_2": "jp",
            "state_name": "",
            "state_code": "",
            "language": "jp",
            "location": {
                "lat": 35.647141,
                "lon": 139.715772
            }
        },
        {
            "title": "Bangalore",
            "continent": "Asia-Pacific",
            "country": "India",
            "ISO_3166_1_alpha_2": "in",
            "state_name": "Karnataka",
            "state_code": "KA",
            "language": "en",
            "location": {
                "lat": 13.027935,
                "lon": 77.632167
            }
        },
        {
            "title": "Sydney",
            "continent": "Asia-Pacific",
            "country": "Australia",
            "ISO_3166_1_alpha_2": "au",
            "state_name": "New South Wales",
            "state_code": "NSW",
            "language": "en",
            "location": {
                "lat": -33.874336,
                "lon": 151.209425
            }
        },
        {
            "title": "Singapore",
            "continent": "Asia-Pacific",
            "country": "Singapore",
            "ISO_3166_1_alpha_2": "sg",
            "state_name": "",
            "state_code": "",
            "language": "en",
            "location": {
                "lat": 1.304029,
                "lon": 103.834769
            }
        },
        {
            "title": "Dubai",
            "continent": "Asia-Pacific",
            "country": "United Arab Emirates",
            "ISO_3166_1_alpha_2": "ae",
            "state_name": "",
            "state_code": "",
            "language": "ar",
            "location": {
                "lat": 25.090228,
                "lon": 55.152997
            }
        }
    ]

};

var octopus = {

    initData: function() {
        octopus.getLocations();
        view.renderLocations(locations);
        octopus.setCurrentLocation(locations, 12);
        octopus.getButtonsLocationData(locations);
        octopus.getDropdownLocationData(locations);
    },

    getLocations: function() {
        return locations = model.locations;
    },

    getButtonsLocationData: function(locations) {

        var checks = document.querySelectorAll('.flag-top');

        checks.forEach(function(check) {
            check.addEventListener('click', checkIndex);
        });

        function checkIndex(event) {
            var clickedLocationIndexPos = Array.from(checks).indexOf(event.target);
            octopus.setCurrentLocation(locations, clickedLocationIndexPos);
        }

    },

    getDropdownLocationData: function(locations) {

        var checks = document.querySelectorAll('.dropdown-item');

        checks.forEach(function(check) {
            check.addEventListener('click', checkIndex);
        });

        function checkIndex(event) {
            var clickedLocationIndexPos = Array.from(checks).indexOf(event.target);
            octopus.setCurrentLocation(locations, clickedLocationIndexPos);
        }

    },

    setCurrentLocation: function(locations, index) {
        var clickedLocation = locations[index].title;
        var clickedLocationCountryCode = locations[index].ISO_3166_1_alpha_2;
        var clickedLocationCountry = locations[index].country;
        var clickedLocationStateName = locations[index].state_name;
        var clickedLocationLat = locations[index].location.lat;
        var clickedLocationLon = locations[index].location.lon;

        view.renderLocationNavbar(clickedLocation, clickedLocationCountry, clickedLocationCountryCode);

        octopus.getNews(clickedLocationCountry, clickedLocation);
        octopus.getWeather(clickedLocation, clickedLocationCountryCode, clickedLocationLat, clickedLocationLon);
        octopus.getWebCam(clickedLocationLat, clickedLocationLon, clickedLocationCountryCode);
        octopus.getWiki(clickedLocationCountry);
        octopus.getPictures(clickedLocationCountry);
        view.renderMap(clickedLocationLat, clickedLocationLon, clickedLocation);
    },

    getNews: function(clickedLocationCountry, clickedLocation) {
        var errorKey = '.news';
        $.ajax({
            url: `${restAPIServer}/newsEndpoint?q=${clickedLocationCountry}&sortBy=popularity`,
            method: "GET",
            error: function() {
                view.renderAPIError(errorKey);
            },
            success: function(news) {
                view.renderNews(news, clickedLocationCountry, clickedLocation);
            }
        });
    },

    getWeather: function(clickedLocation, clickedLocationCountryCode, clickedLocationLat, clickedLocationLon) {
        var errorKey = '.weather';
        $.ajax({
            url: `${restAPIServer}/weatherEndpoint?lat=${clickedLocationLat}&lon=${clickedLocationLon}&units=metric`,
            method: "GET",
            error: function() {
                view.renderAPIError(errorKey);
            },
            success: function(weather) {
                view.renderWeather(weather, clickedLocation);
            }
        });
    },

    getWebCam: function(clickedLocationLat, clickedLocationLon, clickedLocationCountryCode) {
        var errorKey = ".webcam";
        $.ajax({
            url: `${restAPIServer}/webcamEndpoint?countryCode=${clickedLocationCountryCode}&lat=${clickedLocationLat}&lon=${clickedLocationLon}`,
            method: "GET",
            error: function() {
                view.renderAPIError(errorKey);
            },
            success: function(webcam) {
                view.renderWebCam(webcam);
            }
        });
    },

    getWiki: function(clickedLocationCountry) {
        var errorKey = ".wiki";
        $.ajax({
            url: `https://en.wikipedia.org/api/rest_v1/page/summary/${clickedLocationCountry}`,
            method: "GET",
            error: function() {
                view.renderAPIError(errorKey);
            },
            success: function(wiki) {
                view.renderWiki(wiki);
            }
        });
    },

    getPictures: function(clickedLocationCountry) {
        var errorKey = ".pictures";
        var randomPageNumber = Math.floor(Math.random() * 20);

        $.ajax({
            url: `${restAPIServer}/picturesEndpoint?page=${randomPageNumber}&query=${clickedLocationCountry}`,
            method: "GET",
            error: function() {
                view.renderAPIError(errorKey);
            },
            success: function(pictures) {
                view.renderPictures(pictures);
            }
        });
    }

};

var view = {
    renderAPIError: function(errorKey) {
        $(errorKey).empty().append('<div class="alert alert-danger"><p>Sorry ! =(</p><p>There was an error while fetching the latest data</p></div>');
    },

    lazyLoad: function() {
        $(function() {
            $('.lazy').lazy();
        });
    },

    renderLocationNavbar: function(clickedLocation, clickedLocationCountry, clickedLocationCountryCode) {
        $('.navbar-brand').empty().append('<div class="' + clickedLocationCountryCode + ' flag-navbar mx-auto"></div><div>' + clickedLocation + ', ' + clickedLocationCountry + '</div>');
    },

    renderLocations: function(locations) {
        for (var i = 0; i < locations.length; i++) {

            var placeCountryCode = locations[i].ISO_3166_1_alpha_2;
            var place = locations[i].title;
            var country = locations[i].country;

            var buttonHTML = ('<button type="button" class="btn btn-info m-1 flag-top"><div class="' + placeCountryCode + ' flag-button mx-auto mr-3"></div>' + place + ', ' + country + '</button>');

            var dropdownHTML = ('<a class="dropdown-item"><div class="' + placeCountryCode + ' d-inline-block flag-dropdown"></div>' + place + ', ' + country + '</a>');

            $('.location-tags').append(buttonHTML);

            if (locations[i].continent === "Americas") {
                $('#americas').append(dropdownHTML);
            } else if (locations[i].continent === "Europe") {
                $('#europe').append(dropdownHTML);
            } else if (locations[i].continent === "Africa") {
                $('#africa').append(dropdownHTML);
            } else if (locations[i].continent === "Asia-Pacific") {
                $('#asia-pacific').append(dropdownHTML);
            }
        }
    },

    renderNews: function(news, clickedLocationCountry, clickedLocation) {
        $('.news-current-location').empty().append( clickedLocationCountry);
        $('.news').empty();

        for (var i = 0; i < 15; i++) {
            var newsPicture = news.articles[i].urlToImage;
            var newsTitle = news.articles[i].title;
            var newsUrl = news.articles[i].url;
            var newsSource = news.articles[i].source.name;

            if (newsPicture !== null) {
            var newsHTML = ('<ul class="list-group"><li class="list-group-item list-group-item-action active d-flex justify-content-between align-items-center mt-1 m-1"><img class="img-fluid img-thumbnail news-picture" src="' + newsPicture + '" alt="' + newsTitle + '"><a href="' + newsUrl + '" target="_blank" class="list-group-item list-group-item-action active">' + newsTitle + '</a><span class="badge badge-primary badge-pill">' + newsSource + '</span></li></ul>');
            } else {
            var newsHTML = ('<ul class="list-group"><li class="list-group-item list-group-item-action active d-flex justify-content-between align-items-center mt-1 mb-1"><a href="' + newsUrl + '" target="_blank" class="list-group-item list-group-item-action active">' + newsTitle + '</a><span class="badge badge-light badge-secondary">' + newsSource + '</span></li></ul>');
            }

            $('.news').append(newsHTML);
        }

    },

    renderWeather: function(weather, clickedLocation) {

        var temperature = Math.round(weather.main.temp);
        var weatherDescription = weather.weather[0].main;
        var iconKey = weather.weather[0].icon;
        var iconURL = 'https://openweathermap.org/img/w/' + iconKey + '.png';

        $(".weather").empty().append('<p>' + clickedLocation + '</p>', '<img class="weather-icon" src="' + iconURL + '">', '<p>' + temperature + " °C, " + weatherDescription + '</p>');

    },

    renderWebCam: function(webcam) {

        var webCamImageURL = webcam.result.webcams[0].image.current.preview;
        var webCamLocation = webcam.result.webcams[0].location.city + ", " + webcam.result.webcams[0].location.region + ", " + webcam.result.webcams[0].location.country;

        $(".webcam").empty().append('<img class="img-fluid img-thumbnail webcam-picture" src="' + webCamImageURL + '"><p><small class="font-italic"> ' + webCamLocation + ' </small></p>');
    },

    renderWiki: function(wiki) {

        $(".wiki");

        var wikiTitle = wiki.title;
        var wikiExtract = wiki.extract;
        var wikiUrl = wiki.content_urls.mobile.page;


        $(".wiki").empty().append("<p>" + wikiTitle + "</p>", "<p>" + wikiExtract + "</p>", "<a href=" + wikiUrl + ">Wikipedia ...</a>");

    },

    renderMap: function(clickedLocationLat, clickedLocationLon, clickedLocation) {

        //Prevent Gmaps API from loading Roboto font
        var head = document.getElementsByTagName( 'head' )[0];
        var insertBefore = head.insertBefore;
        head.insertBefore = function( newElement, referenceElement ) {

            if ( newElement.href && newElement.href.indexOf( 'https://fonts.googleapis.com/css?family=Roboto' ) === 0 ) {
                return;
            }

            insertBefore.call( head, newElement, referenceElement );
        };

        //Render map
        var currentLatLng = {
            lat: clickedLocationLat,
            lng: clickedLocationLon
        };

        var map = new google.maps.Map(document.getElementsByClassName('map')[0], {
            center: currentLatLng,
            disableDefaultUI: true,
            zoom: 5,
        });

        var marker = new google.maps.Marker({
            position: currentLatLng,
            map: map,
            title: clickedLocation
        });

    },

    renderPictures: function(pictures) {
        $(".pictures").empty();

        view.lazyLoad();

        for (var i = 0; i < 10; i++) {

            var pictureURL = pictures.results[i].urls.regular;
            var pictureAuthorUsername = "@" + pictures.results[i].user.username;
            var pictureAuthorURL = pictures.results[i].user.links.html;
            var pictureDescription = pictures.results[i].description;

            $(".pictures").append('<figure><div class="card text-center"><img class="card-img-top img-fluid lazy" data-src=' + pictureURL + ' alt="' + pictureDescription + '"><div class="card-block"><small class="text-muted"><figcaption><p>' + pictureDescription + '</p></figcaption>by <a href="' + pictureAuthorURL + '" target="_blank">' + pictureAuthorUsername + '</a> via <a href="https://unsplash.com/" target="_blank">Unsplash</a></small></p></div></div><figure>');
        }
    }

};

octopus.initData();