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
    $.each(items.items, function(i , item){
      $("#presentation-text").html(item); 
    })
    current_quote++;

}
