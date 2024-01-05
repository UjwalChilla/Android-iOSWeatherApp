import React, { useCallback, useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { debounce } from "lodash";
import { fetchLocations, fetchWeatherForecast } from "./weather.js";
import { useWeatherContext } from "./WeatherContext";

// CitySearch component for handling city searches
export default function CitySearch() {
  // Accessing context values for weather and location
  const { setWeather, setLocation } = useWeatherContext();
  // State to manage the visibility of search results
  const [showSearch, toggleSearch] = useState(false);
  // State to store location search results
  const [locations, setLocations] = useState([]);

  // Handle selecting a location from the search results
  const handleLocation = (loc) => {
    setLocations([]);
    toggleSearch(false);

    // Fetch weather data for the selected location
    fetchWeatherForecast({
      cityName: loc.name,
      days: "7",
    }).then((data) => {
      // Update weather data in the context
      setWeather(data);

      // Update location data in the context
      setLocation({
        name: loc.name,
        country: loc.country,
      });

      console.log("got forecast: ", data);
    });
  };

  // Handle searching for locations based on user input
  const handleSearch = (value) => {
    if (value.length > 2) {
      // Fetch location data based on the user input
      fetchLocations({ cityName: value }).then((data) => {
        console.log("get locations: ", data);
        setLocations(data);
      });
    }
  };

  // Debounce the handleSearch function to prevent rapid API calls
  const handleTextDebounce = useCallback(debounce(handleSearch, 200), []);

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 16,
        marginTop: 10,
        position: "relative",
        paddingTop: 30,
        zIndex: 50,
      }}
    >
      {/* Styles for the search bar */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 25,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        {/* Styles for the text inside search bar */}
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder="Enter City Name"
          placeholderTextColor="lightgray"
          style={{
            flex: 1,
            paddingLeft: 16,
            fontSize: 16,
            color: "white",
          }}
        />

        {/* Magnifying glass icon inside search bar */}
        <TouchableOpacity
          // On press, toggle the visibility of search results
          onPress={() => toggleSearch(!showSearch)}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: 50,
            padding: 10,
            margin: 2,
          }}
        >
          <MagnifyingGlassIcon size={25} color="white" />
        </TouchableOpacity>
      </View>

      {/* If the search bar is clicked, the locations will show */}
      {locations.length > 0 && showSearch ? (
        <View
          style={{
            position: "absolute",
            width: "100%",
            backgroundColor: "rgb(224,224,224)",
            top: 50,
            borderRadius: 20,
            padding: 10,
          }}
        >
          {locations.map((loc, index) => {
            const showBorder = index + 1 !== locations.length;
            const borderStyle = showBorder
              ? { borderBottomWidth: 2, borderBottomColor: "gray" }
              : {};

            return (
              // Shows the different locations when typing and also styles the search results
              <TouchableOpacity
                onPress={() => handleLocation(loc)}
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                  marginBottom: 5,
                  ...borderStyle, // include border styles
                }}
              >
                <Text style={{ color: "black", fontSize: 16, marginLeft: 8 }}>
                  {loc?.name}, {loc?.country}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}
