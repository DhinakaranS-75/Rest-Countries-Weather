function getWeather(country) {
    // Fetch Rest Countries API
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then(response => response.json())
      .then(data => {
        const countryData = data[0];
        const capital = countryData.capital;
        const region = countryData.region;
        const latlng = countryData.latlng;
        const name = countryData.name.common;
        const flag = countryData.flags.png;
        const countryCodes = Object.keys(countryData.cca2);
        
        // Update HTML elements with Rest Countries API data
        document.getElementById(`${country}-capital`).textContent = capital;
        document.getElementById(`${country}-region`).textContent = region;
        document.getElementById(`${country}-latlng`).textContent = latlng;
        document.getElementById(`${country}-name`).textContent = name;
        document.getElementById(`${country}-flag`).src = flag;
        document.getElementById(`${country}-country-codes`).textContent = countryCodes.join(', ');
  
        // Fetch OpenWeatherMap API using the latlng data
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=YOUR_API_KEY`)
          .then(response => response.json())
          .then(weatherData => {
            // Process weatherData and update the necessary HTML elements
            // ...
          })
          .catch(error => console.log('Error fetching weather data:', error));
      })
      .catch(error => console.log('Error fetching country data:', error));
  }
  