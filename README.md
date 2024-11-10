# The Oddysey

to do:

  - GIPHY canvas - serve local - fix new searches appending rather than replacing previous. add canvas / resize / scale functionality

  - get folders for categories auto generated inside _posts
  
  - Write a master script to run all the individual scripts when they've all been run and tested individually - implementing the master mode flag (already done on the streetview pano category)

  - SPLASH
    
    - add color theme toggle (so i can see for production without turning my dark flag off - also to get cool colorful inversions i.e. of splash page. Also swich the src of the logo (white to black, etc)

    - work more on splash page - add lock mechanism? and change button so the the eye is centered again  

  - POSTS FORMAT TWEAKING (big focus on links & tidying) - "- add 'click image to read full article' above the image, and make the image the external link - same for the maps articles."

    - maps articles:
      -  change size of thumbnail? have image link straight to google maps, skip the embedding on oddysea? this would allow being able to easily see the date of the pano - skip the thumbail pic in the articles

    - Comics articles:
      - fix broken tvtrope embed (reroute through weserv nl?), add thumb - nice heading/font or pic?   
       
    - sort 2nd and 3rd post image crop formatting (all older ones work fine)
    - Trees ( + soon other wikipedia categories)
      - add nice category intro/description to the relevant card (i.e. saying if a tree article is short, show where to click on its 
    parent genus/species)... this could go on the article page, same for each in a category
      
      -  maybe this means editing the script & sheet so it includes tree genera as well         
        (https://en.wikipedia.org/wiki/List_of_tree_genera) - same deal for 'common fish names', etc. wikipedia has irregular structures... https://en.wikipedia.org/wiki/Category:Chemical_elements eg
  
  - low importance: make sure all gas scripts have the skip if already processed functionality. in future implement the transferal of completed rows to a new sheet (this wont become a problem for a long time if its only attempting to retrieve one article per category per day). They also need to check the AlreadProcessed column for ther relevant entry. this could be extracted to a function? 
