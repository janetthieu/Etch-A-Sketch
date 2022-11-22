const board = document.querySelector('#board');
const resetBtn = document.querySelector('#reset');
const dimensions = document.querySelector('#dimensions');
const slider = document.querySelector('#slider');
const originalColorBtn = document.querySelector('#original-color');
const randomColorBtn = document.querySelector('#random-color');
let rows = parseInt(slider.value);
let cols = parseInt(slider.value);

createBoard(rows, cols);

dimensions.textContent = `${slider.value}x${slider.value}`;

slider.oninput = function() {
    removeBoard(board);
    dimensions.textContent = `${this.value}x${this.value}`;
    rows = parseInt(this.value);
    cols = parseInt(this.value);
    createBoard(rows, cols);
}

document.addEventListener('pointerdown', ({ target }) => {
    let cells = document.querySelectorAll('#board > div');
    if (target.nodeName == 'BUTTON') {
        switch(target) {
            case originalColorBtn:
                for (let cell of cells) {
                    cell.addEventListener('pointerover', () => {
                        cell.style.background = `rgb(103, 174, 177)`;
                    })
                }
                break;
            case randomColorBtn:
                for (let cell of cells) {
                    cell.addEventListener('pointerover', () => {
                        cell.style.background = randomColor();
                    })
                }
                break;
            case resetBtn:
                for (let cell of cells) {
                    cell.style.background = `rgb(241, 241, 241)`;
                    cell.addEventListener('pointerover', () => {
                        cell.style.background = `rgb(103, 174, 177)`;
                    })
                }
                break;
            default:
                for (let cell of cells) {
                    cell.style.background = `rgb(241, 241, 241)`;
                }
        }
    }
})

function addCell() {
    const cell = document.createElement('div');
    let cells = document.querySelectorAll('#board > div');
    board.appendChild(cell).className = 'cell';
    for (let cell of cells) {
        cell.addEventListener('pointerover', () => {
            cell.style.background = `rgb(103, 174, 177)`;
        })
    }
}

function createBoard(rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        addCell();
        board.style.setProperty('--grid-rows', rows);
        board.style.setProperty('--grid-cols', cols);
    }
}

function randomColor() {
    return ('#' + (Math.floor(Math.random()*16777215).toString(16)));
}

function removeBoard(board) {
    while (board.lastChild) {
        board.removeChild(board.lastChild);
    }
}