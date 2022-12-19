import {createPage} from "./landing-page"
import { getInput } from "./get-input";



createPage();
getInput();

const btn = document.getElementById('create-task');


btn.addEventListener('click', () => {
    const form = document.getElementById('main-form');

    //checks if form is visible or not
    if (form.style.display === 'none') {
        // 👇️ this SHOWS the form
        form.style.display = 'block';
      } else {
        // 👇️ this HIDES the form
        form.style.display = 'none';
      }
})



