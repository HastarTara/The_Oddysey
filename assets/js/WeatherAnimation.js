document.addEventListener("DOMContentLoaded", async function() {
    const gasGeolocationURL = 'https://script.google.com/macros/s/AKfycbwO0FhCEY_CYSewKbLD-QjTkSgJmfIJJ25DaRsZPV3aEKiAmVyIaTn5MEflQ6v_Q2La5w/exec?action=geolocation';
    const gasWeatherURL = 'https://script.google.com/macros/s/AKfycbwO0FhCEY_CYSewKbLD-QjTkSgJmfIJJ25DaRsZPV3aEKiAmVyIaTn5MEflQ6v_Q2La5w/exec?action=weather';

    try {
        // Get the user's IP address from a third-party service
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const ipAddress = ipData.ip;

        // Fetch geolocation data from GAS
        const locationResponse = await fetch(`${gasGeolocationURL}&ip=${ipAddress}`);
        const locationData = await locationResponse.json();
        const { latitude, longitude } = locationData;

        // Fetch weather data from GAS
        const weatherResponse = await fetch(`${gasWeatherURL}&latitude=${latitude}&longitude=${longitude}`);
        const weatherData = await weatherResponse.json();

        const weatherCondition = weatherData.weather[0].main;
        
        // Determine the animation class based on the weather condition
        let animationClass = 'fire'; // Default animation
        switch (weatherCondition.toLowerCase()) {
            case 'rain':
                animationClass = 'rain-animation';
                break;
            case 'clear':
                animationClass = 'clear-sky-animation';
                break;
            case 'clouds':
                animationClass = 'cloudy-animation';
                break;
            case 'sun':
                animationClass = 'cloudy-animation';
                break;
            default:
                animationClass = 'default-animation';
        }

        console.log('Selected Animation Class:', animationClass);
        
        // Add the animation class to the body
        document.body.classList.add(animationClass);

        // Debugging: log the current class on the body
        console.log('Current body class:', document.body.classList);
    } catch (error) {
        console.error('Error fetching location or weather data:', error);
    }
});
