$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true,
        moveSlides: 1,
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 30,
        captions: true,
        pause: 3000,
        pager: true,
        pagerType: 'short',
        pagerSelector:"#id_pager",
        shrinkItems: true,
    });
});