import './styles/indexpage.scss';

// routing

var json = require("./fixtures/index.json");

import indexPage from './IndexPage';

let container = new indexPage(json);



let moduleName = location.pathname.slice(1);

if(moduleName){
    let route = require('./routes/' + moduleName + '.js');
} else {
    document.body.appendChild(container.elem);
}



console.log(moduleName);
