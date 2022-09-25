let apiKey = "1e3dbdc7f40fe05d77910ebef7bfd128";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=" +
  apiKey +
  "&units=metric";

function showTemperature(response) {
  console.log(response.data);
  let currentTemp = Math.round(response.data.main.temp);
  console.log(currentTemp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = "it is " + currentTemp + " degrees in Sydney";
}
axios.get(apiUrl).then(showTemperature);
