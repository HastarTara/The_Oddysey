
    ---
    layout: post
    title: "The World Window"
    author: yourname
    categories: [live ambient TV]
    tags: [youtube]
    description: "Watch live streams in different categories like Nature, City, and Space."
    ---

    <div style="text-align: center;">
        <button onclick="loadNextVideo('Nature')">Next</button>
    </div>
    <iframe id="videoFrame" width="100%" height="600" style="border: 1px solid #ccc;" allowfullscreen></iframe>
    <div id="videoTitle" style="text-align: center; font-size: 1.5em; margin-top: 10px;"></div>

    <script>
        // Pass the server-side video results to the frontend
        const videoResults = {"Nature":[{"id":"6ycikMM4IO0","title":"AMAZON 4K - The World&#39;s Largest Tropical Rainforest | Relaxing Music With Beautiful Nature Scenes"},{"id":"F0GOOP82094","title":"? Wildlife In The Forest - 24/7 LIVE by Morten Hilmer ?"},{"id":"hAxvZj89-34","title":"?24/7 LIVE: Kitty TV?Cutest Squirrel and Bird Watching?"},{"id":"2_ovWpVE9es","title":"Mountain River Waterfall Flowing 24/7. Water Sounds, Nature White Noise. River Sounds for Sleeping."},{"id":"LUcxT31-G1c","title":"Beautiful Natural Wonders You Won&#39;t Believe Are Real ? Wonders of the World 4K"},{"id":"DHUnz4dyb54","title":"Tropical Reef Camera powered by EXPLORE.org"},{"id":"56WBs0A4Kng","title":"? 24/7 LIVE: Cat TV for Cats to Watch ? Beautiful Birds Squirrels in the Forest 4K"},{"id":"h-mRJ7XwOKQ","title":"PARADISE 4K - Relaxing Music Along With Beautiful Nature Videos (4K Video Ultra HD)"},{"id":"Yt-yNQPqWZ4","title":"Deep Sleep During the Rainy Night - Rain Sounds For Sleeping - Beat Insomnia, ASMR, Relax, STUDY"},{"id":"ylCepo-8gRI","title":"? 24/7 LIVE: Cat TV for Cats to Watch ? Cute Birds and Squirrels 4K"},{"id":"RnCAl0mQgqA","title":"? Birds and Squirrels in the Forest - 24/7 LIVE by Morten Hilmer ?"},{"id":"qHXFLsnKDq0","title":"Mountain Stream Flowing 24/7. Forest Stream. Flowing Water. White Noise, Nature Sounds for Sleeping."},{"id":"TZikBxNaaQk","title":"Most Beautiful Cities In The World 8K Video Ultra HD With Soft Piano Music - 60 FPS - 8K Nature Film"},{"id":"798qd_SQU3I","title":"Waterfall Gentle Stream Sound in forest 24/7. Waterfall Sounds, Flowing Water, White Noise for Sleep"},{"id":"vDAsUcdcuE0","title":"Bird Garden | Colorful Birds | Breathtaking Nature, Wonderful Bird Songs | Stress Relief and Healing"},{"id":"dXIyMS61B68","title":"Beautiful Relaxing Peaceful Music, Calm Music 24/7, &quot;Tropical Shores&quot; By Tim Janis"},{"id":"l6J0ylYTO4s","title":"Relaxing Piano Music &amp; Water Sounds 24/7 - Ideal for Stress Relief and Healing"},{"id":"ydYDqZQpim8","title":"Namibia: Live stream in the Namib Desert"},{"id":"inDzgZjCxmQ","title":"Cattle Pond Pasture at Farm Sanctuary powered by EXPLORE.org"},{"id":"x10vL6_47Dw","title":"Live Birds In 4K! Cornell Lab FeederWatch Cam at Sapsucker Woods"},{"id":"Z-ls33CFpY0","title":"Cozy Autumn Cabin Morning sunrise, Beautiful Relaxing  Music, Peaceful Music, by Tim Janis"},{"id":"gDGl-cC-IVQ","title":"Magnificent Planet Wildlife 4K  ?Melodic Wildlife Symphony Relaxing Piano Music and Animal Scenes"},{"id":"uXNU0XgGZhs","title":"TOP 50 BEAUTIFUL ANIMALS - 4K HDR 120fps Dolby Vision with Animal Sounds (Colorfully Dynamic)"},{"id":"2BLqhS59Elc","title":"160 LIVE World Cameras, Relaxing Music, Map, Daily Timelapse, Armchair Travel"},{"id":"z7SiAaN4ogw","title":"? Live cam World - Rolling Cam around the World - Live webcam"},{"id":"gf6SK0NObfI","title":"Ocean Meditation ? Calm Sea and Soothing Ocean Waves Scene and Sounds - Sunny Tropical Beach"},{"id":"N7oOyWgPYwM","title":"4K Animal World : [4K UHD] Beautiful Wildlife Animals and Relaxing Music for Stress Relief"},{"id":"N3KdmZSJrUA","title":"Relaxing Zen Music 24/7 - Bamboo, Relaxing Music, Meditation Music, Peaceful Music, Nature Sounds"},{"id":"EvsLqQS_80E","title":"?24/7 LIVE Cat TV? Non-Stop BIRDS and Squirrels in Relaxing Forest Corner"},{"id":"OMlf71t2oV0","title":"Live Jelly Cam - Monterey Bay Aquarium"}]};

        // Function to get a random video ID for each category
        function getRandomVideo(category) {
            const videos = videoResults[category];
            const randomIndex = Math.floor(Math.random() * videos.length);
            return videos[randomIndex];
        }

        // Function to load the selected video into the iframe
        function loadVideo(category) {
            const video = getRandomVideo(category);
            document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + video.id + '?autoplay=1';
            document.getElementById('videoTitle').innerText = video.title;
        }

        // Function to load the next video in the category
        function loadNextVideo(category) {
            const videos = videoResults[category];
            const currentIndex = videos.findIndex(video => document.getElementById('videoFrame').src.includes(video.id));
            const nextIndex = (currentIndex + 1) % videos.length;
            const nextVideo = videos[nextIndex];
            document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + nextVideo.id + '?autoplay=1';
            document.getElementById('videoTitle').innerText = nextVideo.title;
        }

        // Automatically load a video for the first category on page load
        window.onload = () => loadVideo('Nature');
    </script>
    