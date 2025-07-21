// Watermark: vee Author: vee

document.addEventListener('DOMContentLoaded', function() {
    // Set server name
    document.getElementById('server-name').textContent = config.serverName;

    // Set YouTube video
    var videoContainer = document.getElementById('video-container');
    var youtubeIframe = document.createElement('iframe');
    youtubeIframe.id = 'youtube-video';
    youtubeIframe.src = `https://www.youtube.com/embed/${config.youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${config.youtubeVideoId}&controls=0`;
    youtubeIframe.frameBorder = '0';
    youtubeIframe.allow = 'autoplay; encrypted-media';
    youtubeIframe.allowFullscreen = true;
    videoContainer.appendChild(youtubeIframe);

    // Set music source
    var audio = document.querySelector('audio');
    var musicSource = document.getElementById('music-source');
    musicSource.src = config.musicSrc;
    audio.load();
    audio.play();

    // Display server tips
    function showTip() {
        if (config.tips && config.tips.length > 0) {
            var tipElement = document.getElementById('tip-popup');
            var tipText = document.getElementById('tip-text');
            var randomTip = config.tips[Math.floor(Math.random() * config.tips.length)];
            tipText.textContent = randomTip;
            tipElement.classList.add('show');
            setTimeout(() => {
                tipElement.classList.remove('show');
            }, 5000); // Display for 5 seconds
        }
    }

    setInterval(showTip, 10000); // Display every 10 seconds
    showTip(); // Initial display

    // Example NUI callback if needed
    window.addEventListener('message', function(event) {
        if (event.data.type === 'ui') {
            if (event.data.status == true) {
                document.body.style.display = 'block';
            } else {
                document.body.style.display = 'none';
            }
        }
    });
});

// Watermark: vee Author: vee