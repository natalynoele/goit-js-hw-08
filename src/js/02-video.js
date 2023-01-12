import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load } from './storage';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(setCurrentTimeToLocalStorage, 1000));

function setCurrentTimeToLocalStorage(data) {
    save('videoplayer-current-time', data);    
}
//check for Navigation Timing API support
if (window.performance) {
    if (window.performance.getEntriesByType("navigation")[0].type === 'reload') {
        try{
        const playerCurrentTime = load('videoplayer-current-time');
            player.setCurrentTime(playerCurrentTime.seconds);
    }catch (error){
        console.error('Set state error: ', error.message);
    }
    } 
}






