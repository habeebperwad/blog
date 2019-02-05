function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


let url = "/res/quotes.json";
let quotes = [];

function loadQuotes(quotesIndex) {

      let q = quotes[quotesIndex]
      $(".curly-quotes").text(q.t);
      let wurl = "https://en.wikipedia.org/wiki/";
      if(q.w===true)
          wurl += q.a.replace(/ /gi, "_");
      else
          wurl += q.w;
      $(".quote-by").html("&nbsp;―&nbsp;" + q.a.replace(/ /gi, "&nbsp;"));
      $(".quote-by").attr("href", wurl);

}

$.ajax({
  dataType: "json",
  url: url,
  success: function (data) {
      let max = data.length;
      let quotesIndex = getRandomInt(max);
      quotes = data;
      loadQuotes(quotesIndex);
  }
});
