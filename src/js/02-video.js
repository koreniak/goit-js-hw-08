import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(() => {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
    });
}, 1000));

const currentTime = localStorage.getItem("videoplayer-current-time");
console.log(currentTime);

player.setCurrentTime(currentTime);