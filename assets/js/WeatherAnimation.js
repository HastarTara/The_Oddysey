
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

  
        let animationClass = 'fire'; 
        switch (weatherCondition) {
          case 'Rain':
            animationClass = 'rainy';
            break;
          case 'Clouds':
            animationClass = 'cloudy';
            break;
          case 'Thunderstorm':
            animationClass = 'thunderstorm';
            break;
          case 'Clear':
            animationClass = 'fire';
            break;

        }
        
        // Add the selected animation class to the body
        document.body.classList.add(animationClass);
        // Debugging: log the current class on the body
        console.log('Current body class:', document.body.classList);
    } catch (error) {
        console.error('Error fetching location or weather data:', error);
    }
});

//=====================================================================================//

function setRandomLightningDuration() {
  const lightning = document.getElementById("lightning");
  if (lightning) {
    const minDuration = 1; // minimum duration in seconds
    const maxDuration = 4; // maximum duration in seconds
    const randomDuration = Math.random() * (maxDuration - minDuration) + minDuration;
    lightning.style.setProperty("--lightning-duration", `${randomDuration}s`);
  }
}

// Set an initial random duration
setRandomLightningDuration();

// Change the duration periodically
setInterval(setRandomLightningDuration, 5000); // Change every 5 seconds
  
  // Snow Effect with particles.js
  const snow = document.getElementById('snow');
  
  particlesJS("snow", {
    particles: {
      number: {
        value: 2000,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 3,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    retina_detect: true
  });
  
  
  // Cloud Effect with particles.js
  const cloudy = document.getElementById('cloudy');
  
  particlesJS("cloudy", {
    particles: {
      number: { value: 5, density: { enable: true, value_area: 100 } },
      color: { value: "#ffffff" },
      shape: {
        type: "image",
        stroke: { width: 2, color: "#00ffff" },
        polygon: { nb_sides: 5 },
        image: {
          src: "https://i.ibb.co/vzP35N4/fluffyvloud.png", // Cloud image URL
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          opacity_min: 0.0081,
          sync: false
        }
      },
      size: {
        value: 800,
        random: false,
        anim: { enable: true, speed: 10, size_min: 2, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 0,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "left",
        random: true,
        straight: true,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 60, rotateY: 120 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "bubble" },
        onclick: { enable: false, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 0, line_linked: { opacity: 1 } },
        bubble: {
          distance: 0,
          size: 2,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  
  // Adjust initial positions of the particles
  function adjustInitialPositions() {
    const particlesArray = window.pJSDom[0].pJS.particles.array;
    particlesArray.forEach((p) => {
      p.x = Math.random() * window.innerWidth;
      p.y = Math.random() * window.innerHeight;
    });
  }
  
  // Wait until particles are initialized and then adjust positions
  setTimeout(adjustInitialPositions, 1000);
  
  
  // Rain Effect (Custom Canvas-based)
  const rain = document.getElementById("rain");
  const ctx = rain.getContext("2d");
  rain.width = window.innerWidth;
  rain.height = window.innerHeight;
  
  const maxParts = 300;
  const particles = [];
  for (let a = 0; a < maxParts; a++) {
    particles.push({
      x: Math.random() * rain.width,
      y: Math.random() * rain.height,
      l: Math.random() * 1,
      xs: -4 + Math.random() * 4 + 2,
      ys: Math.random() * 10 + 10
    });
  }
  
  function draw() {
    ctx.clearRect(0, 0, rain.width, rain.height);
    for (let c = 0; c < particles.length; c++) {
      const p = particles[c];
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
      ctx.stroke();
    }
    move();
  }
  
  function move() {
    for (let b = 0; b < particles.length; b++) {
      const p = particles[b];
      p.x += p.xs;
      p.y += p.ys;
      if (p.x > rain.width || p.y > rain.height) {
        p.x = Math.random() * rain.width;
        p.y = -20;
      }
    }
  }
  
  setInterval(draw, 3);

  
