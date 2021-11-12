<!-- 1.HEADER START -->
<div class="home">
    <?php include('inc/header.php') ?>
</div>

<!-- 1.HEADER END -->

<!-- 2.MAIN START -->

<main class="main">

    <!-- 2.1.PAGES SLIDER START -->

    <section class="pages-slider">
        <div class="pages-slider__logo container">
            <img src="<?= $ROOT_URL . 'images/logo.png' ?>">
        </div>

        <div class="pages-slider__wrapper container">

            <!-- TUBS START -->

            <div class="pages-slider__tubs">
                <a class=" pages-slider__tub " href="#pages-slider__1">
                    ПРИВЕТСТВИЕ ОТ ВАЛЕРИ
                    <br>ПУАНСО
                </a>

                <a class="pages-slider__tub" href="#pages-slider__2">
                    ЛАБОРАТОРИЯ БУАРОН
                </a>
                <a class="pages-slider__tub" href="#pages-slider__3">
                    ЛЕЧение БЕЗ ВРЕДА
                </a>
                <a class="pages-slider__tub -active" href="#pages-slider__4">
                    НАШИ ПРОДУКТЫ
                </a>
                <a class="pages-slider__tub" href="#pages-slider__5">
                    МОЕ <br> ЕЖЕДНЕВНОЕ ЗДОРОВЬЕ
                </a>
            </div>

            <!-- TUBS END -->

            <!-- SLIDER CONTENT START -->

            <div class="pages-slider__content">
                <div id="pages-slider__1" class="pages-slider__content-slide ">
                    1
                </div>
                <div id="pages-slider__2" class="pages-slider__content-slide ">
                    2
                </div>
                <div id="pages-slider__3" class="pages-slider__content-slide ">
                    3
                </div>
                <div id="pages-slider__4" class="pages-slider__content-slide -active">
                    <div class="pages-slider__h1">
                        НАШЕ ВИДЕНИЕ ЗДОРОВЬЯ
                    </div>
                    <p class="pages-slider__p">
                        «Осознавая, что пациенты во всем мире ищут безопасное лечение, мы делаем безопасные и качественные лекарства доступными для всех благодаря нашему уникальному опыту в гомеопатии».
                        <br>
                        Валери Лоренц-Пуансо, управляющий директор
                    </p>
                    <a href="<?= $ROOT_URL . 'templates/product.php' ?>" class="common-white-btn">
                        Страница продуктов
                    </a>
                </div>

                <div id="pages-slider__5" class="pages-slider__content-slide ">
                    5
                </div>
            </div>

            <!-- SLIDER CONTENT END -->

            <!-- CIRCLE START -->

            <div class="circle__wrapper pages-slider__4">
                <div class="circle__bkg">
                    <div>

                    </div>
                </div>
                <div class="circle__border-mask">

                </div>
                <div class="circle__mask">

                </div>
            </div>

            <!-- CIRCLE END -->



        </div>
    </section>


    <!-- 2.1.PAGES SLIDER END -->

</main>

<!-- 2.MAIN END -->

<!-- 3.FOOTER START -->

<?php include('inc/footer.php') ?>

<!-- 3.FOOTER END -->