// this function allows the bxslider to display the gallery of images to the user.
//it displays one slide at a time automatically loop indefinitely with a 3 second pause on
//each picture. the height of slider changes to match the height of the picture
$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true,
        moveSlides: 1,
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 1000,
        slideMargin: 100,
        captions: true,
        pause: 3000,
        pager: true,
        pagerType: 'short',
        pagerSelector:"#id_pager",
        infiniteLoop: true,
        adaptiveHeight: true,

    });
});