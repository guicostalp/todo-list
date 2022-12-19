
let allTasks = [
    {
        "title": 'Terminar Odin Project',
        "description": '',
        "dueDate": '',
        "priority": '',
        "project": 'emprego'
    },  
    {
        "title": 'Enviar Curriculo',
        "description": '',
        "dueDate": '',
        "priority": '',
        "project": 'emprego'
    },
    {
        "title": 'Ligar para IRD',
        "description": 'abc1234',
        "dueDate": '',
        "priority": '',
        "project": 'contas'
    },
    {
        "title": 'Pagar prestacao do carro',
        "description": 'abc1234',
        "dueDate": '',
        "priority": '',
        "project": 'contas'
    },
    {
        "title": 'Procurar proximo destino',
        "description": '',
        "dueDate": '',
        "priority": '',
        "project": 'ferias'
    },
    {
        "title": 'Fazer poupanca',
        "description": 'abc1234',
        "dueDate": '',
        "priority": '',
        "project": 'ferias'
    }
    
]

export {allTasks}

class Task {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }
}

export function createTask(title, description, dueDate, priority, project) {
    let task = new Task (title, description, dueDate, priority, project);
    allTasks.push(task);

}