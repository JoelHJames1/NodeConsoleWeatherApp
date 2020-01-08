const request = require("request");
const argv = require('yargs').argv;

let apiKey = '2019f6e90de49794bd4f188e99f1d6a5';
let city = argv.c || 'Tokyo';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
    if(err) {
        console.log('error:', error);
    }else {
        //console.log('body:', body);

        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
});

