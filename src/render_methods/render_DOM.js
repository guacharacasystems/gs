const renderT1 = require('./render_t1')

const renderDOM = (action_type, store) => {
    
    //Render the DOM based on the current store
    
    switch (action_type) {
        case 'ADD_NEW':
            console.log('ADD NEW BLOCK IN: ', store);
            renderT1(store.t1);
            break
        
        default:
            null;
    }

}

module.exports = renderDOM;