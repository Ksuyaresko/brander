'use strict';


import template from './menu.twig';

export default class NewPage {
    constructor(options) {
        this.elem = document.createElement('div');
        this.elem.className = 'mainwrapper';

        this.elem.innerHTML = template(options);
        
    }
}

