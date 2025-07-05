document.getElementById('searchBtn').addEventListener('click', async () => {
    const cityInput = document.getElementById('cityInput').value.trim();
    const apiKey = '7164333765eb7f9f01c5c7a56ef57b8f'; 
    const weatherInfo = document.getElementById('weatherInfo');

    if (!cityInput) {
        alert('Please enter a city name.');
        return;
    }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();

        document.getElementById('cityName').innerText = `Weather in ${data.name}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
        document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;
        weatherInfo.style.display = 'block';
    } catch (error) {
        alert(error.message);
    }
});
