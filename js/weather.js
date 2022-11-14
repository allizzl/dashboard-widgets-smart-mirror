const APIKEY = "d358027f435b36e2d8fd3af2b1bae2e3";
// City
const city = "Spokane";
// Units for Farenheit
const units = "imperial";

// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;

// Using fetch to get data
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Check-check: Is data good?
    console.log(data);

    // Get Container for Weather
    const weatherContainer = document.querySelector(".weather");

    // Template to output
    const template = `
    <h1>Weather</h1>
    <data value="${data.name}" class="city">${data.name}</data>
    <data value="${data.main.temp}" class="temp">${data.main.temp}&#8457;</data>
    <data value="${data.main.feels_like}" class="feelslike">${data.main.feels_like}</data>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Placeholder">
  `;

    // Insert dynamic template to container
    weatherContainer.insertAdjacentHTML("afterbegin", template);
  });
