var store = {
    t1 : {

    },
    t2 : {
        
    },
    t3 : {
        
    },
    t4 : {
        
    },
    sidebar:{

    }
}

module.exports = store;

document.addEventListener( 'action', (event) => {
    console.log('Got event', event);
    //store = reducer(store, e.detail); //update the store before rendering
    //console.log('STORE: ', store);
    //document.dispatchEvent(new CustomEvent('state', { detail: e.detail }));
}, false );

// subscribe a state change handler
// document.addEventListener('state', function(e){
//     //console.log(e.detail.type);
//     switch (e.detail.type) {
//         case LOAD_VIEWS:
//             console.log('NO RENDERING NEEDED') //COULD REMOVE LOADER ???
//             break
//         case CHANGE_VIEW:
//             renderView(store.currentView);
//             break
//         case RESIZE_TUNEBAR:
//             renderTuneBar(store);
//             break
//         case POSITION_TUNEBAR:
//             renderTuneBar(store);
//             break
//         case SET_LEFT_POSITION:
//             renderTuneBar(store);
//             break
//         default:
//             null;
//     }
// });