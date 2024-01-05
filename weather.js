import axios from "axios";
import { apiKey } from "./constants.js";

// Function to construct the forecast endpoint URL based on parameters
const forecastEndpoint = (params) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;

// Function to construct the locations endpoint URL based on parameters
const locationsEndpoint = (params) =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

// Async function to make an API call to a given endpoint
const apiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };
  try {
    // Use axios to make the API request
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    // Log and handle errors gracefully
    console.log("Error: ", error);
    return null;
  }
};

// Function to fetch weather forecast data based on parameters
export const fetchWeatherForecast = (params) => {
  // Construct the forecast endpoint URL
  let forecastURl = forecastEndpoint(params);
  // Make the API call and return the result
  return apiCall(forecastURl);
};

// Function to fetch location data based on parameters
export const fetchLocations = (params) => {
  // Construct the locations endpoint URL
  let locationsURl = locationsEndpoint(params);
  // Make the API call and return the result
  return apiCall(locationsURl);
};
