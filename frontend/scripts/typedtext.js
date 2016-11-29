
var domready = require('domready');
var $ = require('jquery');
var typed = require('../../bower_components/typed.js/dist/typed.min');

domready(function () {
    $(function(){
        $(".typedtext").typed({
            strings: ["a bunch of iOS developers", "a bunch of iOS developers"],
            typeSpeed: 0,
            loop: true,
        });
    });
});


