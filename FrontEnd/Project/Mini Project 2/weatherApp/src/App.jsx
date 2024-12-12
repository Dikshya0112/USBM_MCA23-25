import React, { useState } from 'react';
import './App.css'; // Optional CSS file for styling

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '2c1c5c452361986a46aba88b9d56ecfb'; // Replace with your API key

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="app bg-blue-100 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Weather App</h1>
      <form onSubmit={handleSearch} className="flex flex-col items-center gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-blue-500 font-semibold mt-4">Loading...</p>}
      {error && <p className="text-red-500 font-semibold mt-4">Error: {error}</p>}

      {weather && (
        <div className="weather-info bg-white shadow-md rounded p-6 mt-6 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">{weather.name}, {weather.sys.country}</h2>
          <p className="text-lg">Temperature: <span className="font-semibold">{weather.main.temp}°C</span></p>
          <p className="text-lg">Weather: <span className="font-semibold">{weather.weather[0].description}</span></p>
          <p className="text-lg">Humidity: <span className="font-semibold">{weather.main.humidity}%</span></p>
          <p className="text-lg">Wind Speed: <span className="font-semibold">{weather.wind.speed} m/s</span></p>
        </div>
      )}
    </div>
  );
};

export default App;
