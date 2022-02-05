'use strict';

const meizMei_dayOfWeek = (function () {
    const dow = ['sun', 'mon', 'tue', 'wend', 'thurs', 'fri'];
    return {
        getDowIndex: (dowName) => dow.findIndex(m => m.toLowerCase() === dowName.toLowerCase()) + 1,
        getDowName: (index) => dow[index - 1]
    };
}());

console.log(meizMei_dayOfWeek.getDowIndex('Thurs'));
console.log(meizMei_dayOfWeek.getDowName(5));



const meizMei_interestCalc = (function () {
    function setYears (year){
     this.year = year;
     return year;
    }
    function setRate(rate) {
        this.rate =rate;
        return rate;
    }
    function calculate(amount){
       const x = this.rate;
       const y = this.year;
       return amount*x*y;
    }
    return {
        setRate:setRate,
        setYears:setYears,
        calculate:calculate
    };
}());



let trial = meizMei_interestCalc;
console.log(trial.setRate(.1));
console.log(trial.setYears(5));
console.log(trial.calculate(750.00));
console.log(trial,typeof trial);
let real = meizMei_interestCalc;
real.setYears(6);
real.setRate(.03);
console.log(real.calculate(26000.00));


