import './index.css';
import modal from './modal.js';
import templateDom from './template.js';

const firstLoad = () => {
    templateDom();
}

window.onload = firstLoad;

const menu = document.querySelector(".menu");
menu.addEventListener('click', () => {
    createModal();
});

const createModal = () => {
    const mobileModalContainer = modal();
    const body = document.body;
    body.appendChild(mobileModalContainer);
}



