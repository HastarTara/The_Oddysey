// This video player is paired with the relevant gas script - 'livestream_world_TV.js


// document.addEventListener("DOMContentLoaded", () => {
//     const videoResults = JSON.parse(document.getElementById('videoContent').textContent);
//     const categories = Object.keys(videoResults);

//     let currentCategory = categories[0];
//     let currentIndex = 0;

//     const categoryButtonsContainer = document.getElementById('categoryButtons');
//     const videoFrame = document.getElementById('videoFrame');
//     const videoTitle = document.getElementById('videoTitle');
//     const nextVideoButton = document.getElementById('nextVideoButton');

//     // Helper: Load video into iframe
//     function loadVideo() {
//         const video = videoResults[currentCategory][currentIndex];
//         videoFrame.src = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
//         videoTitle.textContent = video.title;
//     }

//     // Helper: Switch to a new category
//     function switchCategory(category) {
//         currentCategory = category;
//         currentIndex = 0;
//         loadVideo();
//     }

//     // Helper: Load next video in the category
//     function loadNextVideo() {
//         currentIndex = (currentIndex + 1) % videoResults[currentCategory].length;
//         loadVideo();
//     }

//     // Create category buttons
//     categories.forEach(category => {
//         const button = document.createElement('button');
//         button.textContent = category;
//         button.className = 'btn-category';
//         button.addEventListener('click', () => switchCategory(category));
//         categoryButtonsContainer.appendChild(button);
//     });

//     // Event listener for the "Next Video" button
//     nextVideoButton.addEventListener('click', loadNextVideo);

//     // Load the first video by default
//     loadVideo();
// });


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
