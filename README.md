# pointing-poker
Репозиторий командной задачи RSS React 2021Q3.

## полезные ссылки
- [задание](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/pointing-poker.md)
- [Planning Poker (Scrum Poker) описание](https://ru.scrum-time.com/infobase/planning-poker.php)
- [Макет Figma](https://www.figma.com/file/mEe4koIAtqMreKs68uvoVs/Poker-Planing)
- [Trello Board](https://trello.com/b/Q41Liq5Q/point-poker-board)

## краткое описание веток
- main - ветка только с Readme
- develop - основная ветка разработки
- feature/feat - ветка фичи
- fix - ветка фикса

Ветка фикса или фичи стартует от ветки develop и мержится в неё при завершении работы над фичей (фиксом). Наверное, хорошо бы ещё какие-то номера придумать для связки веток с карточками Трелло. Но это не точно.)

## основные инструменты
Сборка использует (основное):
- [TypeScript](https://www.typescriptlang.org/docs/),
- [Webpack](https://webpack.js.org/guides/getting-started/),
- [Babel](https://babeljs.io/setup),
- [React](https://ru.react.js.org/docs/getting-started.html),
- [React Router](https://reactrouter.com/web/guides/quick-start),
- [React Redux](https://react-redux.js.org/),
- [Redux Saga](https://redux-saga.js.org/docs/api/),
- [SASS](https://sass-lang.com/),
- [Axios](https://axios-http.com/docs/intro),
- [Jest](https://jestjs.io/docs/getting-started),
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/),
- [Mock Service Worker](https://mswjs.io/docs/),
- [Material-UI](https://material-ui.com/ru/getting-started/usage/),
- [Formik](https://dev.to/finallynero/react-form-using-formik-material-ui-and-yup-2e8h).

## основные скрипты (кроме первых двух: yarn или npm ...)
- yarn - установить зависимости
- npm i - то же самое, но с npm
- build - production сборка в dist
- build-n - production сборка с предварительным созданием файла .env на Netlify
- lint - eslint
- lint-e - eslint, только ошибки
- fix - eslint, исправление ошибок
- start - запуск дев-сервера, порт 3000
- start-prod - production сборка и запуск сервера express, порт 3030
- test - запуск тестов (Jest + RTL)
- test-c - запуск тестов + coverage + summary (ToDo: одновременный вывод таблички и Summary)

## основные папки
- configs - конфиги вебпак (dev и prod) и jest
- public - при сборке файлы из этой папки копируются в корень проекта
- src - исходники приложения и основная рабочая папка
- tests - настройки тестов, моки файлов, создание заглушек запросов

## переменные окружения
Сборка использует Dotenv, что позволяет работать с .env файлом в корневой папке. Пока что он не используется. ToDo: сделать пример файла, если он появится.
