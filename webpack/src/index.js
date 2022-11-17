//! pengunaan mengunakan nodejs webpack
//! catatan penting dalam pemanggilan require terkadang function berbeda dengan object
//! ketika require mengunakan {} berbeda dengan mengunakan non objecttergantung sifat module yang di exports
require("./main")
require("./lodash")

const _ = require('lodash');
const css = require('./style.scss')
const run = require("./app/app")
const AlertService = require('./app/alert.service')
const CalculatorService = require('./app/calculator.service')
const JokesService = require('./app/jokes.service')
const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();
run(alertService, calculatorService, jokesService);

const users = [
    { 'user': 'barney', 'aasdsa': 36, 'active': true },
    { 'user': 'fred', 'adsadsa': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];
const dt = _.filter(users, ['active', false])
console.log(dt);