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

$.getJSON("js/news.json", function(data) {
    processData(data);
});

function processData(data) {
  var articleItems = [];

  for (var i = 0; i < data.articles.length; i++) {
    var author = data.articles[i].author;
    var title = data.articles[i].title;
    var description = data.articles[i].description;
    var artUrl = data.articles[i].url;

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
    console.log(artUrl);
  }
}
