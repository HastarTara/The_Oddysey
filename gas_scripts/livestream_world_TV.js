function youtube_main(runStandalone = true) {
    // Set post category for blog post
    var postCategory = 'live ambient TV'; 

    // Define YouTube categories for search
    var youtubeCategories = ['Nature']; // You can add more categories if needed

    // Get the API key from script properties
    var apiKey = getApiKey();
    if (!apiKey) {
        Logger.log("API key not found in script properties.");
        return;
    }

    // Fetch YouTube videos for the defined categories
    var videoResults = fetchYouTubeVideos(apiKey, youtubeCategories);

    // Generate Markdown content for the blog post
    var markdownContent = generateMarkdownContent(videoResults, postCategory);

    // If running standalone, push the generated markdown content to GitHub
    if (runStandalone) {
        var postTitle = "The World Window - 1 ";
        pushToGithub(markdownContent, postCategory, postTitle);
        Logger.log(`Successfully pushed to GitHub for category: ${postCategory}`);
    }

    // Return the generated markdown content for debugging or further use
    return markdownContent;
}

// Function to fetch the API key from script properties
function getApiKey() {
    var properties = PropertiesService.getScriptProperties();
    return properties.getProperty('GOOGLE_API_KEY');
}

// Function to fetch YouTube videos for each category
function fetchYouTubeVideos(apiKey, youtubeCategories) {
    var videoResults = {};

    youtubeCategories.forEach(function(category) {
        var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&maxResults=30&q=${encodeURIComponent(category + " live")}&key=${apiKey}`;
        var response = UrlFetchApp.fetch(url);
        var data = JSON.parse(response.getContentText());

        // Store the fetched videos under the category
        videoResults[category] = data.items ? data.items.map(function(item) {
            return {
                id: item.id.videoId,
                title: item.snippet.title
            };
        }) : [];
    });

    return videoResults;
}

// Function to generate Markdown content
function generateMarkdownContent(videoResults, postCategory) {
    var title = "The World Window - " + new Date().toLocaleDateString('en-GB');
    var author = "yourname"; // You can replace this with actual author name

    var markdownContent = `
    ---
    layout: post
    title: "${title}"
    author: ${author}
    categories: [${postCategory}]
    tags: [youtube]
    description: "Watch live streams in different categories like Nature."
    ---

    <div style="text-align: center;">
        <button onclick="loadNextVideo('${Object.keys(videoResults)[0]}')">Next</button>
    </div>
    <iframe id="videoFrame" width="100%" height="600" style="border: 1px solid #ccc;" allowfullscreen></iframe>
    <div id="videoTitle" style="text-align: center; font-size: 1.5em; margin-top: 10px;"></div>
    `;

    return markdownContent;
}
