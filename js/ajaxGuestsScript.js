var quoteCounter = 0;
var lines;

$(document).ready(function(){
    $.ajax({url: "../js/quotes.txt", success: function(result){
      lines = result.split("\n");
      setInterval(ajaxHandler, 5000);
    }});
});

function ajaxHandler(){
  if(quoteCounter > 6){
    quoteCounter = 0;
  }
  $("#comment-text").html(lines[quoteCounter]); 
  $("#costumer-pic").attr("src",(lines[quoteCounter+1]));
  quoteCounter = quoteCounter + 2;
}
