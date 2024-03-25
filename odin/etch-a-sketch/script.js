
const body = document.querySelector('body');

function canvas(N) {
    const container = document.createElement('container');
    container.id = 'container';

    body.appendChild(container);

    for (let i = 0; i < N * N; i++) {
        const grid = document.createElement('div');
        grid.classList.add('miniSquares');
        grid.style.width = `${960 / N - 1}px`;
        grid.style.height = `${960 / N - 1}px`;
        grid.style.border = '0.01px solid gray';
        container.appendChild(grid);

    };

    const miniSquares = document.querySelectorAll('.miniSquares');
    miniSquares.forEach((miniSqr) => {
        miniSqr.addEventListener('mouseover', () => {
            miniSqr.style.backgroundColor = 'darkgray';
        })
    });

}

// default canvas with size 64
let N = 64
canvas(N);

const button = document.querySelector('button');
button.addEventListener('click', () => {

    body.removeChild(container);
    let n;
    n = parseInt(prompt('Max size 100', N));
    while (!Number.isInteger(n) || n <= 0 || n > 100) {
        alert('Please enter a number between 1 and 100');
        n = parseInt(prompt('Max size 100'));
    }
    canvas(n);
})
