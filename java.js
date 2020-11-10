var cityName = "Sacramento"
// document.getElementById('city')
var temperature = document.getElementById('temp')
var humid = document.getElementById('humidity')
var wind = document.getElementById('windSpeed')
var UV = document.getElementById('UVindexv')

var APIkey = "78f3b7689f727f12bb59243633b69084"
var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIkey

function getWeather() {

    var APIkey = "78f3b7689f727f12bb59243633b69084"
    var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIkey
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        console.log(url)
    })
}

getWeather();
