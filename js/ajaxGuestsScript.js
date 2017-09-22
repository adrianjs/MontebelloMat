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
    console.log(items);
    console.log(items[quoteCounter]);
    $("#comment-text").html(items[quoteCounter]); 
    $("#costumer-pic").attr("src",(items[quoteCounter+1]));
    quoteCounter = quoteCounter + 2;
}
