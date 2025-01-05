# The Oddysey

overview: This is my first post-bootcamp personal project and ive designed it to be fully modular so i can expand it in any direction, toward anything i want to learn - I intend it to be cohesive, easy to use: basically an automated CDN that generates and posts a handful of types of articles on things that interest me: 
- a wikipedia article>600wds about a random tree (scraped from the tree species list WP article).
- a collection of randomised webcomics from the back-catalogues of my favourite webcomics.
- a random location interactive google street view panorama with locations drawn from a HF dataset I found of streetview panorama locations.
- an embedded 'tv screen' showing YT livestreams and buttons to switch between different categories of things that interest me like space, underwater, nature, traffic, etc.
- other features include:
 - an interactive splash screen, possibly with a drawn unlock symbol grid thing to make it feel mystical / exclusive.
 - the home page should show a background weather animation (rain, clouds, sun) based on the user's rough IP geolocation.
 - many more feature ideas. a weekly collaborative GIPHY canvas. etc etc.....
## to do:

- AMBIENT TV
  - final zhuzh - lush ui buttons etc, fit window to width of screen dynamic
  
- WEATHER ANIMATIONS
  - tweak their look by studying the codepen (cloud opacity 50%), work on day / night colors background.. possible link to light/dark mode?

- SPLASH  
  - add color theme toggle (so i can see for production without turning my dark flag off - also to get cool colorful inversions i.e. of splash page. Also swich the src of the logo (white to black, etc)
  - work more on splash page - add lock mechanism? remove  button so the the eye is centered again  

- TREES
  - add 'click image to read full article' above the image, and make the image the external link
  - add nice category intro/description to the relevant card (i.e. saying if a tree article is short, show where to click on its 
    parent genus/species)... this could go on the article page, same for each in a category
  - maybe this means editing the script & sheet so it includes tree genera as well         
        (https://en.wikipedia.org/wiki/List_of_tree_genera) - same deal for 'common fish names', etc. wikipedia has irregular structures... https://en.wikipedia.org/wiki/Category:Chemical_elements eg

- ROAD PANORAMAS
  -  get emojis/accent chars working (will involving fiddling with the jekyll settings). Shrink the window slightly to allign with other jekyll page elements - soemthing to do with the encodings utf-8, etc in GAS and githb api calls.. any place where theres sending and en/decoding....

- COMICS
  - larger font / obvious link for TV trope
  - sort thumbnail switch light/dark theme dependant
  - better front matter/banner pic? waht file type? ive done png, why not svg? research what is standard

- INDEX LAYOUT
  - sort 2nd and 3rd post image crop formatting (all older ones work fine)
  - Trees ( + soon other wikipedia categories)
      
- MISC
  - nice thumbnails for post types?
  - make sure all gas scripts have the skip if already processed functionality. in future implement the transferal of completed rows to a new sheet (this wont become a problem for a long time if its only attempting to retrieve one article per category per day). They also need to check the AlreadProcessed column for ther relevant entry. this could be extracted to a function? 
  - GIPHY canvas - serve local - fix new searches appending rather than replacing previous. add canvas / resize / scale functionality
  - get folders for categories auto generated inside _posts (simple as adding dirs in the paths of generated posts...)
  - Write a master script to run all the individual scripts when they've all been run and tested individually - implementing the master mode flag (already done on the streetview pano category)
