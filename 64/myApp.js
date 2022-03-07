window.myApp = window.myApp || {};

window.myApp.b = (function () {
    'use strict';
    const dow = ['sun', 'mon', 'tue', 'wend', 'thurs', 'fri'];
    const getDowIndex = (dowName) => dow.findIndex(m => m.toLowerCase() === dowName.toLowerCase()) + 1;
    const getDowName = (index) => dow[index - 1];
    return{
        getDowIndex,getDowName
    };


}());