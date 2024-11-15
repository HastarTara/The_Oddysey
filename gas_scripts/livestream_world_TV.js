
// Main function to decide the category and fetch the YouTube videos
function youtube_main(runStandalone = true) {
    // Define the category for the post
    var category = 'live ambient TV'; // Default category or dynamically set if needed
    var properties = PropertiesService.getScriptProperties(); // Retrieve stored script properties
    var apiKey = properties.getProperty('GOOGLE_API_KEY');
    Logger.log('Retrieved API key: ' + apiKey);
    if (!apiKey) {
        Logger.log("API key not found in script properties.");
    } else {
        Logger.log("API key successfully retrieved.");
    }
    
    

    // Call the function to generate the Markdown post
    var markdownArticle = generateYouTubeMarkdownPost(apiKey, category, runStandalone);
    
    // Log the result or error message
    if (markdownArticle) {
        Logger.log(`Markdown article for "${category}" generated successfully.`);
    } else {
        Logger.log("No article generated.");
    }
}

// Function to generate the YouTube Markdown post
function generateYouTubeMarkdownPost(apiKey, category, runStandalone) {
    const categories = ["Nature", "City", "Space", "underwater", "traffic", "farm", "animals"];
    const videoResults = {};
    const title = "The World Window";
    const author = "yourname";

    // Helper to fetch videos from the YouTube API
    function fetchYouTubeVideos(searchQuery) {
        const maxResults = 30; // Limit results to 30
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&maxResults=${maxResults}&q=${encodeURIComponent(searchQuery)}&key=${apiKey}`;
        const response = UrlFetchApp.fetch(url);
        const data = JSON.parse(response.getContentText());
        return data.items || [];
    }

    // Fetch video results for all categories and store them with a random starting index
    categories.forEach(cat => {
        const results = fetchYouTubeVideos(cat + " live");
        // Randomize the starting index for each category
        const randomIndex = Math.floor(Math.random() * results.length);
        videoResults[cat] = {
            videos: results.map(video => ({
                id: video.id.videoId,
                title: video.snippet.title
            })),
            startIndex: randomIndex
        };
    });

    // Build the Markdown post
    let buttonsHtml = categories
        .map(cat => `<button onclick="loadVideo('${cat}')">${cat}</button>`)
        .join(" ");

    buttonsHtml += categories
        .map(cat => `<button onclick="loadNextVideo('${cat}')">Next ${cat}</button>`)
        .join(" ");

const scriptTag = `
<script>
    // Ensure proper escaping and safe parsing of the videos object into the client-side script
    const videos = ${JSON.stringify(videoResults)};
    let videoIndex = ${JSON.stringify(categories.reduce((obj, cat) => ({ ...obj, [cat]: videos[cat].startIndex }), {}))};

    function loadVideo(category) {
        // Update the index dynamically to ensure random starting point each time a category is clicked
        const currentIndex = videoIndex[category];
        const video = videos[category].videos[currentIndex];
        if (video) {
            document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + video.id + '?autoplay=1';
        } else {
            alert('No videos available for this category.');
        }
    }

    function loadNextVideo(category) {
        // Increment the index, and loop back to the start if necessary
        videoIndex[category] = (videoIndex[category] + 1) % videos[category].videos.length;
        loadVideo(category);
    }

    window.onload = () => loadVideo('${categories[0]}');
</script>`;


    const markdownContent = `
---
layout: post
title: "${title}"
author: ${author}
categories: [${category}]
tags: [youtube]
description: "Watch live streams in different categories like Nature, City, and Space."
---

<div style="text-align: center;">
    ${buttonsHtml}
</div>
<iframe id="videoFrame" width="100%" height="600" style="border: 1px solid #ccc;" allowfullscreen></iframe>
${scriptTag}
`;

    // Push to GitHub if running standalone
    if (runStandalone) {
        pushToGithub(markdownContent, category, title); // Call the external GitHub function
        Logger.log(`Successfully pushed to GitHub: "${title}"`);
    }

    // Return the markdown content for debugging or other uses
    return markdownContent;
}

