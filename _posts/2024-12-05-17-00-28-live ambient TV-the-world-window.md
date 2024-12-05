
---
layout: post
title: "The World Window - 05/12/2024"
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
    const videoResults = {"Nature":[{"id":"6ycikMM4IO0","title":"AMAZON 4K - The World&#39;s Largest Tropical Rainforest | Relaxing Music With Beautiful Nature Scenes"},{"id":"MrWIPGEOt9k","title":"Paradise Island 4K ? Scenic Relaxation Film with Peaceful Relaxing Music and Nature Video 4K UltraHD"},{"id":"vDAsUcdcuE0","title":"Bird Garden | Colorful Birds | Breathtaking Nature, Wonderful Bird Songs | Stress Relief and Healing"},{"id":"2_ovWpVE9es","title":"Mountain River Waterfall Flowing 24/7. Water Sounds, Nature White Noise. River Sounds for Sleeping."},{"id":"EN_q_m78jI0","title":"TUSCANY 4K HD - Amazing Aerial Film with Calming Music - Nature 4K Video UltraHD"},{"id":"R_qT0-KoCm8","title":"? Sleep Fast with Pure Nature Rain and Incredible Present Thunder Sounds | Black Screen"},{"id":"AuarxZ9IIjw","title":"LIVE- GREAT SALT LAKE CAMPFIRE - Virtual Fireplace Video with Nature Sounds for Meditation"},{"id":"u3KKTQUGzuA","title":"Bird Garden | Colorful Birds | Breathtaking Nature, Wonderful Bird Songs | Stress Relief and Healing"},{"id":"bw0uHUB2knA","title":"Silent Winter - Native American Flute Melody Blends With The Breath Of Nature | Flute Dream 24/7"},{"id":"qHXFLsnKDq0","title":"Mountain Stream Flowing 24/7. Forest Stream. Flowing Water. White Noise, Nature Sounds for Sleeping."},{"id":"-f3RXYc6_LU","title":"The World&#39;s Strangest Birds | Peaceful Nature Scenery | Stress Relief | Relaxing Bird Sounds"},{"id":"5_1OOKcawd8","title":"??Relaxing Zen Music 24/7, Healing Music, Meditation Music, Spa Music, Sleep, Zen, Nature Sounds"},{"id":"zrRxvbtzg0k","title":"Pretty Little Birds - Stress-relieving nature sounds - Healing and peaceful music - Beautiful nature"},{"id":"cqkwbsi5KbQ","title":"GOOD FATHERS | Instrumental Worship &amp; Scriptures with Winter Nature ? Inspirational CKEYS"},{"id":"96t3GM7eY8A","title":"Prayer Instrumental Music with Scriptures &amp; Nature | 24/7 DappyTKeys Piano Worship"},{"id":"hAxvZj89-34","title":"?24/7 LIVE CAT TV NO ADS?Cutest Squirrel and Bird Watching?"},{"id":"dXIyMS61B68","title":"Beautiful Relaxing Peaceful Music, Calm Music 24/7, &quot;Tropical Shores&quot; By Tim Janis"},{"id":"CqXeTN-xkm0","title":"Relaxing Bird Sounds 4K~ Birds Singing Heal Stress, Anxiety And Depression, Heal The Mind"},{"id":"JF06s21MIHk","title":"Relaxing Music and The Sound of Water to Relieve Worry and Anxiety ? Relieve Stress"},{"id":"5PzOaNWqAy4","title":"The Vital Essence of Nature in 8K HDR 60FPS Dolby Vision"},{"id":"NajjCC3geXs","title":"? Autumn River Waterfall Flowing 24/7, Water Sounds, Nature White Noise, River Sounds for Sleeping"},{"id":"HckXZV6jm3I","title":"FLYING OVER BACALAR (4K UHD) - Soothing Music Along With Beautiful Nature Video - 4K Video ULTRA HD"},{"id":"JJgLX-jdedA","title":"FLYING OVER AMAZON (4K UHD) - Relaxing Music Along With Beautiful Nature Videos(4K Video Ultra HD)"},{"id":"LnD-XEQ2hzQ","title":"Fall Asleep With Relaxing Wave Sounds at Night, Low Pitch Ocean Music for Deep Sleeping"},{"id":"bhEtiA0LFYk","title":"Nature?s Heartbeat Unveiled in 8K HDR Dolby Vision 60FPS"},{"id":"ksA7UCsFKSM","title":"Beautiful Relaxing Music, Peaceful Soothing Instrumental Music, &quot;First November Snow&quot; by Tim Janis"},{"id":"XIpeLy7yJlc","title":"Bird Paradise | Vibrant Birds | Stunning Nature and Melodic Bird Songs | Relaxation and Rejuvenation"},{"id":"EvsLqQS_80E","title":"?24/7 LIVE Cat TV? Non-Stop BIRDS and Squirrels in Relaxing Forest Corner"},{"id":"KTEd4fZV9qE","title":"4K (60 FPS) | Cute Baby Animals In A Peaceful Nature World with Relaxing Music (Dynamic Colors)"},{"id":"b_TW4NYsbOo","title":"Sleep Music for Deep Sleep, Anxiety and Depressive States, Heal Body, Mind"}],"city":[{"id":"9HdiY3Co4XI","title":"Syria War Latest Today | Syrian Rebels Say They Have Entered Key City of Hama | News18 Live | N18G"},{"id":"RSJtgDvyPgs","title":"Syria News Live | After Taking Aleppo, Syrian Rebels Enter Strategic City Of Hama | Syria War Live"},{"id":"qKFwPv008Ek","title":"? LIVE | Firing incident in Punjab Uni | Clash of Students | Big Breaking | Must Watch | City42"},{"id":"GHyA898EsHQ","title":"Syria Civil War LIVE: Syrian City Hama Falls to Rebels as Conflict Rages"},{"id":"DYH9h6i53ko","title":"Mr.X Today - Who will get the SMG&#39;s? - Jogi Singh- Soulcity by Echorp - 8bit Mafia"},{"id":"fzyvVBzAeBI","title":"CityTv En Vivo | Se?al Digital"},{"id":"Uw3DyvzUlbY","title":"?City in Shock! Helper Turned Horror! Monster Bob&#39;s Rampage Begins!"},{"id":"AyhT1QhFFqE","title":"24/7 Let the City Rain Erase Negativity and Stress - Immerse Yourself in the Calming City Rain"},{"id":"S0OUNJUt5oI","title":"Deep House Mix 2024 | Mixed By DL Music | City At Night"},{"id":"2GGmRRdZUyI","title":"Talking Angela: In the City! ?? ALL EPISODES MARATHON ? Cartoons for Kids"},{"id":"uPeKq1Vq2_s","title":"SORTEIO MUNDIAL DE CLUBES 2025 AO VIVO - FLAMENGO, PALMEIRAS, FLUMINENSE E BOTAFOGO FIFA WORDCUP"},{"id":"gaZ9V1k35Oo","title":"City of Ellsworth, Maine - City Hall Christmas Tree"},{"id":"u6UbwlQQ3QU","title":"Santa Fe Junction/Kansas City, Missouri, USA | Virtual Railfan LIVE !"},{"id":"5ytYnx93bXs","title":"CAM 9 ROSEMARY STREET AGDAO DAVAO CITY, PHILLIPPINES"},{"id":"7i8ARjIeM2k","title":"Coral City Camera (Miami&#39;s Free-Range Aquarium Underwater Livestream)"},{"id":"j8Izv-RJwCo","title":"LONG BUS, CITY BUS, SCHOOL BUS Vs MASSIVE SPEED BUMPS - BeamNG.Drive"},{"id":"xxbor0t6yRk","title":"? LIVE City 21 News | Breaking News | Pakistan News | Karachi News | News Headlines | City 21"},{"id":"83VPsAPWiME","title":"? 24/7 NYC Live Cam | Times Square, skyline, streets, more"},{"id":"dN64IzvC8FI","title":"? PHILIPPINES Live Street View &amp; Dodong Barber Shop, Agdao, Davao City #philippines #livestream"},{"id":"hRJVykzy78g","title":"AC Boardwalk Live"},{"id":"C6g7dHwa62U","title":"SORTEIO DO SUPER MUNDIAL DE CLUBES AO VIVO - VEJA OS GRUPOS DEFINIDOS"},{"id":"we1LMgRT8Q0","title":"? PHILIPPINES Live Street View, Suing Store, San Roque, Agdao, Davao City #philippines #livestream"},{"id":"IVRDXt0w2pE","title":"City Of St. Marys TV Live Stream"},{"id":"36YnV9STBqc","title":"The Good Life Radio???24/7 Live Radio | Best Relax House, Chillout, Study, Running, Gym, Happy Music"},{"id":"3TFi_ZDjVkE","title":"? Philippines Live Vulcanizing Tyre Repair Shop, Agdao, Davao City #philippines #livestream"},{"id":"2BLqhS59Elc","title":"160 LIVE World Cameras, Relaxing Music, Map, Daily Timelapse, Armchair Travel"},{"id":"TsgoxkRFit0","title":"EarthCam Live:  SUMMIT One Vanderbilt (New York City, NY)"},{"id":"RH5ajkC9DkE","title":"? PHILIPPINES live Street View, Soliman Street, Agdao, Davao City #philippines #livestream"},{"id":"mQekvEWJmOM","title":"December 5, 2024  Minneapolis City Council"},{"id":"8M0AvPvPg0A","title":"Hits Radio 1 Live Pop Radio&#39; Top Hits 2024 - Pop Music 2024 - New Songs 2024 Best English Songs 2024"}]};
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
    