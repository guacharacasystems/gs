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