const t1_add = document.querySelector('#t1_add');
const t2_add = document.querySelector('#t2_add');
const t3_add = document.querySelector('#t3_add');
const t4_add = document.querySelector('#t4_add');

const clickHandler = (event)=> {
    console.log(event);
    return null;
}

const startListening = () => {
    
    t1_add.addEventListener('click', clickHandler);
    t2_add.addEventListener('click', clickHandler);
    t3_add.addEventListener('click', clickHandler);
    t4_add.addEventListener('click', clickHandler);

    return null;
}


module.exports = {
    startListening : startListening
}