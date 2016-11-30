'use strict';

var json = require("./fixtures/new.json");


import MainPage from './MainPage';


let container = new MainPage(json);


document.body.appendChild(container.elem);

console.log(json);
console.log(json.main[5].title)


