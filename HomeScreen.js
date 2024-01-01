import React from "react";
import { View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import BackgroundImage from "./BackgroundImage.js";
import CitySearch from "./CitySearch.js";
import Forecast from "./Forecast.js";
import UpcomingForecast from "./UpcomingForecast.js";

export default function HomeScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <StatusBar style="dark" />
        {/* Background */}
        <BackgroundImage />

        <SafeAreaView style={{ flex: 1 }}>
          {/* City Search */}
          <CitySearch />

          {/* Forecast */}
          <Forecast />

          {/* Forecast for next week */}
          <UpcomingForecast />
        </SafeAreaView>
      </View>
    </GestureHandlerRootView>
  );
}
