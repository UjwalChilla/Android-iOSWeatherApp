// API key for accessing weather data
export const apiKey = "709d277c4a1e440eae2200729232512";

// Weather images mapping to different weather conditions
import partlyCloudy from "./assets/partlycloudy.png";
import moderateRain from "./assets/moderaterain.png";
import sun from "./assets/sun.png";
import cloud from "./assets/cloud.png";
import heavyRain from "./assets/heavyrain.png";
import mist from "./assets/mist.png";

export const weatherImages = {
  "Partly cloudy": partlyCloudy,
  "Moderate rain": moderateRain,
  "Patchy rain possible": moderateRain,
  Sunny: sun,
  Clear: sun,
  Overcast: cloud,
  "Light rain": moderateRain,
  Cloudy: cloud,
  "Moderate rain at times": moderateRain,
  "Heavy rain": heavyRain,
  "Heavy rain at times": heavyRain,
  "Moderate or heavy freezing rain": heavyRain,
  "Moderate or heavy rain shower": heavyRain,
  "Moderate or heavy rain with thunder": heavyRain,
  Mist: mist,
  Unknown: sun,
  other: moderateRain,
};
