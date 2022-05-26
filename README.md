# Layer-0

Layer 0 — это шаблон проектов Интуиции с Pug, SCSS, jquery и со встроенным css-фреймворком.

## Подготовка среды

### Mac OS

0. Если у вас мак с процессором M1, то сначала нужно переключить Терминал в режим Rosetta (или сделать его копию. Подробнее [в статье](https://www.courier.com/blog/tips-and-tricks-to-setup-your-apple-m1-for-development))

    - идем в Applications > Utilites
    - кликаем ПКМ по Terminal.app > Get info > галочка Open using Rosetta

1. Дать Терминалу доступ к диску, чтобы можно было переходить в любую папку: System preferences > Security & Privacy > Full Disk Access 
    ![photo_2022-05-25 22 38 55](https://user-images.githubusercontent.com/29631343/170445902-d3897653-9f31-4402-8b93-88eb7beb19d9.jpeg)


2. Установить [Homebrew](https://brew.sh):
    ```shell
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

3. Установить [Node.js](https://nodejs.org/en/) 12 версии через менеджер версий ноды (проект работает с 10 или 12 версией)
    ```shell
    brew install n
    sudo n 12
    ```

4. и [Yarn](https://yarnpkg.com/lang/en/):
    ```shell
    brew install yarn
    ```

### Windows

_Будет позже_

<!-- 0. Подготовить Виндоус [по инструкции](https://github.com/asuh/front-end-windows):

- подготовка виндоус (включить шифрование диска)
- установить Chocolatey
- установить WSL + ubuntu
- установить Windows terminal -->

1. [Скачать](https://nodejs.org/en/) и установить Node.js.

2. [Скачать](https://yarnpkg.com/lang/en/docs/install/#windows-stable) и установить Yarn.

## Как запустить

1. Перейти в папку проекта.

2. Запустить сайт:
    ```shell
    yarn start
    ```

3. Сайт будет автоматически открыт в браузере по адресу [http://localhost:1234](http://localhost:1234).

4. Чтобы собрать билд, нужно выполнить:
    ```shell
    # сборка только JS и SCSS (для сайта с бэкэндом)
    yarn build

    # сборка JS, SCSS и Pug в папку site (для статического сайта)
    yarn build:static
    ```
