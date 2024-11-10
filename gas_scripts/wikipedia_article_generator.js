function wikipedia_article_main() {
  const sheetIds = {
    trees: '1bHznUttPZxhbpJ342wJgdl5Elb5lNhrVdmfqleEWlAo'
  };

  for (const category in sheetIds) {
    const articleDetails = getArticleDetails(sheetIds[category]);
    if (!articleDetails) {
      Logger.log(`No articles available for category: ${category}`);
      continue;
    }

    const { title, url, wordCount } = articleDetails;
    const imageUrl = fetchWikipediaImage(url);

    const content = createWikipediaMarkdown(title, url, imageUrl, wordCount, category);
    Logger.log(`Generated content for: ${title}`); // Log generated content

    // If pushToGithub has an issue, it might be in this call
    pushToGithub(content, category, title);
  }
}


// Fetch a random article from the specified category's Google Sheet
function getArticleDetails(sheetId) {
  Logger.log(`Attempting to open sheet with ID: ${sheetId}`); // Log the ID being accessed
  const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet(); // Open the sheet by ID
  if (!sheet) {
    Logger.log(`Sheet not found for ID: ${sheetId}`);
    return null; // Return null if the sheet doesn't exist
  }
  
  const data = sheet.getDataRange().getValues();
  const length = data.length - 1; // Exclude the header row
  if (length <= 0) {
    Logger.log("No articles found in the sheet.");
    return null; // Return null if no articles are available
  }

  const randomIndex = Math.floor(Math.random() * length) + 1; // Randomly select an article
  const title = data[randomIndex][0]; // Get the title
  const url = data[randomIndex][1]; // Get the URL
  const wordCount = data[randomIndex][2]; // Get the word count

  return { title, url, wordCount }; // Return article details
}

// Fetch the Wikipedia image using the Wikipedia API
function fetchWikipediaImage(articleUrl) {
  const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=original&titles=${encodeURIComponent(articleUrl.split('/').pop())}`;
  const response = UrlFetchApp.fetch(apiUrl);
  const data = JSON.parse(response.getContentText());
  const pages = data.query.pages;

  // Extract the image URL
  for (const pageId in pages) {
    if (pages[pageId].original) {
      return pages[pageId].original.source; // Return the original image URL
    }
  }
  
  Logger.log(`No image found for article: ${articleUrl}`); // Log if no image is found
  return ''; // Fallback if no image found
}

// Create the markdown content for the post
function createWikipediaMarkdown(title, url, imageUrl, wordCount, category) {
  return `---
layout: post
title: "${title}"
author: yourname
categories: [${category}]
tags: [wikipedia]
image: ${imageUrl}
description: "A brief overview of ${title}, which has ${wordCount} words."
---

## [Read the full article here](${url})`; // Link as a heading, no image here
}
