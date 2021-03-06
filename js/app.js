var restAPIServer = "https://around-the-world-backend.herokuapp.com";

var model = {
  locations: [
    {
      title: "Diamond Bar",
      continent: "Americas",
      country: "USA",
      ISO_3166_1_alpha_2: "us",
      timezone_database_name: "America/Los_Angeles",
      state_name: "California",
      state_code: "CA",
      language: "en",
      location: {
        lat: 33.997762,
        lon: -117.814565
      }
    },
    {
      title: "Chicago",
      continent: "Americas",
      country: "USA",
      ISO_3166_1_alpha_2: "us",
      timezone_database_name: "America/Chicago",
      state_name: "Illinois",
      state_code: "IL",
      language: "en",
      location: {
        lat: 41.886448,
        lon: -87.634293
      }
    },
    {
      title: "Hamilton",
      continent: "Americas",
      country: "USA",
      ISO_3166_1_alpha_2: "us",
      timezone_database_name: "America/Chicago",
      state_name: "Ohio",
      state_code: "OH",
      language: "en",
      location: {
        lat: 39.399105,
        lon: -84.56109
      }
    },
    {
      title: "Raleigh",
      continent: "Americas",
      country: "USA",
      ISO_3166_1_alpha_2: "us",
      timezone_database_name: "America/Chicago",
      state_name: "North Carolina",
      state_code: "NC",
      language: "en",
      location: {
        lat: 35.802156,
        lon: -78.708269
      }
    },
    {
      title: "Markham",
      continent: "Americas",
      country: "Canada",
      ISO_3166_1_alpha_2: "ca",
      timezone_database_name: "America/Toronto",
      state_name: "Ontario",
      state_code: "ON",
      language: "en",
      location: {
        lat: 43.85006,
        lon: -79.363188
      }
    },
    {
      title: "Recife",
      continent: "Americas",
      country: "Brazil",
      ISO_3166_1_alpha_2: "br",
      timezone_database_name: "America/Recife",
      state_name: "Pernambuco",
      state_code: "PE",
      language: "pt",
      location: {
        lat: -8.034983,
        lon: -34.917969
      }
    },
    {
      title: "São Paulo",
      continent: "Americas",
      country: "Brazil",
      ISO_3166_1_alpha_2: "br",
      timezone_database_name: "America/Sao_Paulo",
      state_name: "São Paulo",
      state_code: "SP",
      language: "pt",
      location: {
        lat: -23.557027,
        lon: -46.663198
      }
    },
    {
      title: "Eschborn",
      continent: "Europe",
      country: "Germany",
      ISO_3166_1_alpha_2: "de",
      timezone_database_name: "Europe/Berlin",
      state_name: "Hesse",
      state_code: "",
      language: "de",
      location: {
        lat: 50.135794,
        lon: 8.571555
      }
    },
    {
      title: "Madrid",
      continent: "Europe",
      country: "Spain",
      ISO_3166_1_alpha_2: "es",
      timezone_database_name: "Europe/Madrid",
      state_name: "Community of Madrid",
      state_code: "",
      language: "es",
      location: {
        lat: 40.476303,
        lon: -3.685699
      }
    },
    {
      title: "London",
      continent: "Europe",
      country: "United Kingdom",
      ISO_3166_1_alpha_2: "gb",
      timezone_database_name: "Europe/London",
      state_name: "London",
      state_code: "",
      language: "en",
      location: {
        lat: 51.449215,
        lon: -0.329519
      }
    },
    {
      title: "Dublin",
      continent: "Europe",
      country: "Ireland",
      ISO_3166_1_alpha_2: "ie",
      timezone_database_name: "Europe/Dublin",
      state_name: "Leinster",
      state_code: "",
      language: "en",
      location: {
        lat: 53.338277,
        lon: -6.242025
      }
    },
    {
      title: "Concorezzo",
      continent: "Europe",
      country: "Italy",
      ISO_3166_1_alpha_2: "it",
      timezone_database_name: "Europe/Rome",
      state_name: "Monza Brianza",
      state_code: "MB",
      language: "it",
      location: {
        lat: 45.596258,
        lon: 9.325988
      }
    },
    {
      title: "Budapest",
      continent: "Europe",
      country: "Hungary",
      ISO_3166_1_alpha_2: "hu",
      timezone_database_name: "Europe/Budapest",
      state_name: "Budapest",
      state_code: "",
      language: "hu",
      location: {
        lat: 47.553462,
        lon: 19.078457
      }
    },
    {
      title: "Helsinki",
      continent: "Europe",
      country: "Finland",
      ISO_3166_1_alpha_2: "fi",
      timezone_database_name: "Europe/Helsinki",
      state_name: "",
      state_code: "",
      language: "fi",
      location: {
        lat: 60.169856,
        lon: 24.938379
      }
    },
    {
      title: "Paris",
      continent: "Europe",
      country: "France",
      ISO_3166_1_alpha_2: "fr",
      timezone_database_name: "Europe/Paris",
      state_name: "Île-de-France",
      state_code: "",
      language: "fr",
      location: {
        lat: 48.873782,
        lon: 2.335101
      }
    },
    {
      title: "Leiden",
      continent: "Europe",
      country: "The Netherlands",
      ISO_3166_1_alpha_2: "nl",
      timezone_database_name: "Europe/Amsterdam",
      state_name: "South Holland",
      state_code: "",
      language: "nl",
      location: {
        lat: 52.160285,
        lon: 4.512023
      }
    },
    {
      title: "Casablanca",
      continent: "Africa",
      country: "Morocco",
      ISO_3166_1_alpha_2: "ma",
      timezone_database_name: "Africa/Casablanca",
      state_name: "Casablanca-Settat",
      state_code: "",
      language: "ar",
      location: {
        lat: 33.5866,
        lon: -7.632392
      }
    },
    {
      title: "Dalian",
      continent: "Asia-Pacific",
      country: "China",
      ISO_3166_1_alpha_2: "cn",
      timezone_database_name: "Asia/Shanghai",
      state_name: "Liaoning",
      state_code: "",
      language: "cn",
      location: {
        lat: 38.864052,
        lon: 121.532561
      }
    },
    {
      title: "Tokyo",
      continent: "Asia-Pacific",
      country: "Japan",
      ISO_3166_1_alpha_2: "jp",
      timezone_database_name: "Asia/Tokyo",
      state_name: "",
      state_code: "",
      language: "jp",
      location: {
        lat: 35.647141,
        lon: 139.715772
      }
    },
    {
      title: "Bangalore",
      continent: "Asia-Pacific",
      country: "India",
      ISO_3166_1_alpha_2: "in",
      timezone_database_name: "Asia/Kolkata",
      state_name: "Karnataka",
      state_code: "KA",
      language: "en",
      location: {
        lat: 13.027935,
        lon: 77.632167
      }
    },
    {
      title: "Sydney",
      continent: "Asia-Pacific",
      country: "Australia",
      ISO_3166_1_alpha_2: "au",
      timezone_database_name: "Australia/Sydney",
      state_name: "New South Wales",
      state_code: "NSW",
      language: "en",
      location: {
        lat: -33.874336,
        lon: 151.209425
      }
    },
    {
      title: "Singapore",
      continent: "Asia-Pacific",
      country: "Singapore",
      ISO_3166_1_alpha_2: "sg",
      timezone_database_name: "Asia/Singapore",
      state_name: "",
      state_code: "",
      language: "en",
      location: {
        lat: 1.304029,
        lon: 103.834769
      }
    },
    {
      title: "Dubai",
      continent: "Asia-Pacific",
      country: "United Arab Emirates",
      ISO_3166_1_alpha_2: "ae",
      timezone_database_name: "Asia/Dubai",
      state_name: "",
      state_code: "",
      language: "ar",
      location: {
        lat: 25.090228,
        lon: 55.152997
      }
    }
  ]
};

var octopus = {
  initData: function() {
    octopus.getLocations();
    view.renderLocations(locations);
    octopus.setCurrentLocation(locations, 0);
    octopus.getButtonsLocationData(locations);
    octopus.getDropdownLocationData(locations);
  },

  getLocations: function() {
    return (locations = model.locations);
  },

  getButtonsLocationData: function(locations) {
    var checks = document.querySelectorAll(".flag-top");

    checks.forEach(function(check) {
      check.addEventListener("click", checkIndex);
    });

    function checkIndex(event) {
      var clickedLocationIndexPos = Array.from(checks).indexOf(event.target);
      octopus.setCurrentLocation(locations, clickedLocationIndexPos);
    }
  },

  getDropdownLocationData: function(locations) {
    var checks = document.querySelectorAll(".dropdown-item");

    checks.forEach(function(check) {
      check.addEventListener("click", checkIndex);
    });

    function checkIndex(event) {
      var clickedLocationIndexPos = Array.from(checks).indexOf(event.target);
      octopus.setCurrentLocation(locations, clickedLocationIndexPos);
    }
  },

  setCurrentLocation: function(locations, index) {
    var clickedLocation = locations[index].title;
    var clickedLocationCountryCode = locations[index].ISO_3166_1_alpha_2;
    var clickedLocationTimezone = locations[index].timezone_database_name;
    var clickedLocationCountry = locations[index].country;
    var clickedLocationStateName = locations[index].state_name;
    var clickedLocationLat = locations[index].location.lat;
    var clickedLocationLon = locations[index].location.lon;

    view.renderLocationNavbar(
      clickedLocation,
      clickedLocationCountry,
      clickedLocationCountryCode
    );

    octopus.getTimeDate(clickedLocationTimezone);
    octopus.getNews(clickedLocationCountry, clickedLocationCountryCode);
    octopus.getWeather(clickedLocation, clickedLocationLat, clickedLocationLon);
    octopus.getWeatherForecast(clickedLocationLat, clickedLocationLon);
    octopus.getWebCam(
      clickedLocationLat,
      clickedLocationLon,
      clickedLocationCountryCode
    );
    octopus.getWiki(clickedLocationCountry);
    octopus.getPictures(clickedLocationCountry);
    view.renderMap(clickedLocationLat, clickedLocationLon, clickedLocation);
  },

  getTimeDate: function(clickedLocationTimezone) {
    var DOMKey = ".timedate";

    $.ajax({
      url: `${restAPIServer}/TimeDateEndpoint?format=json&by=zone&zone=${clickedLocationTimezone}`,
      method: "GET",
      error: function() {
        view.renderAPIError(DOMKey);
      },
      success: function(timedate) {
        view.renderTimeDate(timedate);
      }
    });
  },

  getNews: function(clickedLocationCountry, clickedLocationCountryCode) {
    var DOMKey = ".news";
    view.cleanDOMContainer(DOMKey);

    var topRegionalNews = `${restAPIServer}/topHeadlinesEndpoint?pageSize=6&country=${clickedLocationCountryCode}`;
    var everythingEnglishNews = `${restAPIServer}/everythingNewsEndpoint?domains=nytimes.com,bbc.co.uk,reuters.com&excludeDomains=jpost.com&sortBy=popularity&pageSize=8&q=${clickedLocationCountry}`;
    var topTechNews = `${restAPIServer}/topHeadlinesEndpoint?category=technology&pageSize=4&country=${clickedLocationCountryCode}`;

    $.ajax({
      url: everythingEnglishNews,
      method: "GET",
      error: function() {
        view.renderAPIError(DOMKey);
      },
      success: function(news) {
        view.renderNews(
          news,
          clickedLocationCountry,
          clickedLocationCountryCode
        );
      }
    });

    var allTopNews = [topRegionalNews, topTechNews];

    for (var i = 0; i < allTopNews.length; i++) {
      $.ajax({
        url: allTopNews[i],
        method: "GET",
        error: function() {
          view.renderAPIError(DOMKey);
        },
        success: function(news) {
          view.renderNews(
            news,
            clickedLocationCountry,
            clickedLocationCountryCode
          );
        }
      });
    }
  },

  getWeather: function(
    clickedLocation,
    clickedLocationLat,
    clickedLocationLon
  ) {
    var DOMKey = ".weather";
    view.cleanDOMContainer(DOMKey);

    $.ajax({
      url: `${restAPIServer}/weatherEndpoint?lat=${clickedLocationLat}&lon=${clickedLocationLon}&units=metric`,
      method: "GET",
      error: function() {
        view.renderAPIError(DOMKey);
      },
      success: function(weather) {
        view.renderWeather(weather, clickedLocation);
      }
    });
  },

  getWeatherForecast: function(clickedLocationLat, clickedLocationLon) {
    var DOMKey = ".weather-forecast";
    view.cleanDOMContainer(DOMKey);

    $.ajax({
      url: `${restAPIServer}/forecastEndpoint?lat=${clickedLocationLat}&lon=${clickedLocationLon}&units=metric`,
      method: "GET",
      error: function() {
        view.renderAPIError(DOMKey);
      },
      success: function(forecast) {
        forecast = forecast.list.filter(item =>
          item.dt_txt.includes("12:00:00")
        );
        view.renderWeatherForecast(forecast);
      }
    });
  },

  getWebCam: function(
    clickedLocationLat,
    clickedLocationLon,
    clickedLocationCountryCode
  ) {
    var DOMKey = $(".webcam");

    $.ajax({
      url: `${restAPIServer}/webcamEndpoint?countryCode=${clickedLocationCountryCode}&lat=${clickedLocationLat}&lon=${clickedLocationLon}`,
      method: "GET",
      error: function() {
        view.renderAPIError(DOMKey);
      },
      success: function(webcam) {
        view.renderWebCam(webcam);
      }
    });
  },

  getWiki: function(clickedLocationCountry) {
    var DOMKey = $(".wiki");
    view.cleanDOMContainer(DOMKey);

    $.ajax({
      url: `https://en.wikipedia.org/api/rest_v1/page/summary/${clickedLocationCountry}`,
      method: "GET",
      error: function() {
        view.renderAPIError(DOMKey);
      },
      success: function(wiki) {
        view.renderWiki(wiki);
      }
    });
  },

  getPictures: function(clickedLocationCountry) {
    var DOMKey = $(".pictures");
    view.cleanDOMContainer(DOMKey);

    var randomPageNumber = Math.floor(Math.random() * 20);

    $.ajax({
      url: `${restAPIServer}/picturesEndpoint?page=${randomPageNumber}&query=${clickedLocationCountry}`,
      method: "GET",
      error: function() {
        view.renderAPIError(DOMKey);
      },
      success: function(pictures) {
        view.renderPictures(pictures);
      }
    });
  }
};

var view = {
  renderAPIError: function(errorKey) {
    $(DOMKey).append(
      '<div class="alert alert-danger"><p>Sorry ! =(</p><p>There was an error while fetching the latest data</p></div>'
    );
  },

  cleanDOMContainer: function(DOMKey) {
    $(DOMKey).empty();
  },

  lazyLoad: function() {
    $(function() {
      $(".lazy").lazy();
    });
  },

  renderLocationNavbar: function(
    clickedLocation,
    clickedLocationCountry,
    clickedLocationCountryCode
  ) {
    $(".navbar-brand")
      .empty()
      .append(
        '<div class="' +
          clickedLocationCountryCode +
          ' flag-navbar mx-auto"></div><div>' +
          clickedLocation +
          ", " +
          clickedLocationCountry +
          '</div><div class="timedate text-center font-italic"></div>'
      );
  },

  renderTimeDate: function(timeDate) {
    var date = timeDate.formatted.substr(0, timeDate.formatted.indexOf(" "));
    var time = timeDate.formatted.substr(timeDate.formatted.indexOf(" ") + 1);

    $(".date")
      .empty()
      .append(date);
    $(".time")
      .empty()
      .append(time);
  },

  renderLocations: function(locations) {
    for (var i = 0; i < locations.length; i++) {
      var placeCountryCode = locations[i].ISO_3166_1_alpha_2;
      var place = locations[i].title;
      var country = locations[i].country;

      var buttonHTML =
        '<button type="button" class="btn btn-info m-1 flag-top"><div class="' +
        placeCountryCode +
        ' flag-button mx-auto mr-3"></div>' +
        place +
        ", " +
        country +
        "</button>";

      var dropdownHTML =
        '<a class="dropdown-item"><div class="' +
        placeCountryCode +
        ' d-inline-block flag-dropdown"></div>' +
        place +
        ", " +
        country +
        "</a>";

      $(".location-tags").append(buttonHTML);

      if (locations[i].continent === "Americas") {
        $("#americas").append(dropdownHTML);
      } else if (locations[i].continent === "Europe") {
        $("#europe").append(dropdownHTML);
      } else if (locations[i].continent === "Africa") {
        $("#africa").append(dropdownHTML);
      } else if (locations[i].continent === "Asia-Pacific") {
        $("#asia-pacific").append(dropdownHTML);
      }
    }
  },

  renderNews: function(
    news,
    clickedLocationCountry,
    clickedLocationCountryCode
  ) {
    view.lazyLoad();

    for (var i = 0; i < news.articles.length; i++) {
      var newsPicture = news.articles[i].urlToImage;
      var newsTitle = news.articles[i].title;
      var newsUrl = news.articles[i].url;
      var newsSource = news.articles[i].source.name;

      if (newsPicture === null || newsPicture.includes("http://")) {
        var newsHTML =
          '<ul class="list-group"><li class="list-group-item list-group-item-action active d-flex justify-content-between align-items-center mt-1"><a href="' +
          newsUrl +
          '" target="_blank" class="list-group-item list-group-item-action active">' +
          newsTitle +
          '</a><span class="badge badge-light badge-primary d-none d-xl-block">' +
          newsSource +
          "</span></li></ul>";
      } else {
        var newsHTML =
          '<ul class="list-group"><li class="list-group-item list-group-item-action active d-flex justify-content-between align-items-center mt-1"><img class="lazy img-fluid img-thumbnail news-picture" data-src="' +
          newsPicture +
          '" alt="' +
          newsTitle +
          '"><a href="' +
          newsUrl +
          '" target="_blank" class="list-group-item list-group-item-action active">' +
          newsTitle +
          '</a><span class="badge badge-light badge-primary d-none d-xl-block">' +
          newsSource +
          "</span></li></ul>";
      }

      $(".news").append(newsHTML);
    }
  },

  renderWeather: function(weather, clickedLocation) {
    var temperature = Math.round(weather.main.temp);
    var weatherDescription = weather.weather[0].main;
    var iconKey = weather.weather[0].icon;
    var iconURL = "https://openweathermap.org/img/w/" + iconKey + ".png";

    $(".weather").prepend(
      "<p>" + clickedLocation + "</p>",
      '<img class="weather-icon-main" src="' + iconURL + '">',
      "<p>" + temperature + " °C, " + weatherDescription + "</p><hr>"
    );
  },

  renderWeatherForecast: function(forecast) {
    $(".weather").append('<div class="row forecast text-center">');

    for (var i = 0; i < forecast.length; i++) {
      $(".forecast").append(
        '<div class="col-xs-2 next-days"><span class="font-weight-bold">' +
          forecast[i].dt_txt.substring(10, 8) +
          "</span><br>" +
          '<img class="weather-icon-next-days" src="https://openweathermap.org/img/w/' +
          forecast[i].weather[0].icon +
          ".png" +
          '"><br>' +
          Math.round(forecast[i].main.temp) +
          " °C</div>"
      );
    }
  },

  renderWebCam: function(webcam) {
    $(".carousel-indicators").empty();
    $(".carousel-inner").empty();

    for (var i = 0; i < webcam.result.webcams.length; i++) {
      var webCamImageURL = webcam.result.webcams[i].image.current.preview;
      var webCamAltText = webcam.result.webcams[i].title;
      var webCamLocation =
        webcam.result.webcams[i].location.city +
        ", " +
        webcam.result.webcams[i].location.region +
        ", " +
        webcam.result.webcams[i].location.country;

      $(".carousel-indicators").append(
        '<li data-target="#carouselExampleIndicators" data-slide-to=' +
          i +
          ' class="active"></li>'
      );

      $(".carousel-inner").append(
        '<div class="carousel-item"><img class="d-block w-100 img-fluid img-thumbnail webcam-picture" src="' +
          webCamImageURL +
          '" alt="' +
          webCamAltText +
          '"><p><small class="font-italic"> ' +
          webCamLocation +
          " </small></p></div>"
      );
    }
    $(".carousel-item:first-child").addClass("active");
  },

  renderWiki: function(wiki) {
    $(".wiki");

    var wikiTitle = wiki.title;
    var wikiExtract = wiki.extract;
    var wikiUrl = wiki.content_urls.mobile.page;

    $(".wiki").append(
      "<p>" + wikiTitle + "</p>",
      "<p>" + wikiExtract + "</p>",
      '<a href="' + wikiUrl + '" target="_blank">Wikipedia ...</a>'
    );
  },

  renderMap: function(clickedLocationLat, clickedLocationLon, clickedLocation) {
    //Prevent Gmaps API from loading Roboto font
    var head = document.getElementsByTagName("head")[0];
    var insertBefore = head.insertBefore;
    head.insertBefore = function(newElement, referenceElement) {
      if (
        newElement.href &&
        newElement.href.indexOf(
          "https://fonts.googleapis.com/css?family=Roboto"
        ) === 0
      ) {
        return;
      }

      insertBefore.call(head, newElement, referenceElement);
    };

    //Render map
    var currentLatLng = {
      lat: clickedLocationLat,
      lng: clickedLocationLon
    };

    var map = new google.maps.Map(document.getElementsByClassName("map")[0], {
      center: currentLatLng,
      disableDefaultUI: true,
      zoom: 5
    });

    var marker = new google.maps.Marker({
      position: currentLatLng,
      map: map,
      title: clickedLocation
    });
  },

  renderPictures: function(pictures) {
    view.lazyLoad();

    for (var i = 0; i < 10; i++) {
      var pictureURL = pictures.results[i].urls.regular;
      var pictureAuthorUsername = "@" + pictures.results[i].user.username;
      var pictureAuthorURL = pictures.results[i].user.links.html;
      var pictureDescription = pictures.results[i].description;

      $(".pictures").append(
        '<div class="card text-center"><img class="card-img-top img-fluid lazy" data-src=' +
          pictureURL +
          ' alt="' +
          pictureDescription +
          '"><div class="card-block"><small class="text-muted"><p>' +
          pictureDescription +
          '</p>by <a href="' +
          pictureAuthorURL +
          '" target="_blank">' +
          pictureAuthorUsername +
          '</a> via <a href="https://unsplash.com/" target="_blank">Unsplash</a></small></p></div></div>'
      );
    }
  }
};

octopus.initData();
