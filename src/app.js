var newTrack = require('./eventListeners/new_track');
var configBlock = require('./eventListeners/config_block');
var transport = require('./eventListeners/transport');
var sessions = require('./eventListeners/sessions');

const init = () => {  //initializes the entire application...

    console.log('JS Started!');
    newTrack.startListening();
    //configBlock.startListening();
    //transport.startListening();
    //sessions.startListening();

    // More features to be added...

}

/////////////////...THIS IS WHAT RUNS FIRST...//////////////////// 

window.addEventListener('load', init);

////////////////...THIS LISTENS FOR ACTIONS...////////////////////

document.addEventListener( 'action', (event) => {
    console.log('Got event', event.detail);
    //store = reducer(store, e.detail); //update the store before rendering
    //console.log('STORE: ', store);
    //document.dispatchEvent(new CustomEvent('state', { detail: e.detail }));
}, false );