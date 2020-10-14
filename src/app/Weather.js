export class Weather {
    constructor(city,countryCode) {
        this.apikey = '087e243db739ba1f5e38673ad3c18a40'
        this.city = city;
        this.countryCode = countryCode
    }
    async getWeather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`
        const response = await fetch(URI)
        const data = await response.json()
        return data
    }
}