function youtube_main(runStandalone = true) {
    var postCategory = 'live ambient TV';
    var youtubeCategories = ['Nature', 'city']; // space, farm, traffic, animals, underwater ----Add more as needed

    var properties = PropertiesService.getScriptProperties();
    var apiKey = properties.getProperty('GOOGLE_API_KEY');

    // Fetch videos
    var videoResults = fetchYouTubeVideos(apiKey, youtubeCategories);

    // Generate the Markdown post
    var markdownContent = generateMarkdownContent(videoResults, postCategory);

    if (runStandalone) {
        var postTitle = "The World Window";
        pushToGithub(markdownContent, postCategory, postTitle);
        Logger.log(`Post pushed to GitHub: ${postTitle}`);
    }
}

function fetchYouTubeVideos(apiKey, youtubeCategories) {
    var videoResults = {};

    youtubeCategories.forEach(function(category) {
        var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&maxResults=30&q=${encodeURIComponent(category)}&key=${apiKey}`;
        var response = UrlFetchApp.fetch(url);
        var data = JSON.parse(response.getContentText());
        videoResults[category] = data.items.map(function(item) {
            return {
                id: item.id.videoId,
                title: item.snippet.title
            };
        });
    });

    return videoResults;
}

function generateMarkdownContent(videoResults, postCategory) {
    var title = "The World Window - " + new Date().toLocaleDateString('en-GB');
    var author = "yourname";

    // Embed video data as JSON for frontend usage
    var videoData = JSON.stringify(videoResults);

    return `
---
layout: post
title: "${title}"
author: ${author}
categories: [${postCategory}]
tags: [youtube, videos]
description: "Explore live ambient streams in categories like Nature, City, and Space."
---

<div id="videoContainer" style="text-align: center; margin-bottom: 20px;">
    <div id="categoryButtons" style="margin-bottom: 10px;">
        <!-- Buttons for video categories -->
    </div>
    <iframe id="videoFrame" width="100%" height="600" style="border: 1px solid #ccc;" allowfullscreen></iframe>
    <div id="videoTitle" style="text-align: center; font-size: 1.5em; margin-top: 10px;"></div>
    <button onclick="loadNextVideo()" style="margin-top: 15px;">Next Video</button>
</div>

<script>
    // JSON data for videos by category
    const videoResults = ${videoData};
    const categories = Object.keys(videoResults);

    // State management
    let currentCategory = categories[0]; // Default category
    let currentIndex = Math.floor(Math.random() * videoResults[currentCategory].length); // Start at random index

    // Create category buttons dynamically
    const categoryButtonsContainer = document.getElementById('categoryButtons');
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.style.margin = '0 5px';
        button.onclick = () => switchCategory(category);
        categoryButtonsContainer.appendChild(button);
    });

    // Load the current video into the iframe
    function loadVideo() {
        const video = videoResults[currentCategory][currentIndex];
        document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + video.id + '?autoplay=1';
        document.getElementById('videoTitle').textContent = video.title;
    }

    // Load the next video in the current category
    function loadNextVideo() {
        currentIndex = (currentIndex + 1) % videoResults[currentCategory].length;
        loadVideo();
    }

    // Switch the active category and load its first video
    function switchCategory(category) {
        currentCategory = category;
        currentIndex = Math.floor(Math.random() * videoResults[currentCategory].length); // Start with a random video
        loadVideo();
    }

    // Initial video load
    loadVideo();
</script>
    `;
}
