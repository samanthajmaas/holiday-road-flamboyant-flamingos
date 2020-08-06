import keyObj from "../Settings.js"

let weather = []

export const useWeatherCopy = () => {
    return weather.slice()
}

export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Nashville&cnt=7&appid=${keyObj.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
        })
}
