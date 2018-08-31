var model = {};

var octopus = {

    initData: function() {
        octopus.getLocations();
    },

    getLocations: function() {
        $.getJSON("js/locations.json", function(locations) {
            view.renderLocations(locations);
            octopus.getclickedLocationData(locations);
        });
    },

    getclickedLocationData: function (locations) {
        $('button').click(function(e) {

            var clickedLocationIndexPos = $(e.target).index();

            octopus.setCurrentLocation(locations,clickedLocationIndexPos);

            });
    },

    setCurrentLocation: function(locations,index) {
        var clickedLocation = locations.locations[index].title;
        var clickedLocationCountryCode = locations.locations[index].country_code;
        octopus.getNews(clickedLocationCountryCode);
    },

    getNews: function(clickedLocationCountryCode) {
        //$.getJSON("js/news.json", function(news) {
                    //});
            //Actual method:
            $.ajax({
                  url:
                    `https://newsapi.org/v2/top-headlines?country=${clickedLocationCountryCode}&apiKey=a1bb66430a7249f9a4aee6be1d91aa99`,
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

                $('.location-tags').append('<button type="button" class="btn btn-primary m-1">' + place + ', ' + country +'</button>');
            }
    },

    renderNews: function(news) {
        $(".wrapper").empty();

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