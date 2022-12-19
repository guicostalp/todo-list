import {allTasks} from "./create-task";

function createDiv(title){
    const div = document.createElement("div")
    div.setAttribute("id", 'task'); //set ID
    div.setAttribute("class", "task"); //set CLASS

    //Create DIV Content
   let createText = '';
   createText += '<p>Title: '+title+'</p>';

   div.innerHTML = createText;

   document.getElementById("board").appendChild(div);






    console.log(allTasks)

}



//for (i=0; i < allTasks.length; i++) {
//
//    createDiv(allTasks[i].title,allTasks[i].description,
//        allTasks[i].dueDate, allTasks[i].priority, allTasks[i].project)
//
//}

//function createDiv(title) {
//
//    const div = document.createElement("div"); //create tag
//    div.setAttribute("id", 'task'); //set ID
//    div.setAttribute("class", "task"); //set CLASS
//
//    //Create DIV Content
//    let createText = '';
//    createText += '<p>Title: '+title+'</p>';
//
//
//    createText += '<button id="deleteButton">Delete</button>'
//
//    //Insert content inside DIV
//    div.innerHTML = createText;
//
//    const abc = document.querySelector('board')
//    console.log(abc)
//
//}


export {createDiv}