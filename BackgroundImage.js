import React from "react";
import { Image } from "react-native";

import background from "./assets/background.jpg";

// BackgroundImage component renders the background image for the app
export default function BackgroundImage() {
  return (
    // Places background image, styled to fit screen
    <Image
      source={background} // Set the image source from the imported asset
      style={{
        position: "absolute", // Position the image absolutely
        height: "100%", // Set the height to 100% of the container
        width: "100%", // Set the width to 100% of the container
      }}
    />
  );
}
