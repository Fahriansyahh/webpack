//! pengunaan mengunakan nodejs webpack
//! catatan penting dalam pemanggilan require terkadang function berbeda dengan object
//! ketika require mengunakan {} berbeda dengan mengunakan non objecttergantung sifat module yang di exports
const run = require("./app/app")

const AlertService = require('./app/alert.service')
const CalculatorService = require('./app/calculator.service')
const JokesService = require('./app/jokes.service')
const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();
run(alertService, calculatorService, jokesService);
