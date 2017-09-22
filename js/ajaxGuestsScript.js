var quoteCounter = 0;
var items = [];

$.getJSON( "js/quotes.json", function( data ) {
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
});

$(document).ready(function(){
    setInterval(ajaxHandler(), 2000);
});

function ajaxHandler(){
    console.log(items);
    var currentQuote  = items[quoteCounter];
    $("#presentation-text").html(currentQuote); 
    quoteCounter++;
}
