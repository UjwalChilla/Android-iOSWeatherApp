// API key for accessing weather data
export const apiKey = "bb3e5fbb67754fd792b185044240501";

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
  "Patchy rain nearby": moderateRain,
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
