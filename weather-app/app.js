const request = require("request");
const url = `http://api.weatherstack.com/current?access_key=807629b3ddc147d53ad2b5fb4dead730&query=37.8267,-122.4233&unitys=m`;
request({ url: url, json: true }, (error, response) => {
  const temperature = response.body.current.temperature;
  const feelsLike = response.body.current.feelslike;
  const weatherDescription = response.body.current.weather_descriptions[0];
  console.log(
    ` The New Beache's temperature is: ${temperature}  but it feels like ${feelsLike}. \n The weather is ${weatherDescription} `
  );
});
