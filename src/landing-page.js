import { allTasks } from "./create-task";

for (let i=0; i < allTasks.length; i++) {

    console.log(allTasks)

}

function createPage () {
    //Remove content from 'container' div
    document.querySelector('.container').textContent = ''


    const div = document.createElement("div"); //create tag
    div.setAttribute("id", "landing-page"); //set ID
    div.setAttribute("class", "landing-page"); //set CLASS

    //Create DIV Content
    let createText = '';
    createText += '<div class="header"><button id="create-task">Create Task</button></div>'
    createText += '<div class="side-bar"></div>'
    createText += '<div id="board" class="board">'
    createText += '<form id="main-form">' //style="display: none;">
    createText += '<div class="form-input">Title<input id="title" type="text" placeholder="Title"></div>'
    createText += '<div class="form-input">Description<input id="description" type="text" placeholder="Description"></div>'
    createText += '<div class="form-input">Due Date<input id="dueDate" type="date" placeholder="dueDate"></div>'
    createText += '<div class="form-input">Priority<input id="priority" type="text" placeholder="Priority"></div>'
    createText += '<div class="form-input">Project<input id="project" type="text" placeholder="Project"></div>'
    createText += '<button id="input-button" type="button" form="main-form">Add Task</button></form></div>'
    //Insert content inside DIV
    div.innerHTML = createText;

    //appendChild to div ID books
    document.querySelector('.container').appendChild(div);
    
} 

export { createPage };