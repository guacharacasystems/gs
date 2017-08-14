const newTrack          = require('./eventListeners/new_track');
const configBlock       = require('./eventListeners/config_block');
const transport         = require('./eventListeners/transport');
const sessions          = require('./eventListeners/sessions');
const reducer           = require('./reducer/reducer');
const renderDOM         = require('./render_methods/render_DOM');
var store               = require('./store/store');

const init = () => {  //initializes the entire application...

    newTrack.startListening();
    //configBlock.startListening();
    //transport.startListening();
    //sessions.startListening();

    // More features to be added...

}

//THIS IS WHAT RUNS FIRST

window.addEventListener('load', init);

//THIS LISTENS FOR ACTIONS

document.addEventListener( 'action', (event) => {
    
    store = reducer( store, event.detail );     //update the store before rendering
    console.log('STORE: ', store);              //log the updated state
    
    document.dispatchEvent( 
        new CustomEvent( 'state-change', { detail: event.detail.type })
    );

}, false );

//THIS LISTENS FOR STATE CHANGES
document.addEventListener('state-change', function(event){
    renderDOM(event.detail, store);                           //render the DOM based on the application state
});