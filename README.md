# Трекер задач с таймером по методу «Помодоро»
React-приложение c использованием одной из методик повышения продуктивности.

[The Pomodoro Technique](https://todoist.com/ru/productivity-methods/pomodoro-technique) - описание техники Помодоро


## Технологии
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Redux](https://react-redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/en/main)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [Framer Motion](https://www.framer.com/motion/)
- [react-chartjs-2](https://react-chartjs-2.js.org/)
- [use-sound](https://github.com/joshwcomeau/use-sound)
- [webpack 5](https://webpack.js.org/)

## Установка

### Установка зависимостей
Для установки зависимостей, выполните команду:
```sh
$ npm i
```

### Запуск Development сервера
Чтобы запустить сервер для разработки, выполните команду:
```sh
npm start
```

### Создание Development сборки
Чтобы выполнить Development сборку, выполните команду: 
```sh
npm run dev
```
### Создание Production сборки
Чтобы выполнить Production сборку, выполните команду: 
```sh
npm run build
```
## Описание приложения

Приложение представляет собой трекер задач с таймером
Пользователь может выполнить на сайте следующие действия:
1) Работать со списком задач (добавить, редактировать, удалить, сортировать)
    * Пользователь может запланировать несколько задач на свой день и для каждой
задать  количество «помидоров» для каждой задачи, которое необходимо, чтобы её
сделать. Верхняя задача из списка — это текущая задача.
2) Работать с таймером (старт, стоп, пауза, продлить, пропустить)
    * Как только пользователь готов, он запускает таймер. Если его отвлекли, то
пользователь может поставить таймер на "паузу", или может  остановить  таймер - «помидорка» при этом не засчитывается. После каждой выполненной "помидорки" устанавливается "короткий" перерыв. Перерыв также можно поставить на "паузу" или "пропустить". После определнного количества "помидорок" устанавливается "длинный" перерыв.
3) Просматривать статистику использования таймера на странице "Статистика"
    * На этой странице отображается статистика по использованию приложения. Пользователь может посмотреть столбчатую
диаграмму с количеством времени, когда он работал с таймером. Может выбрать
неделю, за которую он хочет посмотреть статистику. Может посмотреть
дополнительные параметры, такие как: 
        - Фокус (отношение времени работы с
                таймером ко времени, потраченному на
                  законченные «помидорки»).
        - Время на паузе.
        - Остановки.
 4) Пользователь может изменить настройки приложения на станице "Настройки". Пользователь может настроить следующие параметры
    * продолжительность «помидора».
    * продолжительность короткого/длинного перерыва.
    * частоту длинных перерывов.
    * выключить или включить уведомления.
5) Дополнения:
    * Анимация компонентов страницы при загрузке
    * Темная тема
    * Звуковые уведомления при окончании таймера и при выполнении задачи

Приложение написано с использованием Redux Toolkit совместно с Redux Persist. Статистика, настройки и состояние приложения сохраняются и после перзагрузки. 
Приложение имеет адаптивный веб дизайн для различных размеров экрана.
