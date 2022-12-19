
let allTasks = [
    {
        "title": 'xyz',
        "description": 'abc1234',
        "dueDate": '',
        "priority": '',
        "project": 'yasdfn'
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