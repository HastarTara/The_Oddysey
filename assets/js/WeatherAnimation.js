
/* original weather getting api call bit */
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

        console.log('Weather Data:', weatherData);

        const weatherCondition = weatherData.weather[0].main;

        // Force animation to 'fire' for testing
        let animationClass = 'fire'; // Always apply the 'fire' animation for testing
        // this is where you add switch statements -- but currently the fire animations stops scrolling and clicking so that needs fixing...

        console.log('Selected Animation Class:', animationClass);
        
        // Add the animation class to the body
        document.body.classList.add(animationClass);

        // Debugging: log the current class on the body
        console.log('Current body class:', document.body.classList);
    } catch (error) {
        console.error('Error fetching location or weather data:', error);
    }
});

// -------------------------------------------------------------------------
// /* slightly different weather-getting api call bit */

// try {
//     // Get the user's IP address from a third-party service
//     const ipResponse = await fetch('https://api.ipify.org?format=json');
//     const ipData = await ipResponse.json();
//     const ipAddress = ipData.ip;

//     // Fetch geolocation data from GAS
//     const locationResponse = await fetch(`${gasGeolocationURL}&ip=${ipAddress}`);
//     const locationData = await locationResponse.json();
//     const { latitude, longitude } = locationData;

//     // Fetch weather data from GAS
//     const weatherResponse = await fetch(`${gasWeatherURL}&latitude=${latitude}&longitude=${longitude}`);
//     const weatherData = await weatherResponse.json();

//     console.log('Weather Data:', weatherData);

//     const weatherCondition = weatherData.weather[0].main;

//     // Call the initWeather function with the weather condition
//     initWeather(weatherCondition);

// } catch (error) {
//     console.error('Error fetching location or weather data:', error);
// }
// });

// -------------------------------------------------------------------------
// /* example functons to trigger teh animation change */


// // Set Random Duration for Lightning
// function setRandomLightningDuration(lightningElement) {
//     const minDuration = 1; // minimum duration in seconds
//     const maxDuration = 4; // maximum duration in seconds
//     const randomDuration = Math.random() * (maxDuration - minDuration) + minDuration;
//     lightningElement.style.setProperty("--lightning-duration", `${randomDuration}s`);
// }

// // Update Weather Effect Based on Weather Type
// function updateWeatherEffect(weatherType, elements) {
//     // Reset all effects
//     elements.rain.style.opacity = "0";
//     elements.snow.style.opacity = "0";
//     elements.cloud.style.opacity = "0";
//     elements.lightning.style.opacity = "0";
//     elements.background.style.filter = "none";

//     // Apply effects based on weather type
//     switch (weatherType) {
//         case "Rain":
//             elements.rain.style.opacity = "1";
//             elements.cloud.style.opacity = "0.8";
//             elements.background.style.filter = "grayscale(0.5) brightness(0.5)";
//             break;
//         case "Snow":
//             elements.snow.style.opacity = "1";
//             elements.cloud.style.opacity = "0";
//             elements.background.style.filter = "grayscale(0.5) opacity(0.4)";
//             break;
//         case "Clouds":
//             elements.cloud.style.opacity = "0.9";
//             elements.background.style.filter = "grayscale(0.5) brightness(0.5)";
//             break;
//         case "Thunderstorm":
//             elements.cloud.style.opacity = "0.8";
//             elements.lightning.style.opacity = "1";
//             elements.background.style.filter = "grayscale(1) brightness(0.1)";
//             break;
//         case "Clear":
//         case "Partly Cloudy":
//             elements.cloud.style.opacity = "0.5";
//             break;
//         default:
//             break;
//     }
// }

// // Function to trigger the weather update
// function initWeather(weatherCondition) {
//     const weatherElement = {
//         rain: document.querySelector('.rain'),
//         snow: document.querySelector('.snow'),
//         cloud: document.querySelector('.cloud'),
//         lightning: document.querySelector('.lightning'),
//         background: document.querySelector('.background')
//     };

//     // Initialize the rain
//     createRain(weatherElement.rain);
//     // Initialize the snow
//     createSnow(weatherElement.snow);
//     // Set initial random lightning duration
//     setRandomLightningDuration(weatherElement.lightning);

//     // Update the weather effect based on the weather condition
//     updateWeatherEffect(weatherCondition, weatherElement);
// }


// ------------------------------------------------------------------------------------------------------
// /* the original code  taht needs the correct animation changing fucntion logic */

// $(document).ready(function () {

// 	const background = $(".background");
// 	const backgroundNight = $(".backgroundNight");
// 	const sun = $(".sun");
// 	const moon = $(".moon");
// 	const hoursContainer = $(".hours-container");
// 	const hours = $(".hour");
// 	const rain = $("#rain");
// 	const cloud = $("#cloud");
// 	const snow = $("#snow");
// 	const thunderstorm = $("#thunderstorm");
// 	const temperatureDisplay = $("#temperature");
// 	const weatherTypeDisplay = $("#weatherType");
// 	const currentDay = $("#currentDay");
// 	const initialHour = 11;

// 	function toggleSunMoon(hour) {
// 		if (hour >= 6 && hour <= 21) {
// 			const rotation = -90 + (hour - 7) * (180 / 15);
// 			sun.css("transform", "rotate(" + rotation + "deg)");
// 			sun.css("opacity", "1");
// 			moon.css("opacity", "0");
// 			background.css("opacity", "1");
// 			backgroundNight.css("opacity", "0");
// 			$(".hour").css("filter", "invert(0%)");
// 			$(".cardInfo").css("filter", "invert(0%)");
// 			moon.css("transition", "all 0s");
// 			setTimeout(function () {
// 				sun.css("transition", "all 1s");
// 			}, 10);
// 			cloud.css(
// 				"filter",
// 				"brightness(200%) drop-shadow(0 0 10px rgba(255, 255, 255, 1))"
// 			);
// 			cloud.css("mix-blend-mode", "normal");
// 			rain.css("mix-blend-mode", "normal");
// 		} else {
// 			moon.css("opacity", "1");
// 			sun.css("opacity", "0");
// 			const adjustedHour = hour < 7 ? hour + 24 : hour;
// 			const rotation = -90 + (adjustedHour - 6) * (180 / 8);
// 			moon.css("transform", "rotate(" + rotation + "deg)");
// 			background.css("opacity", "0");
// 			backgroundNight.css("opacity", "1");
// 			$(".hour").css("filter", "invert(100%)");
// 			$(".cardInfo").css("filter", "invert(100%)");
// 			sun.css("transition", "all 0s");
// 			setTimeout(function () {
// 				moon.css("transition", "all 1s");
// 			}, 10);
// 			cloud.css(
// 				"filter",
// 				"brightness(0%) drop-shadow(0 0 10px rgba(255, 255, 255, 1))"
// 			);
// 			cloud.css("mix-blend-mode", "multiply");
// 			rain.css("mix-blend-mode", "soft-light");
// 		}
// 	}


// 	function updateWeatherAndTemperature(currentHour) {
// 		const temperature = currentHour.data("temp");
// 		const weather = currentHour.data("weather");
// 		const day = currentHour.data("day");

// 		temperatureDisplay.text(temperature);
// 		weatherTypeDisplay.text(weather.replace(/-/g, " "));

// 		// Reset elements to default state
// 		rain.css("opacity", "0");
// 		snow.css("opacity", "0");
// 		cloud.css("opacity", "0");
// 		thunderstorm.css("opacity", "0");
// 		background.css("filter", "none");
// 		sun.css("filter", "none");
// 		moon.css("filter", "none");

// 		// Handle weather visibility and background filters
// 		if (weather === "rainy") {
// 			rain.css("opacity", "1");
// 			cloud.css("opacity", "0.8");
// 			background.css("filter", "grayscale(0.5) brightness(0.5)");
// 			moon.css("filter", "brightness(0.8)");
// 		} else if (weather === "snowy") {
// 			snow.css("opacity", "1");
// 			cloud.css("opacity", "0");
// 			background.css("filter", "grayscale(0.5) opacity(0.4)");
// 			sun.css("filter", "grayscale(0.9)");
// 		} else if (weather === "cloudy") {
// 			cloud.css("opacity", "0.9");
// 			background.css("filter", "grayscale(0.5) brightness(0.5)");
// 			moon.css("filter", "brightness(0.8)");
// 		} else if (weather === "thunderstorm") {
// 			cloud.css("opacity", "0.8");
// 			thunderstorm.css("opacity", "1");
// 			background.css("filter", "grayscale(1) brightness(0.1)");
// 			sun.css("filter", "grayscale(0.9)");
// 		} else if (weather === "partly-cloudy" || weather === "partly-cloudy-night") {
// 			cloud.css("opacity", "0.5");
// 		}



// 	// Initial setup for the first hour
// 	function init() {
// 		toggleSunMoon(initialHour); // Toggle sun/moon for initial position (07:00)
// 		highlightHour(initialHour); // Highlight the first hour initially
// 		updateWeatherAndTemperature(hours.eq(2));
// 	}

// 	// Function to generate drops
// 	function createRain() {
// 		const nbDrop = 800;
// 		for (let i = 1; i <= nbDrop; i++) {
// 			const dropLeft = randRange(0, 1600);
// 			const dropTop = randRange(-1000, 1400);

// 			rain.append('<div class="drop" id="drop' + i + '"></div>');
// 			$("#drop" + i).css({ left: dropLeft, top: dropTop });
// 		}
// 	}

// 	// Function to generate a random number range
// 	function randRange(minNum, maxNum) {
// 		return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// 	}


// 	// Make it rain
// 	createRain();
// 	init();
	
// function setRandomLightningDuration() {
// 	const lightning = document.getElementById("thunderstorm");
// 	const minDuration = 1; // minimum duration in seconds
// 	const maxDuration = 4; // maximum duration in seconds
// 	const randomDuration =
// 		Math.random() * (maxDuration - minDuration) + minDuration;
// 	thunderstorm.style.setProperty("--lightning-duration", `${randomDuration}s`);
// }

// // Set an initial random duration
// setRandomLightningDuration();

// // Change the duration periodically
// setInterval(setRandomLightningDuration, 5000); // Change every 5 seconds

// particlesJS("cloud", {
// 	particles: {
// 		number: { value: 5, density: { enable: true, value_area: 100 } },
// 		color: { value: "#ffffff" },
// 		shape: {
// 			type: "image",
// 			stroke: { width: 2, color: "#00ffff" },
// 			polygon: { nb_sides: 5 },
// 			image: {
// 				src: "https://i.ibb.co/vzP35N4/fluffyvloud.png",
// 				width: 100,
// 				height: 100
// 			}
// 		},
// 		opacity: {
// 			value: 1,
// 			random: true,
// 			anim: {
// 				enable: true,
// 				speed: 10,
// 				opacity_min: 0.0081,
// 				sync: false
// 			}
// 		},
// 		size: {
// 			value: 800,
// 			random: false,
// 			anim: { enable: true, speed: 10, size_min: 2, sync: false }
// 		},
// 		line_linked: {
// 			enable: false,
// 			distance: 0,
// 			color: "#ffffff",
// 			opacity: 0.4,
// 			width: 1
// 		},
// 		move: {
// 			enable: true,
// 			speed: 6,
// 			direction: "left",
// 			random: true,
// 			straight: true,
// 			out_mode: "out",
// 			bounce: false,
// 			attract: { enable: false, rotateX: 60, rotateY: 120 }
// 		}
// 	},
// 	interactivity: {
// 		detect_on: "canvas",
// 		events: {
// 			onhover: { enable: false, mode: "bubble" },
// 			onclick: { enable: false, mode: "push" },
// 			resize: true
// 		},
// 		modes: {
// 			grab: { distance: 0, line_linked: { opacity: 1 } },
// 			bubble: {
// 				distance: 0,
// 				size: 2,
// 				duration: 2,
// 				opacity: 8,
// 				speed: 3
// 			},
// 			repulse: { distance: 200, duration: 0.4 },
// 			push: { particles_nb: 4 },
// 			remove: { particles_nb: 2 }
// 		}
// 	},
// 	retina_detect: true
// });

// // Adjust initial positions of the particles
// function adjustInitialPositions() {
// 	const particlesArray = window.pJSDom[0].pJS.particles.array;
// 	particlesArray.forEach((p) => {
// 		p.x = Math.random() * window.innerWidth;
// 		p.y = Math.random() * window.innerHeight;
// 	});
// }

// // Wait until particles are initialized and then adjust positions
// setTimeout(adjustInitialPositions, 1000);

// particlesJS("snow", {
// 	particles: {
// 		number: {
// 			value: 2000,
// 			density: {
// 				enable: true,
// 				value_area: 800
// 			}
// 		},
// 		color: {
// 			value: "#fff"
// 		},
// 		shape: {
// 			type: "circle",
// 			stroke: {
// 				width: 0,
// 				color: "#000000"
// 			},
// 			polygon: {
// 				nb_sides: 5
// 			}
// 		},
// 		opacity: {
// 			value: 1,
// 			random: false,
// 			anim: {
// 				enable: false,
// 				speed: 1,
// 				opacity_min: 0.1,
// 				sync: false
// 			}
// 		},
// 		size: {
// 			value: 2,
// 			random: true,
// 			anim: {
// 				enable: false
// 			}
// 		},
// 		line_linked: {
// 			enable: false
// 		},
// 		move: {
// 			enable: true,
// 			speed: 3,
// 			direction: "bottom",
// 			random: false,
// 			straight: false,
// 			out_mode: "out",
// 			bounce: false,
// 			attract: {
// 				enable: false,
// 				rotateX: 600,
// 				rotateY: 1200
// 			}
// 		}
// 	},
// 	retina_detect: true
// });

// var canvas = $("#rain")[0];

// if (canvas.getContext) {
// 	var ctx = canvas.getContext("2d");
// 	var w = canvas.width;
// 	var h = canvas.height;
// 	ctx.strokeStyle = "rgba(255,255,255,0.5)";
// 	ctx.lineWidth = 1;
// 	ctx.lineCap = "round";

// 	var init = [];
// 	var maxParts = 300;
// 	for (var a = 0; a < maxParts; a++) {
// 		init.push({
// 			x: Math.random() * w,
// 			y: Math.random() * h,
// 			l: Math.random() * 1,
// 			xs: -4 + Math.random() * 4 + 2,
// 			ys: Math.random() * 10 + 10
// 		});
// 	}

// 	var particles = [];
// 	for (var b = 0; b < maxParts; b++) {
// 		particles[b] = init[b];
// 	}

// 	function draw() {
// 		ctx.clearRect(0, 0, w, h);
// 		for (var c = 0; c < particles.length; c++) {
// 			var p = particles[c];
// 			ctx.beginPath();
// 			ctx.moveTo(p.x, p.y);
// 			ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
// 			ctx.stroke();
// 		}
// 		move();
// 	}

// 	function move() {
// 		for (var b = 0; b < particles.length; b++) {
// 			var p = particles[b];
// 			p.x += p.xs;
// 			p.y += p.ys;
// 			if (p.x > w || p.y > h) {
// 				p.x = Math.random() * w;
// 				p.y = -20;
// 			}
// 		}
// 	}

// 	setInterval(draw, 3);
// }