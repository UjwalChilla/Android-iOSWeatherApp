import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

export default function CitySearch() {
  //variables to track whether to show search or not and to track the amount of locations shown in search
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);

  // Sets the stored location to whatever was typed in search
  const handleLocation = (loc) => {
    console.log("location: ", loc);
  };

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 16,
        marginTop: 10,
        position: "relative",
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
          // On press, stores the typed location into location variable
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
                  Chicago, United States
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}
