//! ============  Протокол HTTP =========================
// ----- ПЛАН УРОКУ
// 1. Що таке HTTP? Навіщо він потрібен?
// 2. HTTP vs HTTPS
// 3. REST API
// 4. HTTP Methods та формати запитів
// 5. Види API (публічні та не публічні)
// 6. Параметри запитів (class URLSearchParams)


// HTTP - hypertext transfer protocol
// HTTPS - hypertext transfer protocol secured

// https://restcountries.com/v3.1/all
// https://192.168.2.100:52616/disk:c/user/documents/api.txt

// 0. КЛІЄНТ ПОЧАВ ЧЕКАТИ
// 1. Браузер починає шукати найближчий ДНС сервер.
// 2. Встановлює з'єднання з сервером.
// 3. 192.168.2.100:52616
// 4. Повертаємся до клієнта з відповідю
// 5. Браузер отримує відповідь яку нам надав сервер
// 6. Браузер парсить відповідь для відображення клієнту
// 7. КЛІЄНТ ЗАВЕРШИВ ЧЕКАТИ

// REST API
// API - інтерфейс для взаємодії між програмними компонентами.
// REST - стиль бекенд архітектури. Він описує як розприділяються дані і куди вони адресуються.
// REST API - бекенд архітектура яка побудована на стандартах REST. Прослойка між клієнтом і сервером.

// ФОРМАТ REST API запиту
// 1. HTTP метод - POST, GET, PUT, PATCH, DELETE
// 2. HTTP заголовок - службова інформація про клієнт для бекенду.
// 3. Шлях - звичайний адрес серверу куди звертаємось
// 4. Тіло запиту - дані які передаємо на сервер.


// API TYPES:
// private - вимагають ідентифікацію. Потрібен ключ доступу
// public - пофіг на все. просто так з вами спілкуються.

function getData(){
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => console.log(data))
    
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => console.log(data))
}
getData()
