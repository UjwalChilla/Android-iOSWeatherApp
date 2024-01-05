import React from "react";
import { WeatherProvider } from "./WeatherContext";
import HomeScreen from "./HomeScreen";

// App component serves as the entry point of the application
// It wraps the main content (HomeScreen) with the WeatherProvider to provide weather-related data to the app
export default function App() {
  return (
    <WeatherProvider>
      {/* HomeScreen is the main screen component that displays weather information */}
      <HomeScreen />
    </WeatherProvider>
  );
}
