// Canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//

// Cell data
const cell = { x:0, y:0};
let cells = [];
let cellSize = 10;
cells.push(cell);
//

function DrawCells(){
    ctx.clearRect(0,0, 400,400);

    cells.forEach(function (targetCell){
        ctx.fillRect(targetCell.x,targetCell.y, cellSize, cellSize);
        targetCell.x += cellSize;
    });
}

function Update(){
    DrawCells();
}

setInterval(Update, 100);