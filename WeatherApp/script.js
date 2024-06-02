const api_key = "64c12e0b67ad52964dc726990895eb00";
let city = document.querySelector(".search-bar input");
let searchBtn = document.querySelector(".search-bar button");
let currentLocationBtn = document.querySelector("#location-btn");

let locationName = document.querySelector(".location");
let currentTime = document.querySelector(".time");
let currentDay = document.querySelector(".date");
let temp = document.querySelector(".temperature");
let feelsLike = document.querySelector(".feels-like");
let humidityPercent = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");
let sunRise = document.querySelector(".sunrise");
let sunSet = document.querySelector(".sunset");

let iconWeather = document.querySelector("#weather-icon");
let weatherType = document.querySelector(".type-of-weather");

let highTemp = document.querySelector(".high");
let lowTemp = document.querySelector(".low");

const now = new Date();

const getCurrentTimeIn12HourFormat = () => {
  let hours = now.getHours();
  const minutes = now.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;

  const strTime = hours + ":" + minutesStr + " " + ampm;
  return strTime;
};
currentTime.innerHTML = getCurrentTimeIn12HourFormat();

const getTodayDayAndDate = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = weekday[now.getDay()];

  let date = now.getDate();
  let month = months[now.getMonth()];

  const dayAndDate = `${day}, ${date}, ${month}`;
  return dayAndDate;
};

currentDay.innerHTML = getTodayDayAndDate();

const setWeatherIcon = (weatherMain) => {
  switch (weatherMain) {
    case "Clear":
      iconWeather.src = "./images/clear.png";
      weatherType.innerHTML = "Clear";
      break;
    case "Clouds":
      iconWeather.src = "./images/clouds.png";
      weatherType.innerHTML = "Clouds";
      break;
    case "Drizzle":
      iconWeather.src = "./images/drizzle.png";
      weatherType.innerHTML = "Drizzle";
      break;
    case "Humidity":
      iconWeather.src = "./images/humidity.png";
      weatherType.innerHTML = "Humidity";
      break;
    case "Mist":
      iconWeather.src = "./images/mist.png";
      weatherType.innerHTML = "Mist";
      break;
    case "Rain":
      iconWeather.src = "./images/rain.png";
      weatherType.innerHTML = "Rain";
      break;
    case "Snow":
      iconWeather.src = "./images/snow.png";
      weatherType.innerHTML = "Snow";
      break;
    case "Wind":
      iconWeather.src = "./images/wind.png";
      weatherType.innerHTML = "Wind";
      break;
    default:
      iconWeather.src = "./images/clear.png";
      weatherType.innerHTML = "Clear";
      break;
  }
};

const extractNameInParentheses = (cityName) => {
  const matches = cityName.match(/\(([^)]+)\)/);
  return matches ? matches[1] : cityName;
};

const checkWeather = async () => {
  const cityName = city.value;
  const extractedCityName = extractNameInParentheses(cityName);
  const url = `https://api.openweathermap.org/data/2.5/weather?&q=${extractedCityName}&appid=${api_key}&units=metric`;

  try {
    const response = await fetch(url);
    let data = await response.json();

    if (data.cod === 200) {
      locationName.innerHTML = data.name;

      temp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
      feelsLike.innerHTML = `${Math.round(data.main.feels_like)}&deg;C`;

      humidityPercent.innerHTML = `Humidity: ${data.main.humidity}%`;
      windSpeed.innerHTML = `Wind: ${Math.round(data.wind.speed)} km/h`;

      const options = { hour: "2-digit", minute: "2-digit", hour12: true };
      sunRise.innerHTML = `Sunrise: ${new Date(
        data.sys.sunrise * 1000
      ).toLocaleTimeString([], options)}`;
      sunSet.innerHTML = `Sunset: ${new Date(
        data.sys.sunset * 1000
      ).toLocaleTimeString([], options)}`;

      setWeatherIcon(data.weather[0].main);
    } else {
      alert(`City not found: ${cityName}`);
    }

    document.querySelector(".row-secondary-card").style.display = "block";
    document.querySelector(".row-last").style.display = "block";
  } catch (error) {
    console.log(error);
  }
};

const dailyForecast = async () => {
  const cityName = city.value;
  const extractedCityName = extractNameInParentheses(cityName);
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${extractedCityName}&appid=${api_key}&units=metric`;

  try {
    const response = await fetch(forecastUrl);
    const data = await response.json();

    highTemp.innerHTML = `${Math.round(data.list[0].main.temp_max)}&deg;C`;
    lowTemp.innerHTML = `${Math.round(data.list[0].main.temp_min)}&deg;C`;
  } catch (error) {
    console.log(error);
  }
};

//TODO:
const hourlyForecast = () => {};

searchBtn.addEventListener("click", () => {
  checkWeather();
  dailyForecast();
});

const locationFound = (position) => {
  const coords = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
  geolocation(coords);
};

const locationNotFound = (error) => {
  console.log(error);
};

const options = {
  enableHighAccuracy: true,
  timeout: 10000,
};

// Get the current position once
navigator.geolocation.getCurrentPosition(
  locationFound,
  locationNotFound,
  options
);

const locationId = navigator.geolocation.watchPosition(
  locationFound,
  locationNotFound
);

const geolocation = async (coords) => {
  try {
    const locationUrl = `http://api.openweathermap.org/geo/1.0/reverse?${coords}&appid=${api_key}`;
    console.log(locationUrl);
    const response = await fetch(locationUrl);
    const data = await response.json();
    const geolocationName = data[0].name;
    city.value = geolocationName;
    checkWeather(geolocationName);
    dailyForecast(geolocationName);
  } catch (error) {
    console.log(error);
  }
};

// Get the current position once
currentLocationBtn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    locationFound,
    locationNotFound,
    options
  );
});

setTimeout(() => {
  navigator.geolocation.clearWatch(locationId);
  console.log("Stopped watching position.");
}, 60000);
