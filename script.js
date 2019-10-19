let APIKey = "PeGFlCF4kBtztvyQ03O0YnlPXotpT7U8";

// Response {}
//   docs [{}]
//     web_url
//     snippet
//     headline{}
//       main: "title of article"

$("#searchBtn").on("click", function(event) {
  event.preventDefault();
  let query = $("#inputSearch").val();
  let limit = $("#number").val();
  let dateStart = $("#dateStart");
  let dateEnd = $("#dateEnd");
  let queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=" +
    APIKey +
    "&q=" +
    query;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    let results = response.response.docs;
    console.log(results[0]);
    for (let i = 0; i < limit; i++) {
      let headline = results[i].headline.main;
      let articleURL = results[i].web_url;
      let snippet = results[i].snippet;

      let articleDiv = $("<div>");
      let headlineElem = $("<h2>");

      let aLink = $("<a>");
      aLink.attr("href", articleURL);
      aLink.text(headline);

      headlineElem.append(aLink);
      articleDiv.append(headlineElem);
      $("#article").append(articleDiv);
    }
  });
});
