$(document).ready(function () {

    // 1.FOOTER SLIDER START

    $('.footer__slider').slick({
        infinite: false,
        slidesToShow: 7.2,
        slidesToScroll: 1,
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

    $('.header__mobile-burger').on(clickEventType, { classes: '.header__mobile-menu, .-opened, .main', }, openElem);
    $('.header__mobile-main-list li > div, .header__mobile-you-btn').on(clickEventType, { classes: '.header__mobile-submenu', siblingsElem: true }, openElem);
    $('.header__back-btn').on(clickEventType, { classes: '.header__mobile-submenu', closes: true }, openElem);
    // 2.MOBILE MENU APPEARANCE END

});