# Задача 3. «Пасхалка»

#### В рамках домашнего задания к лекции «Объект события»

## Описание

1. Реализовать открытие и закрытие скрытой панели навигации с помощью комбинации клавиш `CTRL+ALT+T`.

2. Реализовать функционал «пасхалки» — секрета, который откроется пользователю при наборе последовательности букв «нетология».

## Интерфейс

Открытие и закрытие панели навигации осуществляется с помощью добавления и удаления класса `visible` на теге `nav`.

Секретный код _«нетология»_ должен вводиться независимо от регистра и языковой раскладки.

Если при вводе секретного кода нарушить последовательность букв, то код будет считаться неверно введённым, после чего необходимо начинать вводить код заново.

После успешного введения секретного кода следует установить класс `visible` для тега `<div class="secret">`, чтобы показать секрет.

Для отслеживания всех клавиш следует использовать событие `keydown`.

## Материалы

### Верстка

В онлайн-песочнице на [CODEPEN](https://codepen.io/solarrust/pen/MpMxwd).

В репозитории на [GitHub](https://github.com/netology-code/hj-homeworks/tree/master/event-object/easter-egg).

### Инструкция по выполнению домашнего задания

#### В онлайн-песочнице

Потребуется: только ваш браузер.

1. Открыть код в [песочнице](https://codepen.io/solarrust/pen/MpMxwd).

2. Нажать на кнопку «Fork».

3. Выполнить задание.

4. Нажать кнопку «Save».

5. Скопировать адрес страницы, открытой в браузере.

6. Прислать скопированную ссылку через личный кабинет на сайте [netology.ru](http://netology.ru/).    

#### Локально

Потребуется: браузер, редактор кода, система контроля версий [git](https://git-scm.com), установленная локально, и аккаунт на [GitHub](https://github.com/) или [BitBucket](https://bitbucket.org/).

1. Клонировать репозиторий с домашними заданиями `git clone https://github.com/netology-code/hj-homeworks.git`.

2. Перейти в папку задания `cd hj-homeworks/event-object/easter-egg`.

3. Выполнить задание.

4. Создать репозиторий на [GitHub](https://github.com/) или [BitBucket](https://bitbucket.org/).

5. Добавить репозиторий в проект `git remote add homeworks %repo-url%`, где `%repo-url%` — адрес созданного репозитория.

6. Опубликовать код в репозиторий `homeworks` с помощью команды `git push -u homeworks master`.

7. Прислать ссылку на репозиторий через личный кабинет на сайте [netology.ru](http://netology.ru/).