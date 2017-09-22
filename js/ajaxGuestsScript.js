var current_quote = 0;
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
    $("#presentation-text").html("Jquery 2"); 
    current_quote++;

}
