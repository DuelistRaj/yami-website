let root = document.documentElement;

jQuery(document).ready(function () {
    // Transition effect for navbar 
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 80) {
            $("header").addClass('solid');
            $("#mobile-nav").addClass('solid');
        } else {
            $("header").removeClass('solid');
            $("#mobile-nav").removeClass('solid');
        }
    });
});

jQuery(document).ready(function () {
    $("#m-nav-icon").click(function () {
        if ($("#mobile-nav").hasClass('mobile-hidden')) {
            $("#mobile-nav").removeClass('mobile-hidden');
        }
        else {
            $("#mobile-nav").addClass('mobile-hidden');
        }

    });
});

$(window).bind("resize", function () {
    if ($(this).width() > 720) {
        $('#mobile-nav').addClass('mobile-hidden');
    }
}).trigger('resize');

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("gallery-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 50000);
}