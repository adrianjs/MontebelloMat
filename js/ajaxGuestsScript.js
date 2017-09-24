var quoteCounter = 0;
var lines;

$(document).ready(function(){
  $.ajax({ 
    type: 'GET', 
    url: '../js/quotes.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
    $.each( data, function( key, val ) { 
      lines.push(val);
      ajaxHandler();
      setInterval(ajaxHandler, 15000);
    });
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
