import './index.css';
import imageUrl from './images/menu.png';
import homeUrl from './images/home.png';
import toDoUrl from './images/checklist.png';
import foldersUrl from './images/folder.png';

import homeUrlM from './images/homeM.png';
import toDoUrlM from './images/checklistM.png';
import foldersUrlM from './images/folderM.png';

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
toDoIcon.height = 30;
toDoIcon.width = 30;
toDoIcon.src = toDoUrl;
toDo.appendChild(toDoIcon);

const folders = document.querySelector(".foldersIcon");
const folderIcon = new Image();
folderIcon.height = 30;
folderIcon.width = 30;
folderIcon.src = foldersUrl;
folders.appendChild(folderIcon);

const homeM = document.querySelector(".mobIcon");
const homeIconM = new Image();
homeIconM.height = 20;
homeIconM.width = 20;
homeIconM.src = homeUrl;
homeM.appendChild(homeIconM);

const toDoM = document.querySelector(".mob-to-do-Icon");
const toDoIconM = new Image();
toDoIconM.height = 20;
toDoIconM.width = 20;
toDoIconM.src = toDoUrl;
toDoM.appendChild(toDoIconM);

const foldersM = document.querySelector(".mob-foldersIcon");
const folderIconM = new Image();
folderIconM.height = 20;
folderIconM.width = 20;
folderIconM.src = foldersUrl;
foldersM.appendChild(folderIconM);

menu.addEventListener('click', () => {
    
});
