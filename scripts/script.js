$(document).ready(function () {

    // 1.FOOTER SLIDER START

    $('.footer__slider').slick({
        infinite: false,
        slidesToShow: 7.2,
        slidesToScroll: 1,
    });

    // 1.FOOTER SLIDER END

    // 2.CUSTOME CURSOR START

    // function onMousemoveNext(event) {
    //     elemCoor = $(this).offset();
    //     x = event.layerX;
    //     y = event.layerY;
    //     parent = $('.footer__slider-wrapper').offset();

    //     $('.slick-prev').css({
    //         'left': x,
    //         'top': y
    //     })


    // };

    // var next = document.getElementsByClassName("footer__slider-prev");
    // next[0].addEventListener("mousemove", onMousemoveNext, false);

    // var prev = document.getElementsByClassName("slick-prev");
    // prev[0].addEventListener("mousemove", onMousemoveNext, false);

    // $('.slick-arrow:not(.slick-disabled)').mouseover(function () {
    //     $('#cursor').addClass('big-arrow');
    // })

    // $('.slick-arrow').mouseout(function () {
    //     $('#cursor').removeClass('big-arrow');

    // })


});