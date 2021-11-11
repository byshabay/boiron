$(document).ready(function () {

    // 1.FOOTER SLIDER START

    $('.footer__slider').slick({
        infinite: false,
        slidesToShow: 1.8,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 7.2
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 6.2
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 4.2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3.2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2.2
                }
            }
        ],

        mobileFirst: true
    });

    // 1.FOOTER SLIDER END

    // 2.MOBILE MENU APPEARANCE START

    function openElem(e) {

        let classes = e.data.classes;
        let siblingsElem = e.data.siblingsElem;
        let closes = e.data.closes;
        if (siblingsElem) {
            $(this).siblings(classes).toggleClass('-opened');
        } else if (
            closes
        ) {
            $(classes).removeClass('-opened');
        } else {
            $(classes).toggleClass('-opened');
        }

        console.log($(this).siblings('.header__mobile-submenu'));

    }

    /**
     * Код ниже предотвращает одновременное считываение touchstart и click.
     * Дает возможность назначать именнованую функцию на события без конфликта между событиями.
     * В противном случае назначаемый класс "-opened" добавляется и сразу же удаляется.
     * 
     */

    var clickEventType = (($(document).ontouchstart !== null) ? 'click' : 'touchstart');

    $('.header__mobile-burger').on(clickEventType, { classes: '.header__mobile-menu, .-opened, .main, .header__mobile-burger', }, openElem);
    $('.header__mobile-main-list li > div, .header__mobile-you-btn').on(clickEventType, { classes: '.header__mobile-submenu', siblingsElem: true }, openElem);
    $('.header__back-btn').on(clickEventType, { classes: '.header__mobile-submenu', closes: true }, openElem);

    // 2.MOBILE MENU APPEARANCE END

});