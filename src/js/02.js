//! =================================== CRUD ==========================================================

// Будем делать запросы к JSONPlaceholder API, который предоставляет коллекцию не настоящих постов в ресурсе / posts,
// представленных объектами со свойствами id, author и body.

//* Чтение

// HTTP - метод GET используется для получения существующих данных.Метод fetch() должен отправить на сервер GET - запрос без тела.
// Бэкенд, по получению запроса, обработает его и в ответе вернет необходимые ресурсы.
// Получим массив всех постов.Для этого обращаемся к ресурсу / posts описанному в документации бэкенда.
// Метод fetch() по умолчанию делает GET - запрос, поэтому переопределять опции запроса не обязательно.
    
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(posts => console.log(posts))
//     .catch(error => console.log(error));

// Получим один пост по идентификатору(свойство id) добавив его к ресурсу / posts /: postId.Последняя часть этого пути называется динамический параметр и в документации описывается как / ресурс /: параметр.
// Ресурс неизменен, это путь к целой коллекции, а значение параметра меняется для каждого её элемента.

// // Change this number to fetch different post
// const postId = 1;
// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then(response => response.json())
//     .then(post => console.log(post))
//     .catch(error => console.log(error));


//* Создание

// Метод POST используется для добавления нового ресурса.Метод fetch() должен отправить на сервер POST - запрос,
// в теле которого будет объект с полями author и body, идентификатор будет автоматически создан базой данных.
// Результатом такого запроса будет объект добавленный в базу данных.

// const postToAdd = {
//     author: "Mango",
//     body: "CRUD is awesome",
// };

// const options = {
//     method: "POST",
//     body: JSON.stringify(postToAdd),
//     headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//     },
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//     .then(response => response.json())
//     .then(post => console.log(post))
//     .catch(error => console.log(error));

// Делаем запрос на создание поста обращаясь к ресурсу / posts, но в настройках метода fetch() изменяем HTTP - метод на POST.
// Так бэкенд знает, что нужно не прочитать уже существующее, а создать новый ресурс в этой коллекции.
// Тело запроса должно быть строкой, потому что протокол HTTP передает все как текст.При передаче сложных типов данных,
// их обязательно необходимо привести к строке методом JSON.stringify().Не забываем указать заголовок Content - Type, который уточняет для бэкенда тип передаваемых данных.
// В ответ, если все хорошо, получим JSON с добавленным id. Идентификатор будет уникальным для каждого объекта. {author: 'Mango', body: 'CRUD is awesome', id: 101}

//* Обновление

// Методы PUT и PATCH используются для обновления существующих данных.Какой метод использовать будет написано в документации бэкенда.
// Метод fetch() должен отправить на сервер запрос, в теле которого необходимо указать объект с полями для изменения.
// Путь указывает в какой коллекции и какой элемент мы хотим обновить.Бекенд, по получению запроса, обработает его и в ответе вернет обновленный ресурс.
// В ответ, если все хорошо, получим обновленный объект. {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'CRUD is really awesome'}

// // Change value of id property to update different post
// const postToUpdate = {
//     id: 1,
//     body: "CRUD is really awesome",
// };

// const options = {
//     method: "PATCH",
//     body: JSON.stringify(postToUpdate),
//     headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//     },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//     .then(response => response.json())
//     .then(post => console.log(post))
//     .catch(error => console.log("ERROR" + error));

// ИНТЕРЕСНО
//? Метод PATCH заменяет в существующем ресурсе значения переданные в теле запроса свойств. Метод PUT полностью заменяет ресурс.

//* Удаление

// Метод DELETE используется для удаления существующих данных.Метод fetch() должен отправить на сервер DELETE - запрос без тела.
// Путь указывает в какой коллекции и какой элемент мы хотим удалить.
// Бекенд, по получению запроса, обработает его, удалит ресурс из коллекции и в ответе вернет статус результата.  Post deleted

// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//     method: "DELETE",
// })
//     .then(() => console.log("Post deleted"))
//     .catch(error => console.log("Error:", error));


//! ===================================================== Асинхронные функции ===========================================================

// Асинхронные функции помогают избавиться от коллбэков и вложенных конструкций.При этом они отлично работают в связке с методами then() и catch (),
// потому что гарантированно возвращают промис.

// const fetchFriends = async () => {
//     const token = await fetch("my-api.com/me");
//     const user = await fetch(`my-api.com/profile?token=${token}`);
//     const friends = await fetch(`my-api.com/users/${user.id}/friends`);
//     return friends;
// };

// fetchFriends()
//     .then(friends => console.log(friends))
//     .catch(error => console.error(error));

//todo Синтаксис async/await

// Асинхронные функции(async / await) - удобный способ написания асинхронного кода, который внешне становится похож на синхронный.
// В основе синтаксиса async / await лежат промисы, поэтому он не блокирует главный поток выполнения программы.

// Для объявления асинхронной стрелочной функции, перед списком параметров добавляем ключевое слово async.
// Внутри неё можно использовать оператор await и справа от него поставить что - то, что вернёт промис.Метод response.json() также возвращает промис, поэтому ставим await.

// const fetchUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
// };

// fetchUsers().then(users => console.log(users));

// Когда интерпретатор встречает await, он приостановливает выполнение этой функции(не всего скрипта) и ждет, пока не выполнится промис справа от await.
// Как только промис выполнился - исполнение функции возобновляется и на строке ниже нам доступен результат асинхронной операции.

// Оператор await можно использовать только в теле асинхронной (async) функции.
// Оператор await приостанавливает функцию пока промис не выполнится (fulfilled или rejected).
// Если промис выполнился успешно (fulfilled), оператор await вернет его значение.
// Если промис был отклонен с ошибкой (rejected), оператор await выбросит ошибку.
// Асинхронная функция всегда возвращает промис, поэтому любое возвращаемое значение будет его значением.
// Если не указать возвращаемое значение, вернется промис со значением undefined.

//* Любая функция может быть асинхронной, будь - то метод обьекта, класса, коллбэк, объявление или инлайн функция.
//* Все они смогут использовать оператор await и обязательно вернут промис, потому что будут асинхронными функциями.

// // Function declaration
// async function foo() {
//   // ...
// }
// // Functional expression
// const foo = async function () {
//   // ...
// };
// // Arrow function
// const foo = async () => {
//   // ...
// };
// // Object method
// const user = {
//   async foo() {
//     // ...
//   },
// };
// // Class method
// class User {
//   async foo() {
//     // ...
//   }
// }

//todo Обработка ошибок

//* Если результат асинхронной функции(промис) не используется во внешнем коде, ошибки обрабатываются в теле функции конструкцией try...catch.
// Значение параметра error в блоке catch это ошибка которую сгенерирует await если промис будет отклонен.

// const fetchUsers = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fetchUsers();

//* Если результат асинхронной функции(промис) используется во внешнем(глобальном) коде, то есть вне других асинхронных функций, ошибки обрабатываются коллбэком методом catch ().
// Значение параметра error в методе catch () это ошибка которую сгенерирует await если промис будет отклонен.

// const fetchUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return users;
// };

// fetchUsers()
//   .then(users => console.log(users))
//   .catch(error => console.log(error));

//?Так работать не будет - await можно использовать только в теле асинхронной функции.====================
// const fetchUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return users;
// };

// ❌ SyntaxError: await is only valid in async function
// const users = await fetchUsers();
//?=============================================================

//* Если результат асинхронной функции используется в другой асинхронной функции, ошибки обрабатываются конструкцией try...catch.
// Значение параметра error в блоке catch это ошибка которую сгенерирует await если промис будет отклонен.

// const fetchUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return users;
// };

// const doStuff = async () => {
//   try {
//     const users = await fetchUsers();
//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// doStuff();

//todo Параллельные запросы

// Если одновременно необходимо сделать несколько запросов, использовать синтаксис async / await нужно очень аккуратно.
// В следующем примере будут выполнены три последовательных запроса, потому что выполнение асинхронной функции приостанавливается когда интерпретатор встречает await.
// Кроме того, парс результатов запросов также будет последовательный, что займет больше времени.

// const fetchUsers = async () => {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const firstResponse = await fetch(`${baseUrl}/users/1`);
//   const secondResponse = await fetch(`${baseUrl}/users/2`);
//   const thirdResponse = await fetch(`${baseUrl}/users/3`);

//   const firstUser = await firstResponse.json();
//   const secondUser = await secondResponse.json();
//   const thirdUser = await thirdResponse.json();

//   console.log(firstUser, secondUser, thirdUser);
// };

// fetchUsers();

// На вкладке Network хорошо видно, что запуск каждого последующего запроса ожидает пока завершится предыдущий.
// То есть выолняются они последовательно, что занимает больше времени, которое равно сумме длительностей всех запросов.
// Это нормально, если запросы зависят друг от друга, то есть следующий использует результат предыдущего.

// Concurrent requests
// В нашем случае они полностью независимы, поэтому нужно запустить их параллельно.Для этого создаётся массив промисов, после чего используется метод Promise.all(),
// для ожидания их выполнения.Массив промисов создается методами map(), filter() и так далее, зависит от задачи.

const fetchUsers = async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const userIds = [1, 2, 3];

  // 1. Создаём массив промисов
  const arrayOfPromises = userIds.map(async userId => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  // 2. Запускаем все промисы параллельно и ждем их завершения
  const users = await Promise.all(arrayOfPromises);
    console.log(users);
};

fetchUsers();

// При таком подходе запросы запускаются параллельно, что экономит время ожидания их выполнения, которое равно длительности самого «медленного» из них.
// Такой приём подходит только если запросы не зависят друг от друга.