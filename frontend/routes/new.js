'use strict';
import '../styles/imports/cssnext.css';

var json = require("../fixtures/new.json");


import NewPage from '../NewPage';


let container = new NewPage(json);


document.body.appendChild(container.elem);

console.log(json);
console.log(json.main[5].title)


alert('new page js')