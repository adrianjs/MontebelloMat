//Parallax effect (obviously)
function parallax() {
    var scrolled = $(window).scrollTop();
<<<<<<< HEAD
=======
    //console.log("hello");
    //console.log(scrolled);
    //console.log(-(scrolled * 1.2));
>>>>>>> 79954a51aed685ff63fb8cee88a15a84d4f4383a
    $('#monte').css('top', -(scrolled * 1.2) + 'px');
}

$(window).scroll(function(e) {
    parallax();
});

<<<<<<< HEAD

//Show and hide navbar
$(document).ready(function(){
    $("#navpic").click(function(){
        $("#flex-nav").toggle();
    });
});


let width = $(window).width(); 


$(window).resize(function() {
    width = $(window).width();
    console.log("sjekker");
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
=======
$(document).ready(function(){
    /**AUTOMATIC SLIDESHOW**/
    var slideIndex = 0;
    carousel();
    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1} 
            x[slideIndex-1].style.display = "flex"; 
        setTimeout(carousel, 6000); // Change image every 2 seconds
    }
});
>>>>>>> 79954a51aed685ff63fb8cee88a15a84d4f4383a
