// This video player is paired with the relevant gas script - 'livestream_world_TV.js


document.addEventListener("DOMContentLoaded", () => {
    const videoResults = JSON.parse(document.getElementById('videoContent').textContent);
    const categories = Object.keys(videoResults);

    let currentCategory = categories[0];
    let currentIndex = 0;

    const categoryButtonsContainer = document.getElementById('categoryButtons');
    const videoFrame = document.getElementById('videoFrame');
    const videoTitle = document.getElementById('videoTitle');
    const nextVideoButton = document.getElementById('nextVideoButton');

    // Helper: Load video into iframe
    function loadVideo() {
        const video = videoResults[currentCategory][currentIndex];
        videoFrame.src = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
        videoTitle.textContent = video.title;
    }

    // Helper: Switch to a new category
    function switchCategory(category) {
        currentCategory = category;
        currentIndex = 0;
        loadVideo();
    }

    // Helper: Load next video in the category
    function loadNextVideo() {
        currentIndex = (currentIndex + 1) % videoResults[currentCategory].length;
        loadVideo();
    }

    // Create category buttons
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = 'btn-category';
        button.addEventListener('click', () => switchCategory(category));
        categoryButtonsContainer.appendChild(button);
    });

    // Event listener for the "Next Video" button
    nextVideoButton.addEventListener('click', loadNextVideo);

    // Load the first video by default
    loadVideo();
});





// -----------------------------------------------------------z----------- SWITCH THIS BACK IN IF NEED----------------------------------------------------------

// window.onload = function() {
//     const videoResults = JSON.parse(document.getElementById('videoContent').getAttribute('data-videos'));

//     // Function to get a random video ID for each category
//     function getRandomVideo(category) {
//         const videos = videoResults[category];
//         const randomIndex = Math.floor(Math.random() * videos.length);
//         return videos[randomIndex];
//     }

//     // Function to load the selected video into the iframe
//     function loadVideo(category) {
//         const video = getRandomVideo(category);
//         document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + video.id + '?autoplay=1';
//         document.getElementById('videoTitle').innerText = video.title;
//     }

//     // Function to load the next video in the category
//     function loadNextVideo(category) {
//         const videos = videoResults[category];
//         const currentIndex = videos.findIndex(video => document.getElementById('videoFrame').src.includes(video.id));
//         const nextIndex = (currentIndex + 1) % videos.length;
//         const nextVideo = videos[nextIndex];
//         document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + nextVideo.id + '?autoplay=1';
//         document.getElementById('videoTitle').innerText = nextVideo.title;
//     }

//     // Automatically load a video for the first category on page load
//     loadVideo('Nature');
// };
