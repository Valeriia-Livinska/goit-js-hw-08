import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const startTime = localStorage.getItem('videoplayer-current-time');

if (startTime) {
  player.setCurrentTime(startTime).then(() => {
    console.log(`Video starts from the ${startTime} seconds`);
  });
}

player.on('timeupdate', throttle(getCurrentVideoTime, 1000));

function getCurrentVideoTime(data) {
  let currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}
