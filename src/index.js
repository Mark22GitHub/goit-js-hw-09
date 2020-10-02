import css from "./css/style.css";
// import fetch from "./fetch.js";
import fetch from "./newsapi.js";

// ==========
// import './module-7/module-7.js';
// import './module-10/module-10.js';
// import template from './templates/post.hbs';
// console.log(template);
// import posts from './data/posts.json';
// console.log(posts)

// // получаем доступ к кеонтейнеру, куда надо встраивать посты
// const postsList = document.querySelector(".posts")
// console.log(postsList)

// // генерируем элемент по шаблону
// const postItem = template(posts);
// console.log(postItem)

// // встраиваем сгенерированные посты в контейнер
// postsList.insertAdjacentHTML('afterbegin', postItem)

// =================MODULE #12=========REST API=================================

// const name = "comments";
// const url = `https://jsonplaceholder.typicode.com/${name}`;

// const myComment = {
//   body: "Lorem ipsum",
//   email: "bla-bla@gmail.com",
//   name: "Jack Sparrow",
//   postId: "22",
// };

// const user = {
//   name: "Alex",
//   age: 22,
// };

// function SetRequest(method, reqUrl, body = null) {
//   return new Promise((res, rej) => {
//     const xmlReq = new XMLHttpRequest();
//     console.log(xmlReq);
//     xmlReq.open(method, reqUrl);
//     xmlReq.responseType = "json";
//     xmlReq.setRequestHeader("Content-Type", "application/json");
//     xmlReq.onload = () => {
//       //   console.log(JSON.parse(xmlReq.response));
//       //   console.log(xmlReq.response);
//       if (xmlReq.status >= 400) {
//         rej(xmlReq.response);
//       } else {
//         res(xmlReq.response);
//       }
//     };
//     xmlReq.onerror = () => {
//       rej(xmlReq.response);
//     };
//     xmlReq.send(JSON.stringify(body));
//   });
// }

// SetRequest("POST", url, myComment);
// SetRequest("POST", url, user).then((data) => console.log(data));
