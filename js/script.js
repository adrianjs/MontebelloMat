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
