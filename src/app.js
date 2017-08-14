var newTrack = require('./eventListeners/new_track');
var configBlock = require('./eventListeners/config_block');

const init = () => {

    console.log('JS Started!');
    newTrack.startListening();
    configBlock.startListening();

}



// THIS IS WHAT  RUNS...
window.addEventListener('load', init);