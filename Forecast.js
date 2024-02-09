import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import { useWeatherContext } from "./WeatherContext.js";
import { fetchWeatherForecast } from "./weather.js";
import wind from "./assets/wind.png";
import drop from "./assets/drop.png";
import sunset from "./assets/sunset.png";
import { weatherImages } from "./constants.js";

// Forecast component displays current weather information
export default function Forecast() {
  const { location } = useWeatherContext();

  // State to hold additional weather data and current temperature and condition
  const [additionalData, setAdditionalData] = useState({
    windSpeed: "0",
    precipitation: "0",
    sunsetTime: "7:15 PM",
  });
  const [temperature, setTemperature] = useState("0");
  const [condition, setCondition] = useState("Unknown");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch weather data based on the location
        const data = await fetchWeatherForecast({
          cityName: location?.name,
          days: 1,
        });

        // Extract current weather and forecast data
        const currentWeather = data?.current;
        const forecast = data?.forecast?.forecastday[0];

        if (currentWeather && forecast) {
          // Update additional weather data state
          setAdditionalData({
            windSpeed: currentWeather.wind_mph.toString() || "0",
            precipitation: currentWeather.precip_in.toString() || "0",
            sunsetTime: forecast.astro?.sunset || "7:15 PM",
          });

          // Update temperature and condition states
          setTemperature(currentWeather.temp_f.toString() || "0");
          setCondition(currentWeather.condition?.text || "Unknown");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error.message);
      }
    };

    // Fetch data when the location changes
    fetchData();
  }, [location]);

  return (
    <View
      style={{
        marginLeft: 4,
        marginRight: 4,
        flex: 1,
        justifyContent: "space-around",
      }}
    >
      {/* Text that shows the current location's name */}
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 24,
          fontWeight: "bold",
          bottom: 200,
        }}
      >
        {location?.name}, {location?.country}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {/* Image that shows the current condition at the location */}
        <Image
          source={weatherImages[condition]}
          style={{ height: 100, width: 100, bottom: 200 }}
        />
      </View>
      <View style={{ marginBottom: 8 }}>
        {/* Text that shows the current temperature at the location */}
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            fontSize: 32,
            bottom: 200,
          }}
        >
          {temperature}&#176;F
        </Text>
        {/* Text that shows the description of the condition at the current location */}
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            fontSize: 22,
            bottom: 170,
          }}
        >
          {condition}
        </Text>
      </View>
      {/* Styles the row of additional conditions for the day */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 16,
        }}
      >
        {/* Shows the current wind speed */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 2,
            bottom: 150,
          }}
        >
          <Image source={wind} style={{ height: 35, width: 35 }} />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
              padding: 10,
            }}
          >
            {additionalData.windSpeed} mph
          </Text>
        </View>
        {/* Shows the current precipitation percentage */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 2,
            bottom: 150,
          }}
        >
          <Image source={drop} style={{ height: 35, width: 35 }} />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
              padding: 10,
            }}
          >
            {additionalData.precipitation} in.
          </Text>
        </View>
        {/* Shows the sunset time at the location */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 2,
            bottom: 150,
          }}
        >
          <Image source={sunset} style={{ height: 45, width: 45 }} />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
              padding: 10,
            }}
          >
            {additionalData.sunsetTime}
          </Text>
        </View>
      </View>
    </View>
  );
}
