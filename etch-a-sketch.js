const gridContainer = document.querySelector('.flex-container');

for (let i = 1; i <= 256; i++) {
    const gridSquare = document.createElement('div');
    gridContainer.appendChild(gridSquare)
    gridSquare.setAttribute('class', 'grid-item')
}