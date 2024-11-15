function google_maps_main(runStandalone = true) {
    var sheetId = '1dleDioK5_HpwFD2043lWB8qKS11NaNsWCdbKFuOY7bw'; // Replace with your Google Sheet ID
    var category = 'random_locations'; // Define the category
    var properties = PropertiesService.getScriptProperties();
    var apiKey = properties.getProperty('GOOGLE_API_KEY');

    var markdownArticle = generateMarkdownPost(sheetId, category, apiKey, runStandalone);
    if (markdownArticle) {
        Logger.log(`Markdown article for "${category}" generated successfully.`);
    } else {
        Logger.log("No article generated.");
    }
}

function generateMarkdownPost(sheetId, category, apiKey, runStandalone) {
    var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
    var data = sheet.getDataRange().getValues();

    // Filter unposted rows
    var unpostedRows = data.filter((row, index) => index > 0 && !row[4]);

    if (unpostedRows.length === 0) {
        Logger.log("No unposted rows available.");
        return;
    }

    // Select a random row
    var randomRow = unpostedRows[Math.floor(Math.random() * unpostedRows.length)];
    var [country, latitude, longitude, address] = randomRow;

    if (!latitude || !longitude || !address) {
        Logger.log("Selected row does not have valid latitude, longitude, or address.");
        return;
    }

    // Prepare article variables
    var title = `Explore ${address}`;
    var url = `https://www.google.com/maps/@${latitude},${longitude},14z?hl=en`;
    var imageUrl = `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${latitude},${longitude}&key=${apiKey}`;

    // Create the Markdown article
    var markdownArticle = `---
layout: post
title: "${title}"
author: yourname
categories: [${category}]
tags: [streetview]
image: ${imageUrl}
description: "A brief overview of ${title}."
---

<iframe
    width="600"
    height="300"
    src="https://www.google.com/maps/embed/v1/streetview?key=${apiKey}&location=${latitude},${longitude}"
    frameborder="0"
    style="border:0"
    allowfullscreen>
</iframe>

## [Read the full article here](${url})`;

    // Push to GitHub if running standalone
    if (runStandalone) {
        pushToGithub(markdownArticle, category, title); // Call the external GitHub function
        Logger.log(`Successfully pushed to GitHub: "${title}"`);
    }

    // Return the article for further processing if needed
    return markdownArticle; 
}
