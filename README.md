# vee RP Loading Screen
## Description
https://cdn.discordapp.com/attachments/1401886690582204497/1401896720865951925/Desktop_2025.07.21_-_21.03.21.03.mp4?ex=68b43890&is=68b2e710&hm=7b8fb29bc834f80fb1e755ecf7982204140d25c7147979317c3c0b63faa6ead0&
This is a custom loading screen for vee RP FiveM server. It features a YouTube video background, background music, a server name display with a light bar animation, and random tips that appear periodically.

## Features

- YouTube video as background (muted and looping)
- Background music playback
- Dynamic server name display
- Animated light bar under the server name
- Random tips popup with animation
- Configurable via `ui/config.js`

## Installation

1. Download the resource folder.
2. Place the `sc_loading` folder into your FiveM server's `resources` directory.
3. Add `start sc_loading` to your `server.cfg` file.
4. Restart your server.

## Configuration

Edit the `ui/config.js` file to customize:

- `serverName`: The name of your server.
- `youtubeVideoId`: The ID of the YouTube video to use as background.
- `musicSrc`: Path to the background music file.
- `tips`: Array of tip messages to display randomly.

Example:
```javascript
var config = {
    serverName: 'vee rp',
    youtubeVideoId: '_8Y2zQbu4Uk',
    musicSrc: 'music/music.mp3',
    tips: [
        'Welcome to vee RP! Remember to follow the server rules.',
        'Tip: Use /help to view available commands.',
        'Tip: Check the server Discord regularly for the latest updates.',
        'Remember: Teamwork is the key to success!'
    ] // You can add more tips
};
```

## Files

- `ui/index.html`: Main HTML structure.
- `ui/style.css`: Styles for the loading screen.
- `ui/script.js`: JavaScript for dynamic content and animations.
- `ui/config.js`: Configuration file.
- `ui/music/music.mp3`: Background music (replace with your own).
- `client.lua`: Client-side script.
- `fxmanifest.lua`: Resource manifest.

## Credits

- Author: vee

## License

This project is licensed under the MIT License - see the LICENSE file for details (if applicable).

---

Watermark: vee Author: vee
