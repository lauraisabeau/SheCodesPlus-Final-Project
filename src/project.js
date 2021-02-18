/// topic: date and time
let now = new Date();
let currentDateElement = document.querySelector("#current-date");
let currentTimeElement = document.querySelector("#current-time");


let currentDate = now.getDate();
let months = [
  "January",
  "February",
  "March",
  "April",
  "Mai",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let currentDay = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let month = months[now.getMonth()];
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();

currentDateElement.innerHTML = `${day}, ${currentDate}. ${month} ${year}`;
currentTimeElement.innerHTML = `${hours}:${minutes}`;

/// topic: search engine and button




/// topic: current location button 

function showTempHere(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let location = response.data.name;
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${temperature}`;
}

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let showLat = position.coords.latitude;
  let showLon = position.coords.longitude;
  let units = "metric";
  let apiKey = "a095f37b87fedfd0dd2e2a626d41cf7d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${showLat}&lon=${showLon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTempHere);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentLocationButton = document.querySelector("#location-button");
currentLocationButton.addEventListener("click", getPosition);
