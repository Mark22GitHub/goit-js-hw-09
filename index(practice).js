// import header from "./header.js";
// import main from "./main.js";
// import footer from "./footer.js";

// let body = document.querySelector("body");

// const render = {
//   header: header(),
//   main: main(),
//   footer: footer(),
// };

// body.innerHTML += render.header + render.main + render.footer;

// import first from "./module(practice).js";
// import second from "./module2(practice).js";

// console.log(first(), second());

// let body = document.querySelector("body");

// const toRender = {
//   h2: first(),
//   h3: second(),
// };

// body.innerHTML += `<h2 class='title'>${toRender.h2}</h2><h3>${toRender.h3}</h3>`;

// let title = document.querySelector(".title");
// console.log(title);

// =============================================================
// ======#10 Web Storage API( localStorage)======
//              ===dark/light theme===

const body = document.querySelector("body");
// const checkbox = document.querySelector(".check-box");
// // console.log(checkbox);

// checkbox.addEventListener("click", () => {
//   // console.dir(checkbox.checked);

//   if (checkbox.checked) {
//     localStorage.setItem("theme", "green");
//     body.style.background = "green";
//   } else {
//     localStorage.setItem("theme", "red");
//     body.style.background = "red";
//   }
// });

// if (localStorage.getItem("theme") === "green") {
//   body.style.background = "green";
//   checkbox.checked = true;
// } else {
//   body.style.background = "red";
//   checkbox.checked = false;
// }
// =============================================================

// import pokemons from "./poke.js";

// pokemons.map((el) => {
//   console.log(el);

//   // body.insertAdjacentHTML("beforeend", `<h2>${el.name}</h2>`);
//   // body.insertAdjacentHTML(
//   //   "beforeend",
//   //   `<ul>${el.moves.map((element) => `<li>${element.move.name}</li>`)}</ul>`
//   // );
//   // body.insertAdjacentHTML("beforeend", `<img src=${el.sprites.front_shiny}>`);

//   body.innerHTML += `<h2>${el.name}</h2> <img src='${el.sprites.front_shiny}' > <ul class=list${el.name}></ul>`;

//   let list = document.querySelector(`.list${el.name}`);
//   el.moves.map((el) => (list.innerHTML += `<li>${el.move.name}</li>`));
// });

// const date = new Date(1993, 3, 22, 11, 55);
// console.log(date);

// setInterval(() => {
//   let currentDate = Date.now();
//   let futureDate = new Date(2020, 8, 28, 12, 10);
//   let futureDateMS = futureDate.getTime();

//   currentDate > futureDateMS
//     ? alert("It's time to move")
//     : console.log("Have patience");
// }, 1000);
// ====================================================
// const start = document.querySelector(".start");
// const counter = document.querySelector(".counter");
// const stop = document.querySelector(".stop");
// let stopTimer;

// start.addEventListener("click", () => {
//   stopTimer = setInterval(() => {
//     console.log(counter.textContent++);
//   }, 1000);

//   start.setAttribute("disabled", "justOnce");
// });

// stop.addEventListener("click", (event) => {
//   // console.log(event.target);

//   if (event.target.textContent === "STOP") {
//     clearInterval(stopTimer);
//     event.target.textContent = "RESET";
//     console.log(event.target);
//   } else {
//     event.target.textContent === "RESET";

//     counter.textContent = 0;

//     start.disabled = false;
//   }
// });
// ====================================================
