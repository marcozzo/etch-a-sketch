const gridContainer = document.querySelector('.flex-container');
let gridSquares = document.querySelectorAll('.grid-item');

function changeColor(e){
    let event = e.target;
    let attribute = event.getAttribute('class');

    if(  !(attribute.includes('color-changed') )  ){
        attribute += ' color-changed';
        event.setAttribute('class', attribute)
    }
}

let index = 1;
let numberGiven = 256; 

function buildGrid(number){

    for (index = 1; index <= number; index++) {
        const gridSquare = document.createElement('div');
        gridContainer.appendChild(gridSquare)
        gridSquare.setAttribute('class', 'grid-item')
        gridSquare.addEventListener('mouseover', changeColor)
        gridSquares = document.querySelectorAll('.grid-item')
    }
}

buildGrid(numberGiven)

//TODAY'S TASK: ADD EVENT LISTENER TO BUTTON
//(CHECK ETCH A SKETCH T.O.P PROJECT PAGE STEP 4)

function changeSize(){
    
    let squareSize = prompt('Choose a size for your squares:\nMax 100');

    gridContainer.textContent = "";
}

const gridButton = document.querySelector('.gridbutton');

gridButton.addEventListener('click',changeSize)