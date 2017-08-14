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

var newTrack = __webpack_require__(1);
var configBlock = __webpack_require__(3);
var transport = __webpack_require__(4);
var sessions = __webpack_require__(5);

const init = () => {  //initializes the entire application...

    console.log('JS Started!');
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
    console.log('Got event', event.detail);
    //store = reducer(store, e.detail); //update the store before rendering
    //console.log('STORE: ', store);
    //document.dispatchEvent(new CustomEvent('state', { detail: e.detail }));
}, false );

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
    console.log('Add a new block to track: ', trackNumber );
    
    document.dispatchEvent(
        new CustomEvent( 'action', { detail: actions.add_new(trackNumber) })
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
const add_new = (trackNumber) => {
    return {
        action: ADD_NEW,
        payload: trackNumber
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



/***/ })
/******/ ]);