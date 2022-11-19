const board = document.querySelector('#board');
const reset = document.querySelector('#reset');
const dimensions = document.querySelector('#dimensions');
const slider = document.querySelector('#slider');
let rows = parseInt(slider.value);
let cols = parseInt(slider.value);

function addCell() {
    cell = document.createElement('div');
    board.appendChild(cell).className = 'cell';
    etchASketch(cell);
    resetBoard(cell);
}

function createBoard(rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        addCell();
        board.style.setProperty('--grid-rows', rows);
        board.style.setProperty('--grid-cols', cols);
    }
}

function etchASketch(cell) {
    cell.addEventListener('pointerover', () => {
        cell.classList.add('etchedCell');
    })
}

function resetBoard(cell) {
    reset.addEventListener('click', () => {
        cell.classList.remove('etchedCell');
    })
}

function removeBoard(board) {
    while (board.lastChild) {
        board.removeChild(board.lastChild);
    }
}

createBoard(rows, cols);
dimensions.textContent = `${slider.value}x${slider.value}`;

slider.oninput = function() {
    removeBoard(board);
    dimensions.textContent = `${this.value}x${this.value}`;
    rows = parseInt(this.value);
    cols = parseInt(this.value);
    createBoard(rows, cols);
}