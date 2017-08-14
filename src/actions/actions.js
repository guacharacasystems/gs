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