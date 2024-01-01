import React from "react";
import { Image } from "react-native";

import background from "./assets/background.jpg";

export default function BackgroundImage() {
  return (
    // Places background image, styled to fit screen
    <Image
      source={background}
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
      }}
    />
  );
}
