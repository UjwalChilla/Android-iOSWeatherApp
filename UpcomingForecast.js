import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { fetchWeatherForecast } from "./weather.js";
import { useWeatherContext } from "./WeatherContext.js";
import { weatherImages } from "./constants.js";

export default function UpcomingForecast() {
  // State to store the fetched forecast data
  const [forecastData, setForecastData] = useState([]);

  // Access the location from the weather context
  const { location } = useWeatherContext();

  // Days of the week to display in the forecast
  const [dayList] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]);

  // Fetch weather forecast data when the component mounts or location changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch weather forecast data from the API
        const data = await fetchWeatherForecast({
          cityName: location?.name,
          days: 5, // Fetch extra days to handle rolling display
        });

        // Check if the API response has the expected structure
        if (data && data.forecast && data.forecast.forecastday) {
          // Slice the data to get the rolling 7-day forecast
          const slicedData = data.forecast.forecastday.slice(0, 5);

          // Update the forecast data state
          setForecastData(slicedData);
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
        {forecastData.map((item, index) => {
          // Extract day name for tomorrow's date
          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + index + 1); // Increment index by 1 to start from tomorrow
          const options = { weekday: "long" };
          let dayName = tomorrow.toLocaleDateString("en-US", options);
          dayName = dayName.split(",")[0];

          console.log("Index:", index, "Day Name:", dayName, "Item:", item); // Add this line for debugging

          return (
            <View
              key={index}
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 130,
                height: 150,
                borderRadius: 20,
                paddingHorizontal: 15,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                marginRight: 4,
              }}
            >
              {/* Display the weather condition image based on the condition text */}
              <Image
                source={weatherImages[item?.day?.condition?.text]}
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
                {dayName}
              </Text>

              {/* Display the average temperature for the day */}
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                {item?.day?.avgtemp_f}&#176;F
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
