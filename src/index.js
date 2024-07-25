import './index.css';
import modal from './modal.js';
import templateDom from './template.js';
import ToDo from './ToDo.js';
import display from './display.js';

const firstLoad = () => {
    templateDom();
}

window.onload = firstLoad;



