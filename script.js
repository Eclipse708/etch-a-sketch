const container = document.querySelector(".container");
let rowsArray  = [];
const rows = document.createElement("div");
rows.className ='gridRow';
const cells = document.createElement("div");
cells.className ='cells';
colNum = 16;
rowNum = 16;
let cellWidth = innerWidth/colNum;
let cellHeight = innerHeight/rowNum;
console.log('inner width' + innerWidth);
console.log('inner height' + innerHeight);
function makeRows(rowNum) {
    // let gridHeight = 400/rowNum;
    console.log('inner height' + innerHeight);
    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        row.className = 'gridRow';
        row.style.height = cellHeight+'px';
        console.log("height " + row.style.height);
        container.appendChild(row);
        rowsArray.push(row);
    }
    return rowsArray;
}
function makeColumns(colNum) {
    console.log('inner width' + innerWidth);
    // let gridWidth = 400/colNum;
    for (let i = 0; i < rowsArray.length; i++) {
        let row = rowsArray[i];
        for (let j = 0; j < colNum; j++) {
            let column = document.createElement('div');
            column.className = 'cells';
            column.style.width = cellWidth+'px';
            console.log( "width " + column.style.width);
            row.appendChild(column);
        }
    }
}

function defaultGrid() {
    makeRows(rowNum);
    makeColumns(colNum);
}

document.addEventListener("DOMContentLoaded", defaultGrid);