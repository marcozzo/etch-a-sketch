const gridContainer = document.querySelector('.flex-container');

function changeColor(e){
    let event = e.target;
    let attribute = event.getAttribute('class');

    if(  !(attribute.includes('color-changed') )  ){
        attribute += ' color-changed';
        event.setAttribute('class', attribute)
    }
}

for (let i = 1; i <= 256; i++) {
    const gridSquare = document.createElement('div');
    gridContainer.appendChild(gridSquare)
    gridSquare.setAttribute('class', 'grid-item')
    gridSquare.addEventListener('mouseover', changeColor)
}