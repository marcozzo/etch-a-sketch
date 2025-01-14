const gridSquare = document.createElement('div')
const gridContainer = document.querySelector('.flex-container')

for (i = 1; i < 256; i++) {
    gridContainer.appendChild(gridSquare);
}