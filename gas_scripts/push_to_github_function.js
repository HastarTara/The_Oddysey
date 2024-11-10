function pushToGithub(content, category, title) {
  const repo = 'HastarTara/The_Oddysey';
  const formattedTitle = title.replace(/\s+/g, '-').toLowerCase();
  const now = new Date();
  const dateString = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeString = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
  const path = `_posts/${dateString}-${timeString}-${category}-${formattedTitle}.md`;

  Logger.log(`Attempting to push file at path: ${path}`);

  const message = `Automated post: ${title}`;
  const githubToken = PropertiesService.getScriptProperties().getProperty('GITHUB_TOKEN');
  const apiUrl = `https://api.github.com/repos/${repo}/contents/${path}`;

  const payload = {
    message,
    content: Utilities.base64Encode(content)
  };

  const options = {
    method: 'PUT',
    headers: {
      'Authorization': 'token ' + githubToken,
      'Content-Type': 'application/json'
    },
    payload: JSON.stringify(payload)
  };

  try {
    const response = UrlFetchApp.fetch(apiUrl, options);
    Logger.log(`File pushed successfully: ${response.getContentText()}`);
  } catch (e) {
    Logger.log(`Error occurred: ${e.message}`);
  }
}
