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

    }

    /**
     * Код ниже предотвращает одновременное считываение touchstart и click.
     * Дает возможность назначать именнованую функцию на события без конфликта между событиями.
     * В противном случае назначаемый класс "-opened" добавляется и сразу же удаляется.
     * 
     */

    var clickEventType = (($(document).ontouchstart !== null) ? 'click' : 'touchstart');

    $('.header__mobile-burger-wrapper').on(clickEventType, { classes: '.header__mobile-menu, .-opened, body, .header__mobile-burger', }, openElem);
    $('.header__mobile-main-list li > div, .header__mobile-you-btn').on(clickEventType, { classes: '.header__mobile-submenu', siblingsElem: true }, openElem);
    $('.header__back-btn').on(clickEventType, { classes: '.header__mobile-submenu', closes: true }, openElem);

    // 2.1.NOT A HEADER CLICK = CLOSE START

    if (
        $('.-opened')
    ) {
        $('body').on(clickEventType, function (e) {
            if (
                $('.header__mobile-menu').has(e.target).length === 0 &&
                $('.header__mobile-burger-wrapper').has(e.target).length === 0
            ) {
                $('.-opened').removeClass('-opened');
            }
        });
    }



    // 2.1.NOT A HEADER CLICK = CLOSE END

    // 2.MOBILE MENU APPEARANCE END

    // 3.PAGES SLIDER START

    /**
     * Приведенный ниже код изменить для классов с помощью  slice(1)
     */

    // 3.1.CHANGE SLIDES START (HOVER)

    function openTubs(e) {
        e.preventDefault();
        let type = e.data.type;

        if (
            type == 'hover'
        ) {
            let tubID = '.' + $(this).attr('id');
            $('.-active').removeClass('-active');

            $(this).addClass('-active')

            $(tubID).addClass('-active');

            return false;
        } else if (
            type == 'click'
        ) {
            $('.circle__wrapper.-active .circle__border-mask').addClass('-animated');
        }

    }


    $('a.pages-slider__tub').on('mouseover', { type: 'hover' }, openTubs);

    // 3.1.CHANGE SLIDES END (HOVER)

    // 3.2.CHANGE PAGE START (CLICK)

    $('a.pages-slider__tub').on(clickEventType, { type: 'click' }, openTubs);

    // 3.2.CHANGE PAGE END

    // 3.PAGES SLIDER END

    // 4.ANIMATION FOR HOME PAGE START

    const animItems = document.querySelectorAll('.lazyload');

    if (animItems.length > 0) {

        window.addEventListener('scroll', animOnScroll);

        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (
                    animItemHeight > window.innerHeight
                ) {
                    animItemPoint = window.innerHeight / animStart;
                }

                if (
                    (pageYOffset > animItemOffset - animItemPoint) &&
                    pageYOffset < (animItemOffset + animItemHeight)
                ) {
                    animItem.classList.add('-visible');
                } else {
                    animItem.classList.remove('-visible')
                }
            }
        }

        setTimeout(() => {
            animOnScroll();
        }, 300);


    }

    // 4.ANIMATION FOR HOME PAGE END

    // 5.CROSS-BROWSER ELEM POSITION START

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    // 5.CROSS-BROWSER ELEM POSITION END

});