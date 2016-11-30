'use strict';
var domready = require('domready');
var $ = require('jquery');
var slick = require('../../bower_components/slick-carousel/slick/slick.min.js');



domready(function () {
    console.log('DOM is ready')

    $('.promo').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
    });





    $('.promo').on('afterChange', function(){

        if( $('#slick-slide03').hasClass('slick-active') ) {
            console.log('li');
            $('.slick-dots li:first-child').addClass('next');
        } else {
            $('.slick-dots li:first-child').removeClass('next');
        }

    });


    var headerDiv = document.getElementById('header');
    var promoDiv = document.getElementById('promo');
    var SourceTop = promoDiv.getBoundingClientRect().bottom + window.pageYOffset;
    window.onscroll = function() {
        if (headerDiv.classList.contains('header__fixed') && window.pageYOffset < SourceTop) {
            headerDiv.classList.remove('header__fixed');
        } else if (window.pageYOffset > SourceTop) {
            headerDiv.classList.add('header__fixed');
        }
    };


    /*
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
*/


});
    








