function vintage_funnies_main() {
  const comicsData = []; // Array to store comic data

  comicsData.push(oots());
  comicsData.push(smbc());
  comicsData.push(tvtrope());
  comicsData.push(xkcd());
  comicsData.push(hark_a_vagrant());

  // Generate and log the markdown content
const markdownContent = createComicsMarkdown(comicsData);
  Logger.log(markdownContent);

  pushToGithub(markdownContent, "comics", "Vintage Funnies" );
}


// Function to generate Markdown content
function createComicsMarkdown(comicsData) {
  let markdown = "---\nlayout: post\ntitle: \"Comics Roundup\"\nauthor: yourname\ncategories: [comics]\ntags: [weekly]\n---\n\n";

  comicsData.forEach(comic => {
    if (comic) {
      const { title, comicUrl, imgUrl } = comic;
      markdown += `![${title}](${imgUrl})\n[Read more here](${comicUrl})\n\n`;
    }
  });

  return markdown; // Return the constructed Markdown content
}



function oots() {
  const url = "https://www.giantitp.com/comics/oots.html";
  const response = UrlFetchApp.fetch(url);
  const html = response.getContentText();
  const $ = Cheerio.load(html);

  // Select all <p class="ComicList"> elements directly
  const comicListItems = $('p.ComicList');

  // Check if any comicListItems were found
  if (comicListItems.length === 0) {
    Logger.log("No comic list items found.");
    return null; // Return null if no items found
  }

  // Get a random index from the comic list
  const randomIndex = Math.floor(Math.random() * comicListItems.length);
  
  // Get the randomly selected comic element
  const randomComicElement = comicListItems.eq(randomIndex);
  
  // Extract the link (href) from the selected comic element
  const comicLink = randomComicElement.find('a').attr('href');
  
  // Construct the full comic URL
  const fullComicUrl = `https://www.giantitp.com${comicLink}`;
  
  // Fetch the chosen comic page
  const comicResponse = UrlFetchApp.fetch(fullComicUrl);
  const comicHtml = comicResponse.getContentText();
  const comicSoup = Cheerio.load(comicHtml);

  // Get all image tags to find the comic image
  const comicImages = comicSoup('img');
  let comicImageUrl = null;

  // Filter images to find the specific comic image
  comicImages.each(function() {
    const src = comicSoup(this).attr('src'); // Use comicSoup for image source
    if (src && src.includes('//comics/')) {  // Check if the src contains '//comics/'
      // Fix URL, remove double slashes, and use Weserv
      comicImageUrl = src.replace(/^\/\//, 'https://') // Replace leading double slashes with https://
                         .replace(/([^:]\/)\/+/g, "$1"); // Remove extra slashes
      // Use Weserv to redirect the image URL
      comicImageUrl = `https://images.weserv.nl/?url=${encodeURIComponent(comicImageUrl)}`;
      return false; // Stop after finding the first relevant image
    }
  });

  if (comicImageUrl) {
    return {
      title: "Order Of The Stick comic",
      comicUrl: fullComicUrl,  // Return the full comic URL
      imgUrl: comicImageUrl  // Embed image URL for GitHub Pages
    };
  } else {
    Logger.log("Comic image not found.");
    return null; // Return null if no image found
  }
}










function smbc() {
  const randUrl = "https://www.smbc-comics.com/rand.php";
  const response = UrlFetchApp.fetch(randUrl);

  const comicName = response.getContentText().trim().replace(/"/g, '');
  const randomSmbcUrl = `https://www.smbc-comics.com/comics/${comicName}`;
  
  const comicResponse = UrlFetchApp.fetch(randomSmbcUrl);
  if (comicResponse.getResponseCode() !== 200) {
    Logger.log("Failed to retrieve the comic page.");
    return null; // Return null if failed
  }

  const comicHtml = comicResponse.getContentText();
  const comicSoup = Cheerio.load(comicHtml);
  
  const imgTag = comicSoup("div#cc-comicbody a img#cc-comic");
  let comicImageUrl = null;

  if (imgTag.length > 0) {
    comicImageUrl = imgTag.attr('src');
    return { title: "SMBC Comic", comicUrl: randomSmbcUrl, imgUrl: comicImageUrl };
  } else {
    Logger.log("Comic image not found.");
    return null; // Return null if no image found
  }
}



function tvtrope() {
  const url = "https://tvtropes.org/pmwiki/randomitem.php?p=comic&ajax=1";
  const response = UrlFetchApp.fetch(url, { method: "post" });

  const relativeUrl = response.getContentText().trim();
  const articleName = relativeUrl.split("/Main/")[1];
  const formattedName = articleName.replace(/([a-z])([A-Z])/g, '$1 $2');
  const fullUrl = `https://tvtropes.org${relativeUrl}`;

  Logger.log(`Title: ${formattedName}`);
  Logger.log(`URL: ${fullUrl}`);

  return { title: formattedName, comicUrl: fullUrl, imgUrl: null };
}



function xkcd() {
    const url = "https://c.xkcd.com/random/comic/";
    const response = UrlFetchApp.fetch(url);

    if (response.getResponseCode() !== 200) {
        Logger.log("Failed to retrieve XKCD comic: " + response.getResponseCode());
        return null; // Exit the function if the request failed
    }

    const soup = Cheerio.load(response.getContentText()); 

    const imgTag = soup('div#comic img'); 
    const imgUrl = "https:" + imgTag.attr("src"); 

    const comicPageUrl = soup('#middleContainer > a:nth-child(6)').attr('href');
    const fullComicPageUrl = comicPageUrl; 

    return { title: "XKCD Comic", comicUrl: fullComicPageUrl, imgUrl: imgUrl };
}



function hark_a_vagrant() {
  const randomId = Math.floor(Math.random() * 404) + 1;
  const url = `http://www.harkavagrant.com/index.php?id=${randomId}`;
  Logger.log(url);

  const response = UrlFetchApp.fetch(url);
  const html = response.getContentText();
  const $ = Cheerio.load(html);

  const imgTag = $("span.rss-content img");
  let imgUrl = null;

  if (imgTag.length > 0) {
    imgUrl = imgTag.attr("src");

    // If the image URL is relative, add the domain
    if (imgUrl.startsWith("/")) {
      imgUrl = `http://www.harkavagrant.com${imgUrl}`;
    }

    // Use Weserv to serve the image securely over HTTPS
    imgUrl = `https://images.weserv.nl/?url=${encodeURIComponent(imgUrl)}`;

    return { title: "Hark! A Vagrant Comic", comicUrl: url, imgUrl: imgUrl };
  } else {
    Logger.log("Comic image not found.");
    return null; // Return null if no image found
  }
}


