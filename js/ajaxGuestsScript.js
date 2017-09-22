var quoteCounter = 0;
var items = [];

$.getJSON( "js/quotes.json", function( data ) {
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
});

$(document).ready(function(){
    setInterval(ajaxHandler, 5000);
});

function ajaxHandler(){
    console.log(items);
    $("#presentation-text").html(items[quoteCounter]); 
    $("#costumer-pic").src(items[quoteCounter+1]);
    quoteCounter = quoteCounter + 2;
}
