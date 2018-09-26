const yargs = require("yargs");
const geocode = require("./geocode");
const axios = require("axios");

const API_KEY = "";
const WEATHER_API_KEY = "";

const argv = yargs
  .options({
    a: {
      alias: "address",
      demand: true,
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;
if (!argv.address) {
  console.error("No address!");
}

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${API_KEY}`;

axios
  .get(geocodeUrl)
  .then(response => {
    if (response.data.status === "ZERO_RESULTS") {
      throw new Error("Unable to find that address");
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${WEATHER_API_KEY}/${lat},${lng}`;
    return axios(weatherUrl);
  })
  .then(response => {
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;

    console.log(
      `It's currently ${temperature}. It feels like ${apparentTemperature}`
    );
  })
  .catch(error => {
    if (error.code === "ENOTFOUND") {
      console.log("Unable to connect to API servers");
    } else {
      console.log(error.message);
    }
  });
