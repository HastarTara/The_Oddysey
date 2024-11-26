
---
layout: post
title: "The World Window - 26/11/2024"
author: yourname
categories: [live ambient TV]
tags: [youtube, videos]
description: "Explore live ambient streams in categories like Nature, City, and Space."
---

<div id="videoContainer" style="text-align: center; margin-bottom: 20px;">
    <div id="categoryButtons" style="margin-bottom: 10px;">
        <!-- Buttons for video categories -->
    </div>
    <iframe id="videoFrame" width="100%" height="600" style="border: 1px solid #ccc;" allowfullscreen></iframe>
    <div id="videoTitle" style="text-align: center; font-size: 1.5em; margin-top: 10px;"></div>
    <button onclick="loadNextVideo()" style="margin-top: 15px;">Next Video</button>
</div>

<script>
    // JSON data for videos by category
    const videoResults = {"Nature":[{"id":"uRF6xUrOdOw","title":"Rain Sounds For Sleeping - 99% Instantly Fall Asleep With Rain And Thunder Sound At Night"},{"id":"TbShISMCmYU","title":"Forest&#39;s Most Beautiful Birds | Breathtaking Nature | Awesome Bird Songs | Stress Relief and Healing"},{"id":"JoB7447H3oU","title":"? 24/7 LIVE: Cat TV for Cats to Watch ? Beautiful Birds and Squirrels 4K"},{"id":"6ycikMM4IO0","title":"AMAZON 4K - The World&#39;s Largest Tropical Rainforest | Relaxing Music With Beautiful Nature Scenes"},{"id":"2_ovWpVE9es","title":"Mountain River Waterfall Flowing 24/7. Water Sounds, Nature White Noise. River Sounds for Sleeping."},{"id":"vDAsUcdcuE0","title":"Bird Garden | Colorful Birds | Breathtaking Nature, Wonderful Bird Songs | Stress Relief and Healing"},{"id":"0O_LThYytFU","title":"The Most Beautiful Birds on Earth: Relaxing Nature Sounds | Breathtaking Nature &amp; Healing Sounds"},{"id":"EVvjW9pBIRU","title":"ITALY 4K HD - Scenic Relaxation Film With Calming Music - Nature 4K Video UltraHD"},{"id":"F0GOOP82094","title":"? Wildlife In The Forest - 24/7 LIVE by Morten Hilmer ?"},{"id":"xlXEYdHCmsE","title":"The Enchanting Toucan | Stunning Nature &amp; Soothing Sounds | Peace &amp; Relaxation | Jungle Bliss"},{"id":"R_qT0-KoCm8","title":"? Sleep Fast with Pure Nature Rain and Incredible Present Thunder Sounds | Black Screen"},{"id":"DR_ulK78DZI","title":"FLYING OVER PUERTO RICO (4K UHD) - Soothing Music Along With Beautiful Nature Video - 4K Video UHD"},{"id":"tP68FDe0Fns","title":"? 432hz Ancient Morning Healing Frequency ?"},{"id":"56WBs0A4Kng","title":"? 24/7 LIVE: Cat TV for Cats to Watch ? Beautiful Birds Squirrels in the Forest 4K"},{"id":"-f3RXYc6_LU","title":"The World&#39;s Strangest Birds | Peaceful Nature Scenery | Stress Relief | Relaxing Bird Sounds"},{"id":"5_1OOKcawd8","title":"??Relaxing Zen Music 24/7, Healing Music, Meditation Music, Spa Music, Sleep, Zen, Nature Sounds"},{"id":"bw0uHUB2knA","title":"Silent Winter - Native American Flute Melody Blends With The Breath Of Nature | Flute Dream 24/7"},{"id":"EmsAcq1ywyw","title":"TULUM NATURE in 4K UHD Drone Film + Relaxing Piano Music for Stress Relief, Sleep, Spa, Yoga, Cafe"},{"id":"96t3GM7eY8A","title":"Prayer Instrumental Music with Scriptures &amp; Nature | 24/7 DappyTKeys Piano Worship"},{"id":"t4Dy8WAvMnY","title":"FLYING OVER PARADISE 4K UHD - Relaxing Music Along With Beautiful Nature Videos - 4K Video HD"},{"id":"MrWIPGEOt9k","title":"Paradise Island 4K ? Scenic Relaxation Film with Peaceful Relaxing Music and Nature Video 4K UltraHD"},{"id":"u3KKTQUGzuA","title":"Bird Garden | Colorful Birds | Breathtaking Nature, Wonderful Bird Songs | Stress Relief and Healing"},{"id":"dXIyMS61B68","title":"Beautiful Relaxing Peaceful Music, Calm Music 24/7, &quot;Tropical Shores&quot; By Tim Janis"},{"id":"hAxvZj89-34","title":"?24/7 LIVE: Kitty TV?Cutest Squirrel and Bird Watching?"},{"id":"JF06s21MIHk","title":"Relaxing Music and The Sound of Water to Relieve Worry and Anxiety ? Relieve Stress"},{"id":"43CmDhmtymg","title":"World&#39;s Largest Tropical Bird Forest | Spectacular Nature | Amazon Rainforest | Peaceful Nature"},{"id":"SXRDpauPfm4","title":"Amazing Birds &amp; Breathtaking Nature | Wonderful Hummingbirds | Stress Relief &amp; Healing Ambiance"},{"id":"UQ7Bnh8bcOg","title":"Calming Music With Beautiful Nature Videos | Stress Relief Music | Stop Anxiety &amp; Depression"},{"id":"zrRxvbtzg0k","title":"Pretty Little Birds - Stress-relieving nature sounds - Healing and peaceful music - Beautiful nature"},{"id":"CqXeTN-xkm0","title":"Relaxing Bird Sounds 4K~ Birds Singing Heal Stress, Anxiety And Depression, Heal The Mind"}],"city":[{"id":"YnVklro1uwY","title":"MUMBAI CITY FC vs PUNJAB FC LIVE | ISL 2024-25 | Watch Along &amp; Football Match Live"},{"id":"y9vlso3TZ2E","title":"EarthCam Live:  City of Cavalier (Cavalier, ND)"},{"id":"WX1ox_0XlwA","title":"LIVE: View of the Beirut skyline in Lebanon"},{"id":"Rit_rC_6gqg","title":"?City in Shock! Helper Turned Horror! Monster Bob&#39;s Rampage Begins!"},{"id":"I2JvCqYCukc","title":"Sacramento Kings vs Oklahoma City Thunder NBA Live Scoreboard"},{"id":"NbZ7NIx63xw","title":"LIVE: ?????? ?? ?????...??????? ?? ???????! | Udaipur City Palace Clash | Vishvraj |Lakshyaraj Singh"},{"id":"i3w7qZVSAsY","title":"?Philippines Live Street BBQ Cam 1 Agdao, Davao City #davaocity #philippines"},{"id":"fzyvVBzAeBI","title":"CityTv En Vivo | Se?al Digital"},{"id":"PtChZ0D7tkE","title":"City of Orange Plaza Camera"},{"id":"M4IBqHexTfc","title":"Marine City, Michigan, USA | StreamTime Live"},{"id":"7i8ARjIeM2k","title":"Coral City Camera (Miami&#39;s Free-Range Aquarium Underwater Livestream)"},{"id":"epKxjBiK5j8","title":"Udaipur City Palace Clash Update Live:Vishwaraj Mewar ???? ???? ????? ?? ????,?? ???? ??????? ??????"},{"id":"36YnV9STBqc","title":"The Good Life Radio???24/7 Live Radio | Best Relax House, Chillout, Study, Running, Gym, Happy Music"},{"id":"KzDB8PvtK7g","title":"Udaipur City Palace Clash News Live: ????? ?? ????????? ?? ????? ???? ???| Vishvaraj Singh Mevad"},{"id":"pBlUgEr6cvQ","title":"BOY SAYONG ( CAM 2 )  OUTSIDE  STORE AGDAO PUBLIC MARKET DAVAO CITY PHILIPPINES"},{"id":"PFnJfAPaS7s","title":"Ocean City NJ Music Pier 8th &amp; Boardwalk"},{"id":"2PR848ScPMs","title":"EXCLUSIVE: ??????? ?? ???????! Vishvaraj Singh Mewar ?? ???? | Udaipur City Palace Clash"},{"id":"hFAFqyY0sxU","title":"LIVE: Watch Very Kansas City by KMBC/KCWE NOW! Kansas City news, weather and more."},{"id":"Cp4RRAEgpeU","title":"Live @ Santa Claus Village"},{"id":"xxDwVG0TvJ0","title":"Brasov City | Ceasu Rau - See Transylvania - ? Live Webcam"},{"id":"cJUpHzly0dg","title":"? PHILIPPINES Live Street View, outside Lyn&#39;s Sisig Beef BBQ, Davao City #philippines #livestream"},{"id":"DaKrzRiiE1s","title":"?LIVE? Mackinac Bridge Camera from the Riviera Motel in Mackinaw City"},{"id":"VeoQ_yMBOk0","title":"? PHILIPPINES Live Street View, F Bangoy Street, Agdao, Davao City #philippines #livestream"},{"id":"8M0AvPvPg0A","title":"Hits Radio 1 Live Pop Radio&#39; Top Hits 2024 - Pop Music 2024 - New Songs 2024 Best English Songs 2024"},{"id":"j-RFPnAN1Vw","title":"? PHILIPPINES Live Bankerohan Lyn&#39;s Food Haus outside, Davao City #philippines #livestream"},{"id":"82YFhoPyzUk","title":"City 41 LIVE | Latest Faisalabad News | Latest Faisalabad Breaking | Headlines, Bulletin &amp; News 24/7"},{"id":"2BLqhS59Elc","title":"160 LIVE World Cameras, Relaxing Music, Map, Daily Timelapse, Armchair Travel"},{"id":"KIikzoCNebg","title":"? PHILIPPINES Live Billiards Hall, Bankerohan , Davao City #philippines #livestream #billiards"},{"id":"hD3UxON4v8I","title":"CAM 10 ROSEMARY STREET., AGDAO DAVAO CITY PHILIPPINES"},{"id":"dN64IzvC8FI","title":"? PHILIPPINES Live Street View &amp; Dodong Barber Shop, Agdao, Davao City #philippines #livestream"}]};
    const categories = Object.keys(videoResults);

    // State management
    let currentCategory = categories[0]; // Default category
    let currentIndex = Math.floor(Math.random() * videoResults[currentCategory].length); // Start at random index

    // Create category buttons dynamically
    const categoryButtonsContainer = document.getElementById('categoryButtons');
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.style.margin = '0 5px';
        button.onclick = () => switchCategory(category);
        categoryButtonsContainer.appendChild(button);
    });

    // Load the current video into the iframe
    function loadVideo() {
        const video = videoResults[currentCategory][currentIndex];
        document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + video.id + '?autoplay=1';
        document.getElementById('videoTitle').textContent = video.title;
    }

    // Load the next video in the current category
    function loadNextVideo() {
        currentIndex = (currentIndex + 1) % videoResults[currentCategory].length;
        loadVideo();
    }

    // Switch the active category and load its first video
    function switchCategory(category) {
        currentCategory = category;
        currentIndex = Math.floor(Math.random() * videoResults[currentCategory].length); // Start with a random video
        loadVideo();
    }

    // Initial video load
    loadVideo();
</script>
    