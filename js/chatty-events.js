// chatty events 
// use case for throttling & dobouncing from lodash

/* mousemove */

const coordsOutputRef = document.querySelector('.js-coords');

let mouseMoveCallBackCounter = 0;

const throttledCallBack = _.throttle(event => {
    mouseMoveCallBackCounter += 1;

    coordsOutputRef.textContent = `
    Количество вызов callback-функции 💩: ${mouseMoveCallBackCounter},
    X: ${event.clientX},
    Y: ${event.clientY}
    `;
}, 200)

window.addEventListener('mousemove', throttledCallBack)

/* input */ 

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');

let inputCallBackCounter = 0;

const debouncedCallBack = _.debounce(event => {
    inputCallBackCounter += 1;

    outputRef.textContent = `
    Количество вызовов callback-функции 💩 : ${inputCallBackCounter},
    Значение : ${event.target.value}
    `;
}, 500)

inputRef.addEventListener('input', debouncedCallBack)
