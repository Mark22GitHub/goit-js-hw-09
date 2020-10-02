import tmplt from "./templateHB.js";
import data from "./dataHB.js";

let body = document.querySelector("body");

// let htmlTemplate = document.querySelector(".template").innerHTML.trim();

// console.log(template(data));

// body = template(data);

let template = Handlebars.compile(tmplt);
body.innerHTML = template(data);
