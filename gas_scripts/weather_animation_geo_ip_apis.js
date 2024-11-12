// Geolocation Function
function getGeolocation(ipAddress) {
  const properties = PropertiesService.getScriptProperties();
  const apiKey = properties.getProperty('IP_GEOLOC_API_KEY');  // Retrieve IP geolocation API key
  const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ipAddress}`;
  const response = UrlFetchApp.fetch(url);
  return JSON.parse(response.getContentText());
}

// Weather Data Function
function getWeatherData(latitude, longitude) {
  const properties = PropertiesService.getScriptProperties();
  const apiKey = properties.getProperty('WEATHER_API_KEY');  // Retrieve Weather API key
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  const response = UrlFetchApp.fetch(url);
  return JSON.parse(response.getContentText());
}

// Web app to fetch geolocation and weather data
function doGet(e) {
  const action = e.parameter.action;
  let result = {};

  if (action === 'geolocation') {
    const ip = e.parameter.ip;
    result = getGeolocation(ip);
  } else if (action === 'weather') {
    const latitude = e.parameter.latitude;
    const longitude = e.parameter.longitude;
    result = getWeatherData(latitude, longitude);
  }

  return ContentService.createTextOutput(JSON.stringify(result))
                       .setMimeType(ContentService.MimeType.JSON);
}
