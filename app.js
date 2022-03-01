const API_Key = `dcb232ebf34cc8accace5ab08e1916e3`;

const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const displayTemperature = (temperature) => {
  console.log(temperature);
};
