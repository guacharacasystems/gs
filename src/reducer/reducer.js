const reducer = ( store, action ) => {
    
    switch (action.type) {
        case 'ADD_NEW':
            
            const newStore = store;
            newStore.t1.blocks.push(action.payload.block); //make this immutable
            return newStore;
    
        default:
            break;
    }

}

module.exports = reducer;