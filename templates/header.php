<!DOCTYPE html>
<html lang="ru">

<?php
$nav = [
    ['Главная', '/'],
    ['О компании', '/about'],
    ['Направления', '/directions'],
    ['Деятельности', '/events'],
    ['Наши работы', '/ourWorks'],
    ['Контакты', '/contacts']
]
?>
<head>
    <!-- Title -->
    <title>Сигнал</title>

    <!-- Required Meta Tags Always Come First -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Favicon -->
    <link rel="shortcut icon" href="favicon.ico">

    <!-- CSS Customization -->
    <link rel="stylesheet" href="templates/css/main.css">
    <link rel="stylesheet" href="templates/js/slick/slick.css">



</head>

<body>
<main>
    <header>
        <div class="container">
            <div class="header__top-row">
                <a href="/">
                    <div class="logo_block">
                        <div class="logo__anime"></div>
                        <img class="logo" src="logo.svg" alt="Logo">
                    </div>
                </a>

                <div class="header__top-row_right-block">
                    <div class="header_contacts middle">
                        <a class="header_contacts_phone" href="!#">+7 (495) <b>677-17-79</b> </a>
                        <div class="header__number_dropdown ">
                            <a  href="!#">+7 (495) <b>677-17-79</b> </a>
                        </div>
                        <span class="header_contacts_address">
                            г. Санкт-Петербург, Варшавское ш, д.68 к.3
                        </span>
                    </div>
                    <button class="button header__top-row_button">
                        Обратная связь
                    </button>
                </div>
            </div>
        </div>



        <div class="header__bottom">

            <div class="container header__bottom-row">

                <!--  панель навигации  -->
                <div id="hamburger" class="hamburger-icon-container">
                    <span class="hamburger-icon"></span>
                </div>

                <nav >
                    <ul class="header__nav">
                        <?php foreach ($nav as $li) : ?>
                        <li>
                            <a  href="<?=$li[1]?>">
                                <?=$li[0]?>
                            </a>
                        </li>
                        <?php endforeach;?>
                    </ul>
                </nav>
                <!-- конец панель навигации  -->

                <button class="js-search-button header__search_button"><svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.33333 0C2.39413 0 0 2.39413 0 5.33333C0 8.27253 2.39413 10.6667 5.33333 10.6667C6.61147 10.6667 7.78527 10.2128 8.70521 9.45937L11.8896 12.6437C11.9387 12.6949 11.9976 12.7358 12.0627 12.764C12.1279 12.7921 12.198 12.807 12.2689 12.8077C12.3399 12.8084 12.4103 12.795 12.476 12.7682C12.5416 12.7413 12.6013 12.7017 12.6515 12.6515C12.7017 12.6013 12.7413 12.5416 12.7682 12.476C12.795 12.4103 12.8084 12.3399 12.8077 12.2689C12.807 12.198 12.7921 12.1279 12.764 12.0627C12.7358 11.9976 12.6949 11.9387 12.6437 11.8896L9.45937 8.70521C10.2128 7.78527 10.6667 6.61147 10.6667 5.33333C10.6667 2.39413 8.27253 0 5.33333 0ZM5.33333 1.06667C7.69606 1.06667 9.6 2.9706 9.6 5.33333C9.6 7.69606 7.69606 9.6 5.33333 9.6C2.9706 9.6 1.06667 7.69606 1.06667 5.33333C1.06667 2.9706 2.9706 1.06667 5.33333 1.06667Z"/>
                    </svg></button>

                <form id="searchForm" class="header__search">
                    <input placeholder="Поиск по сайту:" class="header__search_input" type="text"/>
                    <button type="submit" class="header__search_submit"></button>
                </form>
            </div>
        </div>
    </header>