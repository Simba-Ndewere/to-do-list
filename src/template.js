import './index.css';
import imageUrl from './images/menu.png';
import homeUrl from './images/home.png';
import toDoUrl from './images/checklist.png';
import foldersUrl from './images/folder.png';

const templateDom = () => {
    const menu = document.querySelector(".menu");
    const myIcon = new Image();
    myIcon.height = 30;
    myIcon.width = 30;
    myIcon.src = imageUrl;
    menu.appendChild(myIcon);

    const home = document.querySelector(".homeIcon");
    const homeIcon = new Image();
    homeIcon.height = 30;
    homeIcon.width = 30;
    homeIcon.src = homeUrl;
    home.appendChild(homeIcon);

    const toDo = document.querySelector(".to-do-Icon");
    const toDoIcon = new Image();
    toDoIcon.height = 32;
    toDoIcon.width = 32;
    toDoIcon.src = toDoUrl;
    toDo.appendChild(toDoIcon);

    const folders = document.querySelector(".foldersIcon");
    const folderIcon = new Image();
    folderIcon.height = 30;
    folderIcon.width = 30;
    folderIcon.src = foldersUrl;
    folders.appendChild(folderIcon);
}

export default templateDom;