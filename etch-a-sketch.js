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
        gridSquares = document.querySelectorAll('.grid-item')
    }

//TODAY'S TASK: ADD EVENT LISTENER TO BUTTON
//(CHECK ETCH A SKETCH T.O.P PROJECT PAGE STEP 4)

function changeSize(){
    
    let squareSize = prompt('Choose a size for your squares:\nMax 100');

    gridContainer.textContent = "";
}

const gridButton = document.querySelector('.gridbutton');

gridButton.addEventListener('click',changeSize)