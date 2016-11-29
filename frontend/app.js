'use strict';

import './scripts/typedtext';
import './scripts/promo';
import './styles/styles.scss';


//require("!style-loader!css-loader!sass-loader!./styles/styles.scss");



import MainPage from './MainPage';


let container = new MainPage({
    "maintitle": "BRANDER",
    "logo": "BRANDER",
    "navs": [{
        "text": ' Contacts',
        "href": '#'
    }, {
        "text": 'РУС',
        "href": '#'
    }],
    "promo": {
        "tabs1": [
            {"title": "Design", "datatab": "tab-1", "class": "current", "class2": "design", "text": "We provide hi-quality design, development, mobile apps and marketing", "title2": "Everything in its right place", "img1": "images/1.1.png"},
            {"title": "Development", "datatab": "tab-2", "class2": "development", "text": "We provide hi-quality design, development, mobile apps and marketing", "title2": "Ready. Steady. Go!", "img1": "images/1.2.png"},
            {"title": "Mobile", "datatab": "tab-3", "class2": "mobile", "text": "We provide hi-quality design, development, mobile apps and marketing", "title2": "For any business ideas", "img1": "images/1.31.png", "img2": "images/1.32.png", "imgclass": "tab__img_tel"},
            {"title": "Marketing", "datatab": "tab-4", "class2": "marketing", "text": "We provide hi-quality design, development, mobile apps and marketing", "title2": "Enlarge your sales!", "img1": "images/1.41.png", "img2": "images/1.42.png"},
        ]
    },
    "promo2title": "We are",
    "projects_menu": [
        {"href": "#", "name": "All", "activeclass": "active"},
        {"href": "#", "name": "E-commerce"},
        {"href": "#", "name": "Mobile"},
        {"href": "#", "name": "Corporate"},
        {"href": "#", "name": "Landing"},
        {"href": "#", "name": "Web service"},
        {"href": "#", "name": "Finance"},
    ],
    "projects": [
        {"imgsrc": "images/2.1.jpg", "imgalt": "project image", "overlaytitle": "Trim", "overlaytext": "Find specialist, book on specific date, be specialist. Handy interface, enormous functionality.", "overlayhref": "https://trim.mobi/", "overlaylink": "www.trim.mobi", "glink": "#", "gimg": "images/googlebtn.png", "galt": "Get it on Google Play", "alink": "#", "aimg": "images/appbtn.png", "aalt": "Download on the App Store", "bottomtext1": "DESIGN", "bottomtext2": "MOBILE"},
        {"imgsrc": "images/2.2.jpg", "imgalt": "project image", "overlaytitle": "Trim", "overlaytext": "Find specialist, book on specific date, be specialist. Handy interface, enormous functionality.", "overlayhref": "https://trim.mobi/", "overlaylink": "www.trim.mobi", "glink": "#", "gimg": "images/googlebtn.png", "galt": "Get it on Google Play", "alink": "#", "aimg": "images/appbtn.png", "aalt": "Download on the App Store", "bottomtext1": "DESIGN", "bottomtext2": "MOBILE"},
        {"imgsrc": "images/2.3.jpg", "imgalt": "project image", "overlaytitle": "Trim", "overlaytext": "Find specialist, book on specific date, be specialist. Handy interface, enormous functionality.", "overlayhref": "https://trim.mobi/", "overlaylink": "www.trim.mobi", "glink": "#", "gimg": "images/googlebtn.png", "galt": "Get it on Google Play", "alink": "#", "aimg": "images/appbtn.png", "aalt": "Download on the App Store", "bottomtext1": "DESIGN", "bottomtext2": "MOBILE"},
        {"imgsrc": "images/2.4.jpg", "imgalt": "project image", "overlaytitle": "Trim", "overlaytext": "Find specialist, book on specific date, be specialist. Handy interface, enormous functionality.", "overlayhref": "https://trim.mobi/", "overlaylink": "www.trim.mobi", "glink": "#", "gimg": "images/googlebtn.png", "galt": "Get it on Google Play", "alink": "#", "aimg": "images/appbtn.png", "aalt": "Download on the App Store", "bottomtext1": "DESIGN", "bottomtext2": "MOBILE"},
        {"imgsrc": "images/2.5.jpg", "imgalt": "project image", "overlaytitle": "Trim", "overlaytext": "Find specialist, book on specific date, be specialist. Handy interface, enormous functionality.", "overlayhref": "https://trim.mobi/", "overlaylink": "www.trim.mobi", "glink": "#", "gimg": "images/googlebtn.png", "galt": "Get it on Google Play", "alink": "#", "aimg": "images/appbtn.png", "aalt": "Download on the App Store", "bottomtext1": "DESIGN", "bottomtext2": "MOBILE"},
        {"imgsrc": "images/2.6.jpg", "imgalt": "project image", "overlaytitle": "Trim", "overlaytext": "Find specialist, book on specific date, be specialist. Handy interface, enormous functionality.", "overlayhref": "https://trim.mobi/", "overlaylink": "www.trim.mobi", "glink": "#", "gimg": "images/googlebtn.png", "galt": "Get it on Google Play", "alink": "#", "aimg": "images/appbtn.png", "aalt": "Download on the App Store", "bottomtext1": "DESIGN", "bottomtext2": "MOBILE"},
        {"imgsrc": "images/2.7.jpg", "imgalt": "project image", "overlaytitle": "Trim", "overlaytext": "Find specialist, book on specific date, be specialist. Handy interface, enormous functionality.", "overlayhref": "https://trim.mobi/", "overlaylink": "www.trim.mobi", "glink": "#", "gimg": "images/googlebtn.png", "galt": "Get it on Google Play", "alink": "#", "aimg": "images/appbtn.png", "aalt": "Download on the App Store", "bottomtext1": "DESIGN", "bottomtext2": "MOBILE"},
        {"imgsrc": "images/2.8.jpg", "imgalt": "project image", "overlaytitle": "Trim", "overlaytext": "Find specialist, book on specific date, be specialist. Handy interface, enormous functionality.", "overlayhref": "https://trim.mobi/", "overlaylink": "www.trim.mobi", "glink": "#", "gimg": "images/googlebtn.png", "galt": "Get it on Google Play", "alink": "#", "aimg": "images/appbtn.png", "aalt": "Download on the App Store", "bottomtext1": "DESIGN", "bottomtext2": "MOBILE"},
        {"imgsrc": "images/2.9.jpg", "imgalt": "project image", "overlaytitle": "Trim", "overlaytext": "Find specialist, book on specific date, be specialist. Handy interface, enormous functionality.", "overlayhref": "https://trim.mobi/", "overlaylink": "www.trim.mobi", "glink": "#", "gimg": "images/googlebtn.png", "galt": "Get it on Google Play", "alink": "#", "aimg": "images/appbtn.png", "aalt": "Download on the App Store", "bottomtext1": "DESIGN", "bottomtext2": "MOBILE"},
        {"imgsrc": "images/2.10.jpg", "imgalt": "project image", "overlaytitle": "Trim", "overlaytext": "Find specialist, book on specific date, be specialist. Handy interface, enormous functionality.", "overlayhref": "https://trim.mobi/", "overlaylink": "www.trim.mobi", "glink": "#", "gimg": "images/googlebtn.png", "galt": "Get it on Google Play", "alink": "#", "aimg": "images/appbtn.png", "aalt": "Download on the App Store", "bottomtext1": "DESIGN", "bottomtext2": "MOBILE"},
    ],
    "promobottomtitle": "Have an idea?",
    "promobottomtext": "Let's turn it into real project!",
    "contacts": [
        {"country": "USA", "city": "San Francisco", "st": "222 Kearny Street", "suite": "Suite 179", "zip": "CA 94108", "tel": "+1-575-345-3515"},
        {"country": "Israel", "city": "Jerusalem", "st": "222 Kearny Street", "suite": "Suite 179", "zip": "CA 94108", "tel": "+38 (057) 766 00 97"},
        {"country": "Ukraine", "city": "Kharkiv", "st": "192a Klochkovskaya Street", "suite": "Suite 503", "zip": "61145", "tel": "+38 (057) 766 00 97"}
    ],
    "contactsbtn": "Online chart",
    "email": "hello@brander.ua",
    "skype": "brander.ua"
});


document.body.appendChild(container.elem);
