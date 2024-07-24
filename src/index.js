import './index.css';
/*import imageUrl from './images/menu.png';
import homeUrl from './images/home.png';
import toDoUrl from './images/checklist.png';
import foldersUrl from './images/folder.png';*/

import modal from './modal.js';
import templateDom from './template.js';

const firstLoad = () => {
    templateDom();
}

window.onload = firstLoad;

const menu = document.querySelector(".menu");
menu.addEventListener('click', () => {
    console.log("create");
    createModal();
});

const createModal = () => {
    const mobileModalContainer = modal();
    const body = document.body;
    body.appendChild(mobileModalContainer);
}



