Додаток "Application-Weather" є простим веб-додатком, який дозволяє користувачам переглядати поточну погоду та прогноз на кілька днів для введеного міста. Він використовує API погоди (openweathermap.org) для отримання актуальних даних.

Основний функціонал додатку:

    Відображення поточної погоди.
    Відображення прогнозу погоди на кілька днів, включаючи іконку погоди, температуру, опис погоди та іконку одягу для кожного дня в залежності від погоди.
    Можливість пошуку погоди за введеним містом.
    Обробка невалідних запитів та відображення повідомлення про помилку, якщо місто не знайдено.
    Відображення лоадера під час завантаження.

Команди для запуску додатку:

    Завантажте всі файли додатку.
    Встановіть залежності за допомогою команд:
    npm install swagger-ui-express swagger-jsdoc
     npm install react
      npm install bootstrap
      npm install axios
      npm install react-loader-spinner --save
       npm install sass
       npm install -g jasmine
       npm install jest react-testing-library
    Запустіть додаток за допомогою команди:
     npm start. для сторони клієнта
     node server.js для сторони сервера
    Відкрийте веб-браузер і перейдіть за адресою http://localhost:3000 для перегляду додатку.

Так як додаток deployed через netlify, він також доступний за лінком : https://stunning-taffy-859f8a.netlify.app/
Що набагато спрощує процедуру запуску та перевірку самого функціоналу.

Поточні файли виглядають наступним чином:
папка server включає в собі папку routes, node_modules та основні файли
routes-> weatherapi.js має сам роутер та документацію для swagger
node_modules -вклчає в собі необхідні node пакети
server.js - основний файл серверу який комунікує з клієнтом Weather.js

    Weather.js:
        Цей файл містить компонент WeatherForecast , який відповідає за форму пошуку міста і взаємодію з нею.
        Також вын мыстить компоненти WeatherInfo.js, та лоадер RevolvingDot.
        Він містить функціональний компонент, який використовує хук useState для збереження стану міста.
        У компоненті є обробник події handleCityChange, який встановлює значення міста на основі введеного користувачем значення в поле введення.
        Також є обробник події handleSubmit, який викликається при натисканні кнопки "Search" і викликає функцію onSearch з передачею міста в якості аргументу.
        Компонент має розмітку, яка відображає поле введення та кнопку пошуку.
        він також виступає клієнтом серверу server.js який містить в собі API key + api link

    WeatherInfo.js:
        Цей файл містить компонентb WeatherInfo , WeatherForecastDay,  який відповідає за відображення прогнозу погоди.
        Він приймає пропси, такі як WeatherTemperature, WeatherIcon, CustomCloth і FormattedDate.
        У компоненті є розмітка, яка відображає поточну погоду.
        Використовуються дані з weatherData для відображення іконки погоди, температури, опису погоди та іконки одягу.


    App.js:
        Цей файл містить головний компонент App, який об'єднує решту компонентів та відповідає за основну логіку програми.
        Він використовує хук useState для збереження стану weatherData і notFound.
        У компоненті є функція Weather, яка виконує запит до API для отримання даних про погоду на основі введеного міста.
        Компонент також містить функції WeatherIcon, CustomCloth і WeatherForecastDate для отримання відповідних даних для відображення погоди і одягу.
        Цей компонент включає компоненти Weather і WeatherForecast, передаючи їм відповідні пропси.
        У розмітці компонента відображається заголовок, форма пошуку та результати погоди або повідомлення про те, що місто не знайдено.
    WeatherTemperature.js:
       Цей файл використовує пропси WeatherTemperature та конвертує температуру в Метричну чи Термодинамічну ( С чи F).
    Weather.scc:
     Цей файл включа всю стелізацію додатка враховуючи кастомні стилі та вкладеність.

    CustomCloth.js:
      Містить функцію CustomCloth яка задає параметри для виводу кастомної іконки рекомендованого одягу. Папка з іконками customicons  знаходиться в public репозиторії.

UnitTests

Для тестування використана біліотека Jasmine
папка test-env містить файли з кодом та UnitTests .
Загальний список кодів міститься в папці test-env/src/myfileforcode.js які почергово потрібно вставляти до файлу index.js з тієї ж папки
Загальний список тестів міститься в папці test-env/tests/myfilefortests.js які почергово потрібно вставляти до файлу index.testes.js з тієї ж папки
Файл test-env index.html запускає тести http://127.0.0.1:5500/test-env/index.html

Docker provides a lightweight, efficient, and standardized way to package, deploy, and manage your server applications, offering increased flexibility, reproducibility, and scalability. It streamlines the development and deployment process, making it easier to manage complex server environments.
To run docker write at the terminal:
docker run -p 5001:5000 my-image-weather

Deployed on Render https://second-project-backend-part.onrender.com/

Додала Swagger  
після запуску node server.js Api документація доступна за адресою :
http://localhost:5000/api-docs
