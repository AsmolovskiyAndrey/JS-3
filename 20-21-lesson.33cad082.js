//! =================================== CRUD ==========================================================
function o(o,t){const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)};return fetch(`http://localhost:4567/books/${t}`,n).then((o=>o.json()))}o({title:"Мастер и Маргарита",author:"Михаил Булгаков"},13).then((o=>{console.log(o)})).catch((o=>console.log(o))),o({author:"Александр Пушкин"},12).then((o=>{console.log(o)})).catch((o=>console.log(o))),o({title:"Книга неизвестного писателя"},11).then((o=>{console.log(o)})).catch((o=>console.log(o)
//! ===================================================== Асинхронные функции ===========================================================
));
//# sourceMappingURL=20-21-lesson.33cad082.js.map
