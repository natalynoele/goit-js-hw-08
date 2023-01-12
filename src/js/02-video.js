import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(setCurrentTimeToLocalStorage, 1000));

function setCurrentTimeToLocalStorage(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}
//check for Navigation Timing API support
if (window.performance) {
    if (window.performance.getEntriesByType("navigation")[0].type === 'reload') {

        const playerCurrentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
        player.setCurrentTime(playerCurrentTime.seconds).then(function (seconds) {
            player.play(seconds);
        });
    } 
}




player.getVideoTitle().then(function(title) {
    console.log('title:', title);
    
});

console.log(player);




