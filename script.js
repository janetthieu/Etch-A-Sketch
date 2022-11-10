const sketch = document.querySelector('#sketch');
const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    sketch.textContent = 'Reset successful';
})

function createSketch(rows, cols) {
    sketch.style.setProperty('--grid-rows', rows);
    sketch.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        const cell = document.createElement('div');
        sketch.appendChild(cell).className = 'cell';
    }
}

createSketch(12, 12);

