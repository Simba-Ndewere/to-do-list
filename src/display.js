import homeDisplay from './homeDisplay.js';

const home = document.querySelector(".home");
const displayCont = document.querySelector(".displayContainer");

home.addEventListener('click', () => {
    const addTaskButtonDiv = homeDisplay();

    if (displayCont.children[0]) {
        displayCont.removeChild(children[0]);
    }
    displayCont.appendChild(addTaskButtonDiv);
});