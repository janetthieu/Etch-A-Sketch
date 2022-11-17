const sketch = document.querySelector('#sketch');
const reset = document.querySelector('#reset');
const controlBtn = document.querySelectorAll('.control-btn');
const rows = 5;
const cols = 17;

function addCell() {
    cell = document.createElement('div');
    sketch.appendChild(cell).className = 'cell';
    etchASketch(cell);
    resetBoard(cell);
}

function createBoard(rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        addCell();
        sketch.style.setProperty('--grid-rows', rows);
        sketch.style.setProperty('--grid-cols', cols);
    }
}

function etchASketch(c) {
    c.addEventListener('pointerover', () => {
        c.classList.add('etchedCell');
    })
}

function resetBoard(c) {
    reset.addEventListener('click', () => {
        c.classList.remove('etchedCell');
    })
}

createBoard(rows, cols);