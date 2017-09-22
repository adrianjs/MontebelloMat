var quoteCounter = 0;
var items = [];

$.getJSON( "js/quotes.json", function( data ) {
  $.each( data, function( key, val ) {
    items.push(val);
  });
});

$(document).ready(function(){
    setInterval(ajaxHandler, 5000);
});

function ajaxHandler(){
    if(quoteCounter > 6){
      quoteCounter = 0;
    }
    $("#comment-text").html(items[quoteCounter]); 
    $("#costumer-pic").attr("src",(items[quoteCounter+1]));
    quoteCounter = quoteCounter + 2;
}
