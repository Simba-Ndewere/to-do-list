
const createAddTaskButton = () => {
    const addTaskDiv = document.createElement("div");
    addTaskDiv.classList.add("addTaskDiv");

    const button = document.createElement("div");
    button.classList.add("button");
    const buttonText = document.createElement("span");

    buttonText.classList.add("buttonText");
    buttonText.textContent = "Add To Do";
    button.appendChild(buttonText);
    addTaskDiv.appendChild(button);

    return addTaskDiv;
}

export default createAddTaskButton;

//add to display container