'use strict';

var json = require("./fixtures/new.json");


import MainPage from './MainPage';


let container = new MainPage(json);


document.body.appendChild(container.elem);

console.log(json.text)


