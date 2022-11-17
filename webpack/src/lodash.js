const _ = require('lodash');


var users = [
    { 'user': 'barney', 'aasdsa': 36, 'active': true },
    { 'user': 'fred', 'adsadsa': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];
const dt = _.filter(users, ['active', true])
console.log(dt);
_.reject(users, { 'age': 36, 'active': true });
const ad = _.delay(function () {
    console.log("hiassadasd");
}, 0, 'later');
console.log(ad);