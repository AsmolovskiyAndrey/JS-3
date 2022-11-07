//! =================================== CRUD ==========================================================
//! ===================================================== Асинхронные функции ===========================================================
(async()=>{const o=[1,2,3].map((async o=>(await fetch(`https://jsonplaceholder.typicode.com/users/${o}`)).json())),s=await Promise.all(o);console.log(s)})();
//# sourceMappingURL=20-21-lesson.c7d5061a.js.map
