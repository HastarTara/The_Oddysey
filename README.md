# The Oddysey
## to do:

- AMBIENT TV
  - final zhuzh - lush ui buttons etc, fit window to width of screen dynamic
  
- GEOCONTEXT ANIMATIONS
  - animations visible on index: next, separate them (the toggle functionality - might need reviewing their source), add day/night functionality.

- SPLASH  
  - add color theme toggle (so i can see for production without turning my dark flag off - also to get cool colorful inversions i.e. of splash page. Also swich the src of the logo (white to black, etc)
  - work more on splash page - add lock mechanism? and change button so the the eye is centered again  

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
  - make sure all gas scripts have the skip if already processed functionality. in future implement the transferal of completed rows to a new sheet (this wont become a problem for a long time if its only attempting to retrieve one article per category per day). They also need to check the AlreadProcessed column for ther relevant entry. this could be extracted to a function? 
  - GIPHY canvas - serve local - fix new searches appending rather than replacing previous. add canvas / resize / scale functionality
  - get folders for categories auto generated inside _posts (simple as adding dirs in the paths of generated posts...)
  - Write a master script to run all the individual scripts when they've all been run and tested individually - implementing the master mode flag (already done on the streetview pano category)
