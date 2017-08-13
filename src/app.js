var eventListeners = require('./eventListeners/new_track');
//var eventListeners = require('./eventListeners/new_tracks');
//var eventListeners = require('./eventListeners/new_tracks');
//var eventListeners = require('./eventListeners/new_tracks');
//var eventListeners = require('./eventListeners/new_tracks');
//var eventListeners = require('./eventListeners/new_tracks');
//var eventListeners = require('./eventListeners/new_tracks');
//var eventListeners = require('./eventListeners/new_tracks');


const init = ()=>{

    console.log('JS Started!');
    eventListeners.startListening();



}

window.addEventListener('load', init);