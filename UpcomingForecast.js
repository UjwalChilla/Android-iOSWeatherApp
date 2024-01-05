import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { fetchWeatherForecast } from "./weather.js";
import { useWeatherContext } from "./WeatherContext.js";
import { weatherImages } from "./constants.js";

// UpcomingForecast component displays the forecast for the next 7 days
export default function UpcomingForecast() {
  const [forecastData, setForecastData] = useState([]);
  const { location } = useWeatherContext();
  const [dayList] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]);

  // useEffect to fetch weather forecast data when the location changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch weather forecast data from the API
        const data = await fetchWeatherForecast({
          cityName: location?.name,
          days: 7,
        });

        console.log("Upcoming Forecast API Response:", data);

        // Check if the API response has the expected structure
        if (data && data.forecast && data.forecast.forecastday) {
          // Update the forecast data state
          setForecastData(data.forecast.forecastday);
        } else {
          console.warn("Invalid data structure in API response.");
        }
      } catch (error) {
        console.error("Upcoming Forecast API Errors:", error);
      }
    };

    // Call the fetchData function when the location changes
    fetchData();
  }, [location]);

  return (
    <View style={{ marginBottom: 2, marginHorizontal: 15, marginTop: 3 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Map through the forecast data and render each day's forecast */}
        {forecastData.map((day, index) => (
          <View
            key={index}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 130,
              height: 150,
              borderRadius: 20,
              paddingVertical: 10,
              paddingHorizontal: 15,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              marginRight: 4,
            }}
          >
            {/* Display the weather condition image based on the condition text */}
            <Image
              source={weatherImages[day?.day?.condition.text]}
              style={{ height: 40, width: 40 }}
            />

            {/* Display the day of the week */}
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 17,
                marginTop: 4,
              }}
            >
              {dayList[index]}
            </Text>

            {/* Display the average temperature for the day */}
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              {day.day?.avgtemp_f
                ? `${day.day.avgtemp_f}°F`
                : "Unknown Temperature"}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
