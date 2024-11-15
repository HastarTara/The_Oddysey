window.onload = function() {
    const videoResults = JSON.parse(document.getElementById('videoContent').getAttribute('data-videos'));

    // Function to get a random video ID for each category
    function getRandomVideo(category) {
        const videos = videoResults[category];
        const randomIndex = Math.floor(Math.random() * videos.length);
        return videos[randomIndex];
    }

    // Function to load the selected video into the iframe
    function loadVideo(category) {
        const video = getRandomVideo(category);
        document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + video.id + '?autoplay=1';
        document.getElementById('videoTitle').innerText = video.title;
    }

    // Function to load the next video in the category
    function loadNextVideo(category) {
        const videos = videoResults[category];
        const currentIndex = videos.findIndex(video => document.getElementById('videoFrame').src.includes(video.id));
        const nextIndex = (currentIndex + 1) % videos.length;
        const nextVideo = videos[nextIndex];
        document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + nextVideo.id + '?autoplay=1';
        document.getElementById('videoTitle').innerText = nextVideo.title;
    }

    // Automatically load a video for the first category on page load
    loadVideo('Nature');
};
