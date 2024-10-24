# The Oddysey

to do:

  - Download Google Clasp for local GAS editing and deployment to GDrive? doesn't add much though... maybe nicer hotkey workflow
  
  - Write a master script to run all the individual scripts when they've all been run and tested individually - would require a master mode flag to be passed as a parameter to each script that they have a default setting for. (start this on next script? see below todo item)  

  - Add the script that generated the Streetview Panos CSV to github. same for the GAS scripts but REMOVE CREDS LIKE GITHUB TOKEN - automate this possibly to utilise version control on the scripts, versions available to view in github (obvs - creds). utilise config/.env file? ask chatgpt for the name of this file...

  - I have the CSV of random streetview panos in Gdrive. Implement the GAS that will post it to TheOddysey (implement the master mode flag function and possibly the moving processed rows to a separate sheet for completed rows? (possibly needs another script to reset this/ move the rows back into the original sheet? or version the sheets or revert them to a saved original or cause a loop to automate this? find best solution).

  - SPLASH
    - add color theme toggle (so i can see for production without turning my dark flag off - also to get cool colorful inversions i.e. of splash page. Also swich the src of the logo (white to black, etc)

    - work more on splash page - add lock mechanism? and change button so the the eye is centered again  

  - POSTS
    - sort 2nd and 3rd post image crop formatting (all older ones work fine)
  
    - add nice category intro/description to the relevant card (i.e. saying if a tree article is short, show where to click on its     
    parent genus/species)... this could go on the article page, same for each in a  category
      
      -  maybe this means editing the script & sheet so it includes tree genera as well         
        (https://en.wikipedia.org/wiki/List_of_tree_genera)
  
    - add 'click image to read full article' above the image, and make the image the external link
      
  - fix GAS script so it skips articles that have been done
      
      - adding new 'completed' column to the g sheets? alternatively - remove the row, add to 'completed' spreadsheet. This would stop the increase of limited GAS row-read operations over time.
