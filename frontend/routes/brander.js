'use strict';

import '../scripts/typedtext';
import '../scripts/promo';
import '../styles/styles.scss';

var json = require("../fixtures/mainpage.json");

import MainPage from '../MainPage';

let container = new MainPage(json);

document.body.appendChild(container.elem);



// load script onclick

document.getElementById('contacts__btn').onclick = function () {
    require.ensure(['../scripts/login'], function (require) {
        let login = require('../scripts/login');
        login();
    }, 'log');
}


