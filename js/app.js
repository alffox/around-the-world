var model = {};

var octopus = {

    initData: function() {
        octopus.getLocations();
    },

    getLocations: function() {
        $.getJSON("js/locations.json", function(locations) {
            view.renderLocations(locations);
            octopus.getButtonsLocationData(locations);
            octopus.getDrodownLocationData(locations);
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

    getDrodownLocationData: function(locations) {

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
        octopus.getNews(clickedLocationCountryCode);
    },

    getNews: function(clickedLocationCountryCode) {
        //$.getJSON("js/news.json", function(news) {
        //});
        //Actual method:
        $.ajax({
            url: `https://newsapi.org/v2/top-headlines?country=${clickedLocationCountryCode}&apiKey=a1bb66430a7249f9a4aee6be1d91aa99`,
            method: "GET",
            cache: false,
            error: function() {
                console.log("there was an error");
            },
            success: function(news) {
                view.renderNews(news);
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
            var $title = $(
                "<a href=" + artUrl + '><div class="title">' + title + "</div ></a>"
            );
            var $description = $(
                "<a href=" +
                artUrl +
                '><div class="description">' +
                description +
                "</div ></a>"
            );

            $(".wrapper").append($author, $title, $description);
            //console.log(artUrl);
        }
    }

};

octopus.initData();