// Import necessary React modules
import React, { createContext, useContext, useState } from "react";

// Create a context to manage weather-related state
const WeatherContext = createContext();

// Custom hook to conveniently access the WeatherContext values
export const useWeatherContext = () => useContext(WeatherContext);

// WeatherProvider component to wrap the application with the context
export const WeatherProvider = ({ children }) => {
  // State variables for weather data, current conditions, and location
  const [weather, setWeather] = useState({});
  const [current, setCurrent] = useState({});
  const [location, setLocation] = useState({});

  // Provide the state values through the context
  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        current,
        location,
        setCurrent,
        setLocation,
      }}
    >
      {/* Render the child components within the context provider */}
      {children}
    </WeatherContext.Provider>
  );
};
