import {createObject} from "./classes";
import {createTaskList} from "./dom-manip"



export function getInput(){
    const addBtn = document.getElementById('input-button')
    addBtn.addEventListener('click', () => {
        const formTitle = document.querySelector('#title').value
        const formDesc = document.querySelector('#description').value
        const formDueDate = document.querySelector('#dueDate').value
        const formPrio = document.querySelector('#priority').value
        const formProject = document.querySelector('#project').value.toLowerCase()


        createTaskList(formProject, formTitle)



        createObject(formTitle, formDesc,formDueDate,formPrio,formProject);


    })  

}