//Parallax effect (obviously)
function parallax() {
    var scrolled = $(window).scrollTop();
    //console.log("hello");
    //console.log(scrolled);
    //console.log(-(scrolled * 1.2));
    $('#monte').css('top', -(scrolled * 1.2) + 'px');
}

$(window).scroll(function(e) {
    parallax();
});

//Show and hide navbar
$(document).ready(function(){
    $("#navpic").click(function(){
        $("#flex-nav").toggle();
    });
});


let width = $(window).width(); 


$(window).resize(function() {
    width = $(window).width();
    //console.log("sjekker");
    checkWidth()
});


function checkWidth(){
	if (width >= 650) {
		$("#flex-nav").css('display','flex');
	}
	else {
		$("#flex-nav").css('display','none');
	}
}