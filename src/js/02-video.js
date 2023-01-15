import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load } from './storage';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';


player.on('timeupdate', throttle(setCurrentTimeToLocalStorage, 1000));

if (window.performance) {
    if (window.performance.getEntriesByType("navigation")[0].type === 'reload') {
        playVideo();
    } 
}

function setCurrentTimeToLocalStorage(data) {
  save('videoplayer-current-time', data);
}

function playVideo() {
    const playerCurrentTime = load(LOCALSTORAGE_KEY);
    if (playerCurrentTime === undefined) return;
    player.setCurrentTime(playerCurrentTime.seconds);
}




