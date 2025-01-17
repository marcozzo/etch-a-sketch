const gridContainer = document.querySelector('.flex-container');
let gridSquares = document.querySelectorAll('.grid-item');

function getRandomHex(){
    return (Math.random() * 255)
}

function changeColor(e){
    let event = e.target;

    let red = getRandomHex().toFixed();
    let green = getRandomHex().toFixed();
    let blue = getRandomHex().toFixed();

    event.style.backgroundColor = `rgb(${red},${blue},${green})`
}

let index = 1;
let numberGiven = 256; 

function buildGrid(number){

    for (index = 1; index <= number; index++) {
        const gridSquare = document.createElement('div');
        gridContainer.appendChild(gridSquare)
        gridSquare.setAttribute('class', 'grid-item')
        gridSquare.addEventListener('mouseover', changeColor)
    }
    gridSquares = document.querySelectorAll('.grid-item');
}

buildGrid(numberGiven)

//TASK: make grid tiles display random colors as the cursor hovers

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