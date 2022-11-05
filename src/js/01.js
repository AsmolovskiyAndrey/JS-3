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


// function getData(){
//     fetch('https://restcountries.com/v3.1/all')
//         .then(response => response.json())
//         .then(data => console.log(data))
    
//     fetch('https://rickandmortyapi.com/api/character')
//         .then(response => response.json())
//         .then(data => console.log(data))
// }
// getData()

//todo ´´´´´´´´´´´´´´´´´ Репета практика ==============================
// function getPok() {
//     fetch('https://pokeapi.co/api/v2/pokemon')
//         .then(responce => responce.json())
//     .then(data => console.log(data))
// }

// getPok()

//! ===================== "2-й урок" ==========================================

let getEl = selector => document.querySelector(selector)
let pageCounter = 1
function getData(){
    fetch(`https://rickandmortyapi.com/api/character?page=${pageCounter}`)
        .then(response => response.json())
        .then(data => {
            console.log('Я завантажив сторінку номер - ', pageCounter)
            const markup = data.results.map(({image,id, name, status, species, gender, location, created}) => {
              return `
            <li class="item">
                <img src=${image} alt="">
                <p class="id">ID: ${id}</p>
                <p class="name">NAME: ${name}</p>
                <p class="status">STATUS: ${status}</p>
                <p class="species">SPECIES: ${species}</p>
                <p class="gender">GENDER: ${gender}</p>
                <p class="location">LOCATION: ${location.name}</p>
                <p class="createdAt">Created At: ${created}</p>
        </li>
            `
            }).join('')
            getEl('.itemList').insertAdjacentHTML('beforeend', markup)
            pageCounter++
        })
}

getEl('.load_btn').addEventListener('click', getData)

window.addEventListener('scroll', () =>{
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement
    // console.log(scrollTop) // Висота від верху документа в пх
    // console.log(scrollHeight) // Довжина всього документа
    // console.log(clientHeight) // Висота вьюпорта користувача
    if(scrollTop === scrollHeight - clientHeight){
        console.log('ЗАГРУЗКА')
        getData()
    }
})

const promise = new Promise((resolve, reject)=>{
    let number = Math.random() > .5
setTimeout(()=>{
    if(number){
        resolve('123123123')
    }else{
        reject('ERROR 5 LETTER WORD')
    }
},5000)
}).then(data => console.log(data))
    .catch(error => console.log(error))

function test(){
    fetch('https://restcountries.com/v3.1/all')
        .then(response => {
            console.log('Я ВИКОНАВСЯ ->', response)
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response
        })
        .then(data => data.json())
        .then(data=> console.log('Я ВИКОНАВСЯ ->', data))
        .catch(error => console.log('Я НЕ ВИКОНАВСЯ ->', error))
}
test()