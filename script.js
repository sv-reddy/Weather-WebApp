document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.weatherForm');
  const cityNameInput = document.querySelector('.cityname');
  const cityDisplay = document.querySelector('.cityDisplay');
  const tempDisplay = document.querySelector('.temp');
  const humidityDisplay = document.querySelector('.humidity');
  const skyDisplay = document.querySelector('.sky');
  const emojiDisplay = document.querySelector('.emoji');
  const errorDisplay = document.querySelector('.errorDisplay');
  const card = document.querySelector('.card');

  function getWeatherEmoji(weatherType) {
    switch (weatherType) {
      case 'Clear': return '☀️';
      case 'Clouds': return '☁️';
      case 'Rain': return '🌧️';
      case 'Snow': return '❄️';
      case 'Thunderstorm': return '⛈️';
      case 'Drizzle': return '🌦️';
      case 'Mist': return '🌫️';
      case 'Haze': return '🌫️';
      default: return '❓';
    }
  }

  async function fetchWeatherData(cityName) {
    const apiKey = 'API_KEY'; // Replace with YOUR valid API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const text = await response.text();

    try {
      const data = JSON.parse(text);
      if (response.ok) {
        return data;
      } else {
        throw new Error(data.message || 'API error');
      }
    } catch (err) {
      console.error("Invalid response format:", text);
      throw err;
    }
  }

  function updateWeatherUI(data) {
    cityDisplay.textContent = data.name;
    tempDisplay.textContent = `${data.main.temp}°C`;
    humidityDisplay.textContent = `Humidity: ${data.main.humidity}%`;
    skyDisplay.textContent = data.weather[0].description;
    emojiDisplay.textContent = getWeatherEmoji(data.weather[0].main);
    card.style.display = 'flex';
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const cityName = cityNameInput.value.trim();

    if (cityName === '') {
      errorDisplay.textContent = 'Please enter a city';
      errorDisplay.style.display = 'block';
      card.style.display = 'none';
      return;
    }

    errorDisplay.style.display = 'none';

    try {
      const weatherData = await fetchWeatherData(cityName);
      updateWeatherUI(weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      errorDisplay.textContent = 'City not found. Try again.';
      errorDisplay.style.display = 'block';
      card.style.display = 'none';
    }

    cityNameInput.value = "";
  });
});
