var store = {
    
    t1 : {
        blocks : []
    },
    t2 : {
        blocks : []
    },
    t3 : {
        blocks : []
    },
    t4 : {
        blocks : []
    }
}

module.exports = store;

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