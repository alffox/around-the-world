var model = {};

var octopus = {

    initData: function() {
        octopus.getLocations();
        octopus.getNews();
    },

    getLocations: function() {
        $.getJSON("js/locations.json", function(locations) {
            view.renderLocations(locations);
        });
    },

    getNews: function() {
        $.getJSON("js/news.json", function(news) {
            view.renderNews(news);
            //Actual method:
            /*$.ajax({
                  url:
                    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${newsAPIKey}`,
                  method: "GET",
                  error: function() {
                    console.log("there was an error");
                  },
                  success: function(data) {
                    processData(data);
                  }
                });*/
        });
    }
};

var view = {

    renderLocations: function(locations) {

        for (var i = 0; i < locations.locations.length; i++) {
                var places = locations.locations[i].title;

                $('.location-tags').append('<span class="badge badge-secondary">' + places + '</span>');
        }
    },

    renderNews: function(news) {
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