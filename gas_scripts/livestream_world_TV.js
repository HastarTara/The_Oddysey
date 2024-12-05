
function youtubeMain(runStandalone = true) {
    var postCategory = 'live ambient TV';
    var youtubeCategories = ['nature', 'city', 'space', 'farm', 'animals', 'underwater', 'bus', 'train', 'life', 'survival', 'traffic', 'resort']; // Add more categories as needed.

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
        var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&maxResults=30&q=${encodeURIComponent(category + ' live')}&key=${apiKey}`;
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

    // Embed video data as JSON
    var videoData = JSON.stringify(videoResults);

    return `---
layout: post
title: "${title}"
author: ${author}
categories:
  - ${postCategory}
tags:
  - youtube
  - videos
description: "Explore live ambient streams in categories like Nature, City, and more."
---

<script id="videoContent" type="application/json">
${videoData}
</script>
`;
}