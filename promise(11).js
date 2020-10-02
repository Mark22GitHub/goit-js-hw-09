// ==================#11======================
// ==================PROMISE==================

// let promise = new Promise(function (resolve, reject) {
//   // setTimeout(() => resolve("done"), 1000);
//   // setTimeout(() => reject(new Error("Oops!")), 1000);
// });

// console.log(promise);

// ==============================================

// let promise = new Promise(function (resolve, reject) {
//   resolve();

//   reject(new Error("..."));
//   setTimeout(() => resolve("..."));
// });

// console.log(promise);
// ==============================================

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(2), 2000);
//   // reject(new Error("Oops"));
// });
// promise
//   // .then(
//   //   (result) => result + "5678", //done
//   //   (error) => alert(error) // не выполнится
//   // )
//   .then((data) => (data += 2))
//   .then((number) => number * 20)
//   .then((currentCount) => console.log(currentCount));
// ==============================================

// .catch==============================================

// let promise = new Promise((resolve, reject) => {
//   resolve(`<h1>RESOLVED</h1>`);
//   // setTimeout(() => reject(new Error("SHIT")), 1000);
// });

// promise
//   .then((data) => (document.querySelector("body").innerHTML = data))
//   .catch((err) => (document.querySelector("body").innerHTML = err));

// .finally==============================================

// new Promise((resolve, reject) => {

// })

//   .finally(() => остановить индикатор загрузки)
//   .then(result => показать результат , err =>  показать ошибку)

// через .finally к .then==============================================

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve("result"), 2000);
// })
//   .finally(() => alert(" ПРОМИС ЗАВЕРШЕН"))
//   .then((result) => alert(result)); // <- .then обработает результат

// через .finally к .catch==============================================

// new Promise((resolve, reject) => {
//   throw new Error("error");
// })
//   .then(data => data+=1)
//   .finally(() => alert(" ПРОМИС ЗАВЕРШЕН"))
//   .then((err) => alert(err)); // <- .then обработает ошибку

// loadImg==================================================

// function loadImg(src) {
//   return new Promise(function (resolve, reject) {
//     let img = document.createElement("img");
//     img.src = src;

//     img.onload = () => resolve(img);
//     img.onerror = () => reject(new Error(`ERROR ON LOAD YOUR PICTURE ${src}`));

//     document.body.append(img);
//   });
// }

// let promise = loadImg(
//   "https://www.nme.com/wp-content/uploads/2020/04/rick-and-morty-season-4.jpg"
// );
// console.log(promise);

// promise.then(
//   (data) => console.log(data),
//   (error) => alert(`Sorry : ${error.message}`)
// );

// ==================================================
// const theWeatherIsGood = () => {
//   return Math.round(Math.random());
// };

// let promise = new Promise((resolve, reject) => {
//   if (theWeatherIsGood()) {
//     resolve("Group contains: ");
//     color = "green";
//   } else {
//     reject("No classes today");
//     color = "red";
//   }
// });
// console.log(promise);

// let color;

// promise
//   .finally(() => (document.querySelector("body").style.background = color))
//   .then((result) => {
//     return result + "Andrew,";
//   })
//   .then((changeResult) => changeResult + "Valera, ")
//   .then((anotherResult) => anotherResult + "Mark.")
//   .then(
//     (greeting) =>
//       (document.querySelector("body").innerHTML = `<h2>${greeting}</h2>`)
//   )
//   .catch((err) => {
//     document.querySelector("body").innerHTML = `<h2>${err}</h2>`;
//   });

// const buyPhone = () => {
//   return Math.round(Math.random());
// };

// let promisePhone = new Promise((resolve, reject) => {
//   if (buyPhone()) {
//     resolve("Mom is happy: here is your phone");
//   } else {
//     reject("Mom isn't happy : You're looser,mate");
//   }
// });

// console.log(promisePhone);

// promisePhone
//   .then(
//     () =>
//       (document.querySelector(
//         "body"
//       ).innerHTML = `<div class="phone"> <img src="https://www.bigw.com.au/medias/sys_master/images/images/h16/h80/11432636842014.jpg"> <h2>Mom is happy: here is your phone,buddy!</h2></div>`)
//   )
//   .catch(
//     (err) =>
//       (document.querySelector(
//         "body"
//       ).innerHTML = `<div class="nothing"> <img src="https://i.pinimg.com/474x/19/77/fe/1977feec50af796dc1155be43905863c--vintage-phones-vintage-design.jpg"> <h2>${err}</h2></div>`)
//   );
// =======================================
// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }
// delay(3000).then(() => alert("выполнилось через 3 секунды"));

// Promise.race()=======================================
// let ferrari = new Promise((resolve, reject) => {
//   const t = 0;
//   setTimeout(() => {
//     resolve({ car: "ferrari", t });
//   }, t);
// });

// let lamborghini = new Promise((resolve, reject) => {
//   const t = 600;
//   setTimeout(() => {
//     resolve({ car: "lamborghini", t });
//   }, t);
// });

// let bmw = new Promise((resolve, reject) => {
//   const t = 600;
//   setTimeout(() => {
//     resolve({ car: "bmw", t });
//   }, t);
// });

// const firstOnFinish = Promise.race([ferrari, lamborghini, bmw]);
// console.log(firstOnFinish);

// Promise.all()=======================================
// let ferrari = new Promise((resolve, reject) => {
//   const t = 1100;
//   setTimeout(() => {
//     resolve({ car: "ferrari", t });
//     console.log(1);
//   }, t);
// });

// let lamborghini = new Promise((resolve, reject) => {
//   const t = 1600;
//   setTimeout(() => {
//     resolve({ car: "lamborghini", t });
//     console.log(2);
//   }, t);
// });

// let bmw = new Promise((resolve, reject) => {
//   const t = 2600;
//   setTimeout(() => {
//     resolve({ car: "bmw", t });
//     console.log(3);
//   }, t);
// });

// const firstOnFinish = Promise.all([ferrari, lamborghini, bmw]);
// console.log(firstOnFinish);

// FETCH #12=====================================

// const currencyExchange = function (str) {
//   document.querySelector("div").innerHTML = "LOADING...";
//   fetch(str)
//     .then((data) => data.json())
//     .then((data) =>
//       data.map((el) => {
//         return (document.querySelector(
//           "body"
//         ).innerHTML += `<p class="currency">Валюта: ${el.ccy}</p> <p class="base-currency">Национальная валюта: ${el.base_ccy}</p> <p class="buy">Курс покупки: ${el.buy}</p> <p class="sale">Курс продажи: ${el.sale}</p>`);
//       })
//     )
//     .finally(() => (document.querySelector("div").innerHTML = ""));
// };

// currencyExchange(
//   "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
// );

// ================================================
