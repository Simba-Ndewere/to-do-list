import './index.css';
import modal from './modal.js';
import templateDom from './template.js';
import ToDo from './ToDo.js';

const todo1 = new ToDo("AI","redo AI",'21/10/24','high');

const firstLoad = () => {
    templateDom();
}

window.onload = firstLoad;



