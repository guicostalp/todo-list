import {allTasks, allProjects} from "./classes"

export function loadProjects () {

    for (let i=0; i < allProjects.length; i++) {  

        const projectId = allProjects[i].id
        const projectName = allProjects[i].project
        const nameTransform = projectName[0].toUpperCase() + projectName.substring(1)

        //Create Div for each Project
        createProjectDiv(projectName)

            //Create task ul list for each project
            for (let i=0; i < allTasks.length; i++) {
                const taskId = allTasks[i].id
                if (taskId === projectId) {
                    const title = allTasks[i].title
                    createTaskList(projectName, title)    
                }
            }


        //Includes on Form options Menus
        createProjectOptions(projectName)
    }
} 

export function createProjectDiv(project) {

    const newProject = project[0].toUpperCase() + project.substring(1)
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    div.setAttribute("class", "project")
    div.setAttribute("id", project)
    ul.setAttribute("id", `tasks-${project}`);
    document.getElementById("board").appendChild(div)
    const projectDiv = document.getElementById(`${project}`)
    console.log (projectDiv)

    let divContent = ''
        divContent += '<p>Project: '+newProject+'</p>'        
        projectDiv.innerHTML += divContent
    
    document.getElementById(`${project}`).appendChild(ul)

}

export function createTaskList (project,title) {

    const li = document.createElement("li")
    const ul = document.getElementById(`tasks-${project}`)
    let listContent = ''
        listContent += title
    li.innerHTML += listContent
    ul.appendChild(li)


}


//Create Project option on form select Menu
export function createProjectOptions (project) {

    const projectName = project[0].toUpperCase() + project.substring(1)
    const formOption = document.createElement("option")
    const formSelect = document.getElementById('project')
    let createText = '';
        createText += '<option value='+project+'>'+projectName+'</option>'

        formOption.innerHTML += createText
    
        formSelect.appendChild(formOption);
}

        //Buttons

export function addProject () {

    const btn = document.getElementById('newProject')

    btn.addEventListener('click', () => {

        const newProject = prompt("Please insert new Project name:")

        createProjectOptions(newProject)
        createProjectDiv(newProject)

        console.log("im alive")

    })

}

export function addTask (project, title) {

    const a = document.getElementById(project)
    let createText = ''
        createText += '<ls>'+title+'</ls>'

        a.innerHTML += createText


        //Reset form after click on "Add Task"
        document.getElementById("main-form").reset()
}

