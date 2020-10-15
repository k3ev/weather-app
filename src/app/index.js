require('./index.css')
const { Weather } = require('./Weather')
const { UI } = require('./UI')

const weather = new Weather('London','uk')
const ui = new UI()

async function fetchWeather() {
    const data = await weather.getWeather()
    console.log(data)
    console.log(data.main.temp)
    ui.render(data)
}

document.addEventListener('DOMContentLoaded', fetchWeather)