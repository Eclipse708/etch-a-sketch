const container = document.querySelector(".container");
const gridGeneratorBtn = document.createElement('button');
const resetBtn = document.createElement('button');
gridGeneratorBtn.innerText = 'Grid Generator';
resetBtn.innerText = 'Reset';
gridGeneratorBtn.classList.add('gridGenBtn');
resetBtn.classList.add('resetBtn');
let grid = document.createElement('div');
grid.classList.add('grid');
let gridSize = 790;
let colNum = 16;
container.appendChild(gridGeneratorBtn);
container.appendChild(resetBtn);

function generateGrid() {
    let gridWidth = gridSize/colNum;
    container.appendChild(grid);
    for (let i = 0; i < colNum; i++) {
    const rows = document.createElement("div");
    rows.classList.add('gridRow');
    for (let j = 0; j < colNum; j++) {
        const cells = document.createElement("div");
        cells.classList.add('cells');
        cells.style.width = gridWidth + 'px';
        cells.style.height = gridWidth + 'px';
        rows.appendChild(cells);
    
        cells.addEventListener('mouseover', (e) => {
            let randColor =    
            Math.floor(Math.random()*16777215).toString(16);
            color = '#' + randColor;
            e.target.style.backgroundColor = color;
            e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;      
        });
    }
    grid.appendChild(rows);
}
}

gridGeneratorBtn.addEventListener('click', () => {
    colNum = prompt('Enter a number between 1-100');
    if (colNum > 100) {
        alert('Enter a number less than 100')
    }
    else if (isNaN(colNum)) {
        alert('Enter a number');
    }
    else {
        document.querySelectorAll('.gridRow')
        .forEach((element) => 
            element.parentNode.removeChild(element));
        generateGrid();
    }
})

resetBtn.addEventListener('click', () => {
    document.querySelectorAll('.gridRow')
        .forEach((element) => 
            element.parentNode.removeChild(element));
    colNum = 16;
    generateGrid();
});

document.addEventListener("DOMContentLoaded", generateGrid);