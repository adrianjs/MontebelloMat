var quoteCounter = 0;
var items = [];






$(document).ready(function(){
    $.ajax({url: "../js/quotes.txt", success: function(result){
      console.log(result);
      var lines = result.responseText.split("\n");
      console.log(lines);
      setInterval(ajaxHandler, 5000);
    }});
});

function ajaxHandler(){
  if(quoteCounter > 6){
    quoteCounter = 0;
  }
  $("#comment-text").html(items[quoteCounter]); 
  $("#costumer-pic").attr("src",(items[quoteCounter+1]));
  quoteCounter = quoteCounter + 2;
}
