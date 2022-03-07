window.myApp = window.myApp || {};

window.myApp.a = (function () {
    'use strict';
    return {
        stringCaseInsensitiveEquals: (one, two) => one.toLowerCase() === two.toLowerCase()
    };


}());