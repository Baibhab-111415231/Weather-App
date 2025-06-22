async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "ddc9ce6c24c80bd44a4dfd86aa2f4356";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById("weatherResult").innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡️ Temperature: ${data.main.temp} °C</p>
      <p>☁️ Weather: ${data.weather[0].description}</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
  } else {
    document.getElementById("weatherResult").innerHTML = `<p>City not found. Please try again.</p>`;
  }
}
