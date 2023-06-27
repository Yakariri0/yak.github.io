const mainTitle = document.querySelector('#title');
let curValue = 0;
const btnDecrease = document.querySelector('#Decrease');
const btnReset = document.querySelector('#Reset');
const btnIncrease = document.querySelector('#Increase');


btnIncrease.addEventListener('click', () => {
curValue++;
mainTitle.textContent = curValue;
});

btnDecrease.addEventListener('click', () => {
    curValue--;
    mainTitle.textContent = curValue;
});
btnReset.addEventListener('click', () => {
    curValue = 0;
    mainTitle.textContent = curValue;
});

