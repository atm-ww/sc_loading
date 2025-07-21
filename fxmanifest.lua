fx_version 'cerulean'
game 'gta5'

author 'vee'
description 'Custom Loading Screen for vee rp'
version '1.0.0'

loadscreen 'ui/index.html'
loadscreen_manual_shutdown 'yes'

files {
    'ui/index.html',
    'ui/style.css',
    'ui/script.js',
    'ui/music/music.mp3',
    'ui/config.js',
}

-- Watermark: vee

client_script 'client.lua'