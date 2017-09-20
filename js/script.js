function parallax() {
    var scrolled = $(window).scrollTop();
    console.log("hello");
    console.log(scrolled);
    console.log(-(scrolled * 1.2));
    $('#monte').css('top', -(scrolled * 1.2) + 'px');
}

$(window).scroll(function(e) {
    parallax();
});