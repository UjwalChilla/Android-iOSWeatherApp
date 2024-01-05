import React from "react";
import { View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BackgroundImage from "./BackgroundImage.js";
import CitySearch from "./CitySearch.js";
import Forecast from "./Forecast.js";
import UpcomingForecast from "./UpcomingForecast.js";

// HomeScreen component serves as the main screen of the application
export default function HomeScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* Status bar to control the appearance of the status bar */}
        <StatusBar style="dark" />
        {/* Background image component */}
        <BackgroundImage />
        {/* SafeAreaView to ensure content is displayed within the safe area of the device */}
        <SafeAreaView style={{ flex: 1 }}>
          {/* Component to search for a city */}
          <CitySearch />
          {/* Component displaying the current weather forecast */}
          <Forecast />
          {/* Component displaying the upcoming weather forecast */}
          <UpcomingForecast />
        </SafeAreaView>
      </View>
    </GestureHandlerRootView>
  );
}
