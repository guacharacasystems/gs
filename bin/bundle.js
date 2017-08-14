/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const newTrack          = __webpack_require__(1);
const configBlock       = __webpack_require__(3);
const transport         = __webpack_require__(4);
const sessions          = __webpack_require__(5);
const reducer           = __webpack_require__(6);
const renderDOM         = __webpack_require__(10);
var store               = __webpack_require__(7);

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const actions = __webpack_require__(2);

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
    var trackNumber = buttonClicked.getAttribute('track-number');
    
    var payload = {
        track : trackNumber,
        block : { sample: ''} //This will be an instance of the Block Class
    }
    
    console.log('Add a new block to track: ', trackNumber );
    
    document.dispatchEvent(
        new CustomEvent( 'action', { detail: actions.add_new(payload) })
    );

    return null;
}



module.exports = {
    startListening : startListening
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

//Actions are described here
const ADD_NEW = 'ADD_NEW';

//ADD NEW TRACK
const add_new = (payload) => {
    return {
        type: ADD_NEW,
        payload: payload
    }
}

module.exports = {
    add_new
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {



/***/ }),
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/***/ (function(module, exports) {



/***/ }),
/* 6 */
/***/ (function(module, exports) {

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

/***/ }),
/* 7 */
/***/ (function(module, exports) {

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

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const renderT1 = __webpack_require__(11)

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

/***/ }),
/* 11 */
/***/ (function(module, exports) {

const renderT1 = (t1) => {
    
    var track1 = document.querySelector('#t1');
    
    while (track1.childNodes.length > '2') {
        
        track1.removeChild(track1.lastChild);
        
    }
    
    t1.blocks.forEach( (b) => {
        //append to DOM node
        var block = document.createElement('div');
        block.setAttribute('class', 'pad');
        track1.appendChild(block);
    })
}

module.exports = renderT1;

/***/ })
/******/ ]);