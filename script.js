// Function to fetch country data from the rest countries API
function fetchCountryData() {
    fetch('https://restcountries.com/v2/all')
      .then((response) => response.json())
      .then((data) => {
        // Select a random country from the response
        const randomCountry = data[Math.floor(Math.random() * data.length)];
  
        // Display the country information in the card
        document.getElementById('capital').textContent = `Capital: ${randomCountry.capital}`;
        document.getElementById('region').textContent = `Region: ${randomCountry.region}`;
        document.getElementById('latlng').textContent = `Latitude, Longitude: ${randomCountry.latlng[0]}, ${randomCountry.latlng[1]}`;
        document.getElementById('name').textContent = `Name: ${randomCountry.name}`;
        document.getElementById('flag').src = randomCountry.flags.svg;
        document.getElementById('countryCode').textContent = `Country Code: ${randomCountry.alpha2Code}`;
        
        // Fetch weather data for the selected country
        fetchWeatherData(randomCountry.latlng[0], randomCountry.latlng[1]);
      })
      .catch((error) => console.log(error));
  }
  
  // Function to fetch weather data from the OpenWeatherMap API
  function fetchWeatherData(latitude, longitude) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Display the weather information in the card
        document.getElementById('weather').textContent = `Weather: ${data.weather[0].description}`;
      })
      .catch((error) => console.log(error));
  }
  
  // Call the fetchCountryData function when the page loads
  window.addEventListener('load', fetchCountryData);
  