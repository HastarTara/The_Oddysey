
    ---
    layout: post
    title: "The World Window - 15/11/2024"
    author: yourname
    categories: [live ambient TV]
    tags: [youtube]
    description: "Watch live streams in different categories like Nature."
    ---

    <div style="text-align: center;">
        <button onclick="loadNextVideo('Nature')">Next</button>
    </div>
    <iframe id="videoFrame" width="100%" height="600" style="border: 1px solid #ccc;" allowfullscreen></iframe>
    <div id="videoTitle" style="text-align: center; font-size: 1.5em; margin-top: 10px;"></div>

    <script>
        // Pass the server-side video results to the frontend
        const videoResults = {"Nature":[{"id":"6ycikMM4IO0","title":"AMAZON 4K - The World&#39;s Largest Tropical Rainforest | Relaxing Music With Beautiful Nature Scenes"},{"id":"F0GOOP82094","title":"? Wildlife In The Forest - 24/7 LIVE by Morten Hilmer ?"},{"id":"BJ3Yv572V1A","title":"? LIVE: Enter the Savage Kingdom: Ultimate Predators | Watch Now on Nat Geo WILD"},{"id":"hAxvZj89-34","title":"?24/7 LIVE: Kitty TV?Cutest Squirrel and Bird Watching?"},{"id":"AuarxZ9IIjw","title":"LIVE- GREAT SALT LAKE CAMPFIRE - Virtual Fireplace Video with Nature Sounds for Meditation"},{"id":"LUcxT31-G1c","title":"Beautiful Natural Wonders You Won&#39;t Believe Are Real ? Wonders of the World 4K"},{"id":"h-mRJ7XwOKQ","title":"PARADISE 4K - Relaxing Music Along With Beautiful Nature Videos (4K Video Ultra HD)"},{"id":"5xMNDwLpfyc","title":"Rain Sounds For Sleeping - 99% Instantly Fall Asleep With Rain And Thunder Sound At Night"},{"id":"RnCAl0mQgqA","title":"? Birds and Squirrels in the Forest - 24/7 LIVE by Morten Hilmer ?"},{"id":"wwya7JCD5_0","title":"Beautiful Relaxing Music, Peaceful Soothing Instrumental Music, &quot;Wilderness Bears&quot; by Tim Janis"},{"id":"qHXFLsnKDq0","title":"Mountain Stream Flowing 24/7. Forest Stream. Flowing Water. White Noise, Nature Sounds for Sleeping."},{"id":"TZikBxNaaQk","title":"Most Beautiful Cities In The World 8K Video Ultra HD With Soft Piano Music - 60 FPS - 8K Nature Film"},{"id":"hG-oUz9rcoQ","title":"? 24/7 LIVE: Cat TV for Cats to Watch ? Cute Little Birds Squirrels 4K"},{"id":"LkltlUvs6hM","title":"? 24/7 LIVE: Cat TV for Cats to Watch ? Harvest Season for Birds Chipmunks Squirrels 4K"},{"id":"Yt-yNQPqWZ4","title":"Deep Sleep During the Rainy Night - Rain Sounds For Sleeping - Beat Insomnia, ASMR, Relax, STUDY"},{"id":"dXIyMS61B68","title":"Beautiful Relaxing Peaceful Music, Calm Music 24/7, &quot;Tropical Shores&quot; By Tim Janis"},{"id":"XnjJFd1sgME","title":"Warm Jazz Melodies &amp; Waterfall Sounds In Cozy Living Room - Sweet Jazz In Tranquil Forest Ambience"},{"id":"l6J0ylYTO4s","title":"Relaxing Piano Music &amp; Water Sounds 24/7 - Ideal for Stress Relief and Healing"},{"id":"inDzgZjCxmQ","title":"Cattle Pond Pasture at Farm Sanctuary powered by EXPLORE.org"},{"id":"x10vL6_47Dw","title":"Live Birds In 4K! Cornell Lab FeederWatch Cam at Sapsucker Woods"},{"id":"Tq117lqpr-A","title":"PARADISE 8K Video Ultra HD With Soft Piano Music - 60 FPS - 8K Nature Film"},{"id":"uXNU0XgGZhs","title":"TOP 50 BEAUTIFUL ANIMALS - 4K HDR 120fps Dolby Vision with Animal Sounds (Colorfully Dynamic)"},{"id":"Z-ls33CFpY0","title":"Cozy Autumn Cabin Morning sunrise, Beautiful Relaxing  Music, Peaceful Music, by Tim Janis"},{"id":"n4acQ0Dobs8","title":"? 24/7 LIVE: Cat TV for Cats to Watch ? Beautiful Birds and Squirrels 4K"},{"id":"2BLqhS59Elc","title":"160 LIVE World Cameras, Relaxing Music, Map, Daily Timelapse, Armchair Travel"},{"id":"N7oOyWgPYwM","title":"4K Animal World : [4K UHD] Beautiful Wildlife Animals and Relaxing Music for Stress Relief"},{"id":"OMlf71t2oV0","title":"Live Jelly Cam - Monterey Bay Aquarium"},{"id":"4kRzwJXaeIM","title":"LIVE 4K 60fps Bird Feeder Cam - Hedgehog &amp; Bird Watching (3D Audio) ASMR HQ"},{"id":"3szkFHfr6sA","title":"Wolong Grove Panda Cam powered by EXPLORE.org"},{"id":"oI8R4_UG3Fs","title":"Live Deer, Bird &amp; Wildlife Cam"}]};

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
    