import homeUrlM from './images/homeM.png';
import toDoUrlM from './images/checklistM.png';
import foldersUrlM from './images/folderM.png';
import cross from './images/cross.png';

const menu = document.querySelector(".menu");
menu.addEventListener('click', () => {
    const mobileModalContainer = modal();
    const body = document.body;
    body.appendChild(mobileModalContainer);
});

const modal = () => {
    const body = document.body;
    const close = document.createElement("div");
    close.classList.add("close");

    const crossIcon = new Image();
    crossIcon.height = 30;
    crossIcon.width = 30;
    crossIcon.src = cross;
    close.appendChild(crossIcon);

    const mobileModalContainer = document.createElement("div");
    mobileModalContainer.classList.add("mobileModalContainer");

    const mobileModal = document.createElement("div");
    mobileModal.classList.add("mobileModal");

    mobileModal.appendChild(modalHome());
    mobileModal.appendChild(modalToDo());
    mobileModal.appendChild(modalProject());

    mobileModalContainer.appendChild(close);
    mobileModalContainer.appendChild(mobileModal);

    close.addEventListener('click', () => {
        body.removeChild(mobileModalContainer);    
    });

    return mobileModalContainer;
}

const modalHome = () => {

    const mobileModal = document.createElement("div");
    mobileModal.classList.add("mobileModal");

    const mobHome = document.createElement("div");
    mobHome.classList.add("mobHome");

    const mobIcon = document.createElement("div");
    mobIcon.classList.add("mobIcon");

    const homeIconM = new Image();
    homeIconM.height = 20;
    homeIconM.width = 20;
    homeIconM.src = homeUrlM;
    mobIcon.appendChild(homeIconM);

    const mobName = document.createElement("div");
    mobName.classList.add("mobName");
    mobName.textContent = "Home";

    mobHome.appendChild(mobIcon);
    mobHome.appendChild(mobName);

    return mobHome;
}

const modalToDo = () => {
    const mobToDo = document.createElement("div");
    mobToDo.classList.add("mob-to-do");

    const mobIconToDo = document.createElement("div");
    mobIconToDo.classList.add("mob-to-do-Icon");

    const toDoIconM = new Image();
    toDoIconM.height = 20;
    toDoIconM.width = 20;
    toDoIconM.src = toDoUrlM;
    mobIconToDo.appendChild(toDoIconM);

    const mobToDoName = document.createElement("div");
    mobToDoName.classList.add("mob-to-do-name");
    mobToDoName.textContent = "To Do's";

    mobToDo.appendChild(mobIconToDo);
    mobToDo.appendChild(mobToDoName);

    return mobToDo;
}

const modalProject = () => {
    const mobFolders = document.createElement("div");
    mobFolders.classList.add("mob-folders");

    const mobFoldersIcon = document.createElement("div");
    mobFoldersIcon.classList.add("mob-foldersIcon");
 
    const mobFoldersIconM = new Image();
    mobFoldersIconM.height = 20;
    mobFoldersIconM.width = 20;
    mobFoldersIconM.src = foldersUrlM;
    mobFoldersIcon.appendChild(mobFoldersIconM);

    const mobFoldersName = document.createElement("div");
    mobFoldersName.classList.add("mob-folders-name");
    mobFoldersName.textContent = "Folders";

    mobFolders.appendChild(mobFoldersIcon);   
    mobFolders.appendChild(mobFoldersName);

    return mobFolders;
}
