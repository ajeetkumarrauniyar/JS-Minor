const api_key = "64c12e0b67ad52964dc726990895eb00";
let city = document.querySelector(".search-bar input");
let searchBtn = document.querySelector(".search-bar button");

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

const now = new Date();

function getCurrentTimeIn12HourFormat() {
  let hours = now.getHours();
  const minutes = now.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;

  const strTime = hours + ":" + minutesStr + " " + ampm;
  return strTime;
}
currentTime.innerHTML = getCurrentTimeIn12HourFormat();

function getTodayDayAndDate() {
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
}

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
const checkWeather = async () => {
  const cityName = city.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?&q=${cityName}&appid=${api_key}&units=metric`;

  try {
    const response = await fetch(url);
    let data = await response.json();

    if (data.cod === 200) {
      locationName.innerHTML = data.name;

      temp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
      feelsLike.innerHTML = `${Math.round(data.main.feels_like)}&deg;C`;

      humidityPercent.innerHTML = `Humidity: ${data.main.humidity}%`;
      windSpeed.innerHTML = `Wind: ${parseInt(data.wind.speed)} km/h`;

      const options = { hour: '2-digit', minute: '2-digit', hour12: true };
      sunRise.innerHTML = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString([], options)}`;
      sunSet.innerHTML = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString([], options)}`;

      setWeatherIcon(data.weather[0].main);

      console.log(data);
    } else {
      alert(`City not found: ${cityName}`);
    }

    document.querySelector(".row-secondary-card").style.display = "block";
    document.querySelector(".row-last").style.display = "block";
  } catch (error) {
    console.log(error);
  }
};

searchBtn.addEventListener("click", () => {
  checkWeather();
});
