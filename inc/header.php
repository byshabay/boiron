<!-- ROOT_URL -->
<?php $ROOT_URL = 'http://study.ivit.pro/boiron.ru/' ?>


<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>boiron.ru</title>

    <!-- SELF-WRITTEN STYLES -->
    <link rel="stylesheet" href="<?= $ROOT_URL . 'css/style.css' ?>">
</head>

<body>
    <header class="header">

        <!-- 1.TOP MENU START -->

        <div class="header__top">
            <ul class="container">
                <li class="header__top-li">
                    <a class="common-link_white-icon" href="#">
                        Специалисты в области здравоохранения
                    </a>
                </li>
                <li class="header__top-li header__top-parent">
                    <a href="#">
                        Ты?
                    </a>
                </li>
            </ul>
        </div>

        <!-- 1.TOP MENU END -->

        <nav class="header__nav">
            <div class="container">
                <a class="header__logo">
                    <img src="<?= $ROOT_URL . 'images/logo.png' ?>">
                </a>
                <ul class="header__menu">
                    <li class="header__parent">
                        <a href="#">
                            Буарон в мире
                        </a>
                    </li>
                    <li class="header__parent">
                        <a href="#">
                            Пресс-центр
                        </a>
                    </li>
                    <li class="header__parent">
                        <a href="#">
                            Карьера
                        </a>
                    </li>
                    <li class="header__parent">
                        <a href="#">
                            Обратная связь
                        </a>
                    </li>
                    <li>
                        <form class="search" action="#">
                            <a href="#" class="search__loupe">
                                <img src="<?= $ROOT_URL . 'images/search.svg' ?>">
                            </a>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
        <!-- 2.MAIN NAV MENU START -->



        <!-- 2.MAIN NAV MENU END -->
    </header>

</body>

</html>