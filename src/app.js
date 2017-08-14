var newTrack = require('./eventListeners/new_track');
var configBlock = require('./eventListeners/config_block');
var transport = require('./eventListeners/transport');
var sessions = require('./eventListeners/sessions');

const init = () => {  //initializes the entire application...

    console.log('JS Started!');
    newTrack.startListening();
    configBlock.startListening();
    transport.startListening();
    sessions.startListening();

    // More features to be added...

}

/////////////////...THIS IS WHAT  RUNS...//////////////////// 

window.addEventListener('load', init);