import {createTask} from "./create-task";
import {createDiv} from "./create-div";



export function getInput(){
    const addBtn = document.getElementById('input-button')


    addBtn.addEventListener('click', () => {
        const formTitle = document.querySelector('#title').value
        const formDesc = document.querySelector('#description').value
        const formDueDate = document.querySelector('#dueDate').value
        const formPrio = document.querySelector('#priority').value
        const formProject = document.querySelector('#project').value

        createTask(formTitle, formDesc,formDueDate,formPrio,formProject);
        createDiv(formTitle);

    })  

}