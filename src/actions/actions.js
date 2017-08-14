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