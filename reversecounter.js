// =================Таймер обратного отсчета===============

// #1

// let date = new Date("Oct 01 2020 00:00:00").getTime();
// let p = document.querySelector("#event-day");

// let expirationDate = setInterval(() => {
//   let currentTime = new Date().getTime();
//   let distance = date - currentTime;
//   //   console.log(distance);

//   let day = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   p.textContent = `${day}days , ${hours}hours , ${minutes}minutes, ${seconds}seconds`;

//   if (distance < 0) {
//     clearInterval(expirationDate);
//     p.textContent = `Expired`;
//   }
// }, 1000);
// =========================================================

// #2

// class PromotionTimer {
//   constructor(date) {
//     this.date = new Date(date).getTime();
//     this.p = document.querySelector("#event-day");
//     // this.currentTime = new Date().getTime();
//   }

//   expirationDate() {
//     setInterval(() => {
//       console.log("expirationDate");
//       let currentTime = new Date().getTime();
//       let distance = this.date - currentTime;
//       //   console.log(distance);

//       let day = Math.floor(distance / (1000 * 60 * 60 * 24));
//       let hours = Math.floor(
//         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       this.p.textContent = `${day}days , ${hours}hours , ${minutes}minutes, ${seconds}seconds`;

//       if (distance < 0) {
//         clearInterval(this.expirationDate);
//         this.p.textContent = `Expired`;
//       }
//     }, 1000);
//   }
// }

// new PromotionTimer("Oct 01 2020 00:00:00").expirationDate();
// =============================================================

// #3

// class PromotionTimer {
//   constructor(date) {
//     this.date = new Date(date).getTime();
//     this.p = document.querySelector("#event-day");
//   }
//   expirationDate() {
//     // console.log(this.p.textContent);
//     setInterval(() => {
//       console.log("expirationDate");
//       let distance = this.date - this.currentTime();
//       let day = Math.floor(distance / (1000 * 60 * 60 * 24));
//       let hours = Math.floor(
//         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//       this.p.textContent = `${day}d, ${hours}h, ${minutes}m, ${seconds}s`;
//       if (distance < 0) {
//         clearInterval(this.expirationDate);
//         this.p.textContent = "Expired";
//       }
//     }, 1000);
//   }
//   currentTime() {
//     return new Date().getTime();
//   }
//   init() {
//     this.expirationDate();
//   }
// }
// new PromotionTimer("Oct 01 2020 00:00:00").init();
