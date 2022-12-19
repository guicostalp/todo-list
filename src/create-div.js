import {allTasks} from "./create-task";

function createDiv(title){
    const div = document.createElement("div")
    div.setAttribute("id", 'task'); //set ID
    div.setAttribute("class", "task"); //set CLASS

    //Create DIV Content
   let createText = '';
   createText += '<p>Title: '+title+'</p>';
   createText += '<p>Description: '+title+'</p>';
   createText += '<p>Due Date: '+title+'</p>';
   createText += '<p>Priority: '+title+'</p>';
   createText += '<p>Project: '+title+'</p>';

   div.innerHTML = createText;

   document.getElementById("board").appendChild(div);






    console.log(allTasks)

}


export {createDiv}