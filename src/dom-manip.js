import {allTasks, allProjects} from "./create-task"

export function createProjectDiv () {

    for (let i=0; i < allProjects.length; i++) {
        const projectId = allProjects[i].id
        const projectName = allProjects[i].project
        const nameTransform = projectName[0].toUpperCase() + projectName.substring(1)
 
        const div = document.createElement("div"); //create tag
        div.setAttribute("class", `project`); //set CLASS    
        div.setAttribute("id", projectName); //set CLASS 
       //Create DIV Content
        let createText = '';
        createText += '<p>Project: '+nameTransform+'</p>';
            //Create task list for each project
            for (let i=0; i < allTasks.length; i++) {
                const taskId = allTasks[i].id
                if (taskId === projectId) {
                    createText += '<ul><ls>'+allTasks[i].title+'</ls></ul>'     
                }
            }

        //Insert content inside DIV
        div.innerHTML = createText;

        //appendChild to div ID books
        document.getElementById("board").appendChild(div);  

        //Includes on Form options Menus

        createProjectOptions(projectName)
    }
} 

export function createProjectOptions (project) {

    const projectName = project[0].toUpperCase() + project.substring(1)
    const formOption = document.createElement("option")
    const formSelect = document.getElementById('project')
    let createText = '';
        createText += '<option value='+project+'>'+projectName+'</option>'

        formOption.innerHTML += createText
    
        formSelect.appendChild(formOption);
}

export function addTask (project, title) {

    const a = document.getElementById(project)
    let createText = ''
        createText += '<ls>'+title+'</ls>'

        a.innerHTML += createText

    




    console.log(a)

    console.log(project)
    console.log(title)

    

}

