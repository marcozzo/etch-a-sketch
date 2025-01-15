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
        gridSquares = document.querySelectorAll('.grid-item');
    }
}

buildGrid(numberGiven)

//TODAY'S TASK: ADD EVENT LISTENER TO BUTTON
//(CHECK ETCH A SKETCH T.O.P PROJECT PAGE STEP 4)

function changeSize(){
    let squareSize = 101;
    
    do{
        squareSize = prompt('Choose number of squares (witdth) of your grid:'
        + '\n(Max 100)\n');
    }
    while(squareSize > 100 || squareSize === "") //also filter for integer?
    if(squareSize === null) return

    //REBUILD GRID
    gridContainer.textContent = "";
    buildGrid(squareSize**2)

    let sqWidth = 960/squareSize;

    gridSquares.forEach( (square) => {
        square.setAttribute('style',
            `width:${sqWidth}px; height:${sqWidth}px;`
        )
    })
}

const gridButton = document.querySelector('.gridbutton');

gridButton.addEventListener('click',changeSize)