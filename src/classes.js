let allTasks = [
    {
        "title": 'Terminar Odin Project',
        "description": '',
        "dueDate": '',
        "priority": '',
        "project": 'emprego',
        "id": 1
    },  
    {
        "title": 'Enviar Curriculo',
        "description": '',
        "dueDate": '',
        "priority": '',
        "project": 'emprego',
        "id": 1
    },
    {
        "title": 'Ligar para IRD',
        "description": 'abc1234',
        "dueDate": '',
        "priority": '',
        "project": 'contas',
        "id": 2
    },
    {
        "title": 'Pagar prestacao do carro',
        "description": 'abc1234',
        "dueDate": '',
        "priority": '',
        "project": 'contas',
        "id": 2
    },
    {
        "title": 'Procurar proximo destino',
        "description": '',
        "dueDate": '',
        "priority": '',
        "project": 'ferias',
        "id": 3
    },
    {
        "title": 'Fazer poupanca',
        "description": 'abc1234',
        "dueDate": '',
        "priority": '',
        "project": 'ferias',
        "id": 3
    }
    
]

let allProjects = [
    {
        "project": 'emprego',
        "id": 1
    },  
   
    {
        "project": 'contas',
        "id": 2
    },
    {
        "project": 'ferias',
        "id": 3
    },

]

export {allTasks, allProjects}

class Project {

    constructor(project){
        const setId = Math.floor(Math.random()*10000);
        this.id = setId
        this.project = project.toLowerCase();

    }

}

class Task {
    constructor(title, description, dueDate, priority, project) {
        const setId = Math.floor(Math.random()*10000);
        this.id = setId
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project.toLowerCase();
    }
}

export function createObject(title, description, dueDate, priority, project) {
    let newProject = new Project(project);
    allProjects.push(newProject)
    console.log("This is allProjects array from classes.js after one object is created:")
    console.log(allProjects)
    
    let task = new Task (title, description, dueDate, priority, project);
    allTasks.push(task);
    console.log("This is allTasks array from classes.js after one object is created:")
    console.log(allTasks)

}