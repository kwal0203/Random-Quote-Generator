$(document).ready(function() {
  
  $("#getQuote").on("click", function() {    
    
    $.ajax({
      type: "GET",
      headers: { "X-Mashape-Key": "SMC1ERPbNrmshhWmzXWUR7smhCAYp1OodSDjsnDUpGk2ufKjXZ" },
      dataType: "JSON",
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
      success: processJSON
    });
    
    function processJSON(json) {
      $("#quote").html(json.quote);
      $("#author").html("&mdash;" + json.author);
      newColor();
      updateHref(json);
    }

    function newColor() {      
      var color = ["blue", "red", "green", "purple", "yellow"];     
      var randomNumber = Math.floor(Math.random() * color.length);
      var selectedColor = color[randomNumber];
      
      $("body, button.btn-primary").animate( { backgroundColor: selectedColor }, "slow");
      $("p#quote, p#author").animate( { color: selectedColor }, "slow");
    }
    
    function updateHref (json) {
      var quoteText = "https://twitter.com/intent/tweet?text=" + json.quote;
      $("#twitter").attr("href", quoteText);
    }
  }); 
});