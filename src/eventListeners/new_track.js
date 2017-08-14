const actions = require('../actions/actions.js');

const t1_add = document.querySelector('#t1_add');
const t2_add = document.querySelector('#t2_add');
const t3_add = document.querySelector('#t3_add');
const t4_add = document.querySelector('#t4_add');

const startListening = () => {
    
    t1_add.addEventListener('click', clickHandler);
    t2_add.addEventListener('click', clickHandler);
    t3_add.addEventListener('click', clickHandler);
    t4_add.addEventListener('click', clickHandler);

    return null;
}


const clickHandler = (event)=> { //For handling "new block" clicks only!
    
    var buttonClicked = event.target;
    var trackNumber = buttonClicked.attr('track-number');
    console.log('Add a new block to track: ', trackNumber );
    
    document.dispatchEvent(
        new CustomEvent( 'action', { detail: actions.add_new(trackNumber) })
    );

    return null;
}



module.exports = {
    startListening : startListening
}