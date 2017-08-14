//Actions are described here
const ADD_NEW = 'ADD_NEW';

//ADD NEW TRACK
const add_new = (data) => {
    return {
        action: ADD_NEW,
        payload: data
    }
}

module.exports = {
    add_new
}