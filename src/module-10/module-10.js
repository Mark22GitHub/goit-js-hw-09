import db from './db.json';
import hb from './gal.hbs';

const div = document.querySelector('.hb')
console.log(div)

const item = hb(db);
console.log(item)
div.insertAdjacentHTML("afterbegin", item)

// // JSON

// const Soroka = {
//   name: "Romchik",
//   age: 18
// }
// console.log(Soroka)

// const jsonSoroka = JSON.stringify(Soroka);
// console.log(jsonSoroka)

// const objSoroka = JSON.parse(jsonSoroka)
// console.log(objSoroka)

// // LocalStorage()

// localStorage.setItem("key", "")
// localStorage.setItem("Soroka", "Beloboka")

// const info = localStorage.getItem("Soroka");
// console.log(info)


// const info1 = localStorage.getItem("keymjgfhgd");
// console.log(info1)

// // localStorage.removeItem('name')