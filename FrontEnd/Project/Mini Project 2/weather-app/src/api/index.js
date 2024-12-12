
const url = 'https://api.weatherapi.com/v1/current.json?key=d20b9f754c81482795264917241212&q=London&aqi=no'
export const getWeatherDataForCity = async (city)=>{
    const response = await fetch(`${url}&q=${city}&aqi=yes`)
 return await response.json()
}