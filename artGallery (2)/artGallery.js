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