'use strict';
var domready = require('domready');
var $ = require('jquery');

domready(function () {
    console.log('DOM is ready')

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

    $('ul.tabs2 li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs2 li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })




    var currTab = 0;
    var totalTabs = $(".tabs2 > li").length;

    function cycle() {
        $(".tabs2 > li").eq(currTab).click();

        currTab++;
        if (currTab == totalTabs) {
            currTab = 0;
        }
    }
    var i = setInterval(cycle, 2500);



})
    








