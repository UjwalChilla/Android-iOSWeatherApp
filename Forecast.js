import React from "react";
import { View, Image, Text } from "react-native";

import partlyCloudy from "./assets/partlycloudy.png";
import wind from "./assets/wind.png";
import drop from "./assets/drop.png";
import sunset from "./assets/sunset.png";

export default function Forecast() {
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
        Chicago, United States
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {/* Image that shows the current condition at the location */}
        <Image
          source={partlyCloudy}
          style={{ height: 100, width: 100, bottom: 200 }}
        ></Image>
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
          31&#176;F
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
          Partly Cloudy
        </Text>
      </View>
      {/*Styles the row of additional conditions for the day */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 2,
            bottom: 150,
          }}
        >
          {/* Shows the current wind speed */}
          <Image source={wind} style={{ height: 35, width: 35 }} />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
              padding: 10,
            }}
          >
            10mph
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 2,
            bottom: 150,
          }}
        >
          {/* Shows the current precipitation percentage */}
          <Image source={drop} style={{ height: 35, width: 35 }} />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
              padding: 10,
            }}
          >
            15%
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 2,
            bottom: 150,
          }}
        >
          <Image source={sunset} style={{ height: 45, width: 45 }} />
          {/* Shows the sunset time at location */}
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
              padding: 10,
            }}
          >
            7:15 PM
          </Text>
        </View>
      </View>
    </View>
  );
}
