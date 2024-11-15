
---
layout: post
title: "The World Window - 15/11/2024"
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
    const videoResults = {"Nature":[{"id":"g6MrI7uwZwU","title":"Most Colorful Birds &amp; Breathtaking Nature | Ultimate Stress Relief and Healing Sounds | Birds Garden"},{"id":"6ycikMM4IO0","title":"AMAZON 4K - The World&#39;s Largest Tropical Rainforest | Relaxing Music With Beautiful Nature Scenes"},{"id":"u3KKTQUGzuA","title":"Bird Garden | Colorful Birds | Breathtaking Nature, Wonderful Bird Songs | Stress Relief and Healing"},{"id":"2_ovWpVE9es","title":"Mountain River Waterfall Flowing 24/7. Water Sounds, Nature White Noise. River Sounds for Sleeping."},{"id":"uLBumJ_mhYU","title":"Most Wonderful Wild Birds | Breathtaking Nature | Wonderful Bird Songs | Stress Relief &amp; Healing"},{"id":"t4Dy8WAvMnY","title":"FLYING OVER PARADISE 4K UHD - Relaxing Music Along With Beautiful Nature Videos - 4K Video HD"},{"id":"0O_LThYytFU","title":"The Most Beautiful Birds on Earth: Relaxing Nature Sounds | Breathtaking Nature &amp; Healing Sounds"},{"id":"56WBs0A4Kng","title":"? 24/7 LIVE: Cat TV for Cats to Watch ? Beautiful Birds Squirrels in the Forest 4K"},{"id":"vDAsUcdcuE0","title":"Bird Garden | Colorful Birds | Breathtaking Nature, Wonderful Bird Songs | Stress Relief and Healing"},{"id":"LkltlUvs6hM","title":"? 24/7 LIVE: Cat TV for Cats to Watch ? Harvest Season for Birds Chipmunks Squirrels 4K"},{"id":"96t3GM7eY8A","title":"Prayer Instrumental Music with Scriptures &amp; Nature | 24/7 DappyTKeys Piano Worship"},{"id":"Nqq1yAkFOc0","title":"Beautiful Birds - Music to Reduce Stress, Prevent Anxiety and Depression - Nature Sounds"},{"id":"UgqGUgPWf8w","title":"Christian Piano Music with Scriptures, Rain &amp; Nature Sound | 24/7 DappyTKeys Piano Worship"},{"id":"AuarxZ9IIjw","title":"LIVE- GREAT SALT LAKE CAMPFIRE - Virtual Fireplace Video with Nature Sounds for Meditation"},{"id":"av8scJHf5PI","title":"AUTUMN ICELAND 4K HD -  Scenic Relaxation Film With Relaxing Music - Nature 4K Video Ultra HD"},{"id":"dXIyMS61B68","title":"Beautiful Relaxing Peaceful Music, Calm Music 24/7, &quot;Tropical Shores&quot; By Tim Janis"},{"id":"-f3RXYc6_LU","title":"The World&#39;s Strangest Birds | Peaceful Nature Scenery | Stress Relief | Relaxing Bird Sounds"},{"id":"cVYwZe1Iy_g","title":"Gentle Spa Piano? Relaxing Music with Nature Sounds ~ Stress Relief &amp; Soothing Piano Melodies"},{"id":"837ZM9PtM7k","title":"? Sleep Fast with Pure Nature Rain &amp; Incredible Present Thunder Sounds | Black Screen #21"},{"id":"d2Rf2gjYNmc","title":"LEAD ME LORD | Instrumental Worship &amp; Scriptures &amp; Winter Nature ?? Inspirational CKEYS"},{"id":"5_1OOKcawd8","title":"??Relaxing Zen Music 24/7, Healing Music, Meditation Music, Spa Music, Sleep, Zen, Nature Sounds"},{"id":"AiSTmxWAUwI","title":"FLYING OVER MOOREA (4K UHD) - Relaxing Music Along With Beautiful Nature Video - 4K Video ULTRA HD"},{"id":"zrRxvbtzg0k","title":"Pretty Little Birds - Stress-relieving nature sounds - Healing and peaceful music - Beautiful nature"},{"id":"zjOPxzo-Qwg","title":"Peaceful Music, Relaxing Music, Instrumental Music, &quot;Beautiful Autumn Lake&quot; by Tim Janis"},{"id":"R_qT0-KoCm8","title":"? Sleep Fast with Pure Nature Rain and Incredible Present Thunder Sounds | Black Screen"},{"id":"iaALv6onGWA","title":"? Relaxing Music 24/7 - Nature Soul,  Healing Music, Meditation Music, Spa Music, Sleep, Study Music"},{"id":"vyEuqwcam2Q","title":"Autumn Nature Scenery Morning sunrise, Beautiful Relaxing  Hymns, Peaceful Music,  by Tim Janis"},{"id":"_02En_dSoP4","title":"Beautiful Birds| Colorful Birds | Breathtaking Nature, Amazing Bird Songs| Stress Relief and Healing"},{"id":"K9ZK5HImURc","title":"Bird Garden | Colorful Birds | Breathtaking Nature, Wonderful Bird Songs | Stress Relief and Healing"},{"id":"CqXeTN-xkm0","title":"Relaxing Bird Sounds 4K~ Birds Singing Heal Stress, Anxiety And Depression, Heal The Mind"}],"city":[{"id":"gXexf1dQf_Y","title":"ICC Champions Trophy 2025 News LIVE: 26/11 Mastermind In Venue City! | India Today Exclusive"},{"id":"AyhT1QhFFqE","title":"24/7 Let the City Rain Erase Negativity and Stress - Immerse Yourself in the Calming City Rain"},{"id":"Qv18IVD7tC4","title":"Emergency Imposed,Complete Lock Down,Important Decisions |Maryam Orangzaib Press Conference | City42"},{"id":"JId5Qfws9bM","title":"?City in Shock! Helper Turned Horror! Monster Bob&#39;s Rampage Begins!"},{"id":"S0OUNJUt5oI","title":"Deep House Mix 2024 | Mixed By DL Music | City At Night"},{"id":"hFAFqyY0sxU","title":"LIVE: Watch Very Kansas City by KMBC/KCWE NOW! Kansas City news, weather and more."},{"id":"w_vklJiJRFo","title":"?? ????? || ?????? ??? ?????? ?????? ????? ?????? ??? ????? ????????? || ????? ?????? ??? ???? ?????"},{"id":"H4XCNRn68rw","title":"City of Evanston, IL Live Stream"},{"id":"fzyvVBzAeBI","title":"CityTv En Vivo | Se?al Digital"},{"id":"I634LFttEQM","title":"City Panorama ? 24/7 LIVE Stream Webcams St?dtereise"},{"id":"b_R4WJTtZSI","title":"Kansas City, Mo. City Communications Live Stream"},{"id":"DOYO-bzAIuo","title":"Marine City, Michigan, USA | StreamTime Live"},{"id":"iaMx6t6VPcM","title":"Israel Attacks Iran: Iran&#39;s Shiraz City Under Attack | 2nd Wave of Missile Attack Begins | WION LIVE"},{"id":"GTYtt_YX-a0","title":"City42 LIVE | Latest Lahore News | Latest Lahore Breaking | Headlines, Bulletin &amp; News 24/7"},{"id":"HgztdK3E9nw","title":"?GTA 4 | GTA 3 | GTA VICE CITY | GTA SAN ANDREAS [PC] - Full Game - GTA IV | GTA III | LIVE STREAM?"},{"id":"xR3kxBG_v7Y","title":"Kansas City (Doc&#39;s Caboose), Missouri, USA | Virtual Railfan LIVE !"},{"id":"hMFKWyvHHr0","title":"BOY SAYONG ( CAM 1)  STORE AGDAO  PUBLIC MARKET DAVAO CITY PHILIPPINES"},{"id":"hRJVykzy78g","title":"AC Boardwalk Live"},{"id":"82YFhoPyzUk","title":"City 41 LIVE | Latest Faisalabad News | Latest Faisalabad Breaking | Headlines, Bulletin &amp; News 24/7"},{"id":"rArZvjYXJ-g","title":"Actor Ravi Kishan in Vasai-Virar LIVE | Maharashtra Vidhansabha Election 2024"},{"id":"TsgoxkRFit0","title":"EarthCam Live:  SUMMIT One Vanderbilt (New York City, NY)"},{"id":"dN64IzvC8FI","title":"? PHILIPPINES Live Street View &amp; Dodong Barber Shop, Agdao, Davao City #philippines #livestream"},{"id":"rVuZn0j_kRo","title":"Live South Beach Camera - City of South Haven on Lake Michigan"},{"id":"8M0AvPvPg0A","title":"Hits Radio 1 Live Pop Radio&#39; Top Hits 2024 - Pop Music 2024 - New Songs 2024 Best English Songs 2024"},{"id":"50XLhaq3G94","title":"? PHILIPPINES Live INSIDE Lyn&#39;s Sisig Beef BBQ, Davao City #philippines #livestream"},{"id":"uNd5kvrGHjk","title":"Hits Radio 1 Top Songs 2024 - Pop Music Playlist - Best English Songs 2024 - New Music 2024 Top Hits"},{"id":"wUQc3RoLAPs","title":"Houston, Texas | 24/7 Live City Camera"},{"id":"z5zjiFNne_c","title":"Vatican Media Live - English"},{"id":"j-RFPnAN1Vw","title":"? PHILIPPINES Live Bankerohan Lyn&#39;s Food Haus outside, Davao City #philippines #livestream"},{"id":"KH895UilWlY","title":"? Kingston Panoramic City Live Camera 24/7 | Jamaica LIVE"}]};
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
    