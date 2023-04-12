import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(pausedTime, 1000));

function pausedTime () {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
    });
};

const currentTime = localStorage.getItem("videoplayer-current-time");
console.log(currentTime);

if (currentTime) {
    player.setCurrentTime(currentTime);
};