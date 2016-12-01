'use strict';


import template from './index.twig';

export default class indexPage {
    constructor(options) {
        this.elem = document.createElement('div');
        this.elem.className = 'mainwrapper';

        this.elem.innerHTML = template(options);
        
    }
}

