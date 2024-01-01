import React from "react";
import { View, Image, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import heavyRain from "./assets/heavyrain.png";

export default function UpcomingForecast() {
  return (
    <View style={{ marginBottom: 2, marginHorizontal: 15, marginTop: 3 }}>
      {/* Styles the horizontal list of upcoming days */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* One of the 7 views for the 7 days in the week */}
        {/* View design is copied 7 times for all 7 days */}
        <View
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
          {/* Shows the weather condition for the day */}
          <Image source={heavyRain} style={{ height: 40, width: 40 }} />
          {/* Shows the day */}
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 17,
              marginTop: 4,
            }}
          >
            Monday
          </Text>
          {/* Shows the temperature on that day */}
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            23&#176;F
          </Text>
        </View>

        <View
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
          <Image source={heavyRain} style={{ height: 40, width: 40 }} />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 17,
              marginTop: 4,
            }}
          >
            Tuesday
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            23&#176;F
          </Text>
        </View>
        <View
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
          <Image source={heavyRain} style={{ height: 40, width: 40 }} />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 17,
              marginTop: 4,
            }}
          >
            Wednesday
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            23&#176;F
          </Text>
        </View>
        <View
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
          <Image source={heavyRain} style={{ height: 40, width: 40 }} />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 17,
              marginTop: 4,
            }}
          >
            Thursday
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            23&#176;F
          </Text>
        </View>
        <View
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
          <Image source={heavyRain} style={{ height: 40, width: 40 }} />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 17,
              marginTop: 4,
            }}
          >
            Friday
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            23&#176;F
          </Text>
        </View>
        <View
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
          <Image source={heavyRain} style={{ height: 40, width: 40 }} />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 17,
              marginTop: 4,
            }}
          >
            Saturday
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            23&#176;F
          </Text>
        </View>
        <View
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
          <Image source={heavyRain} style={{ height: 40, width: 40 }} />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 17,
              marginTop: 4,
            }}
          >
            Sunday
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            23&#176;F
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
