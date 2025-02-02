// import { saveData } from "./js-modules/form-send";
// const form = document.getElementById('form');
// form.addEventListener('submit', saveData(event))

import {saveData} from "./js-modules/form-send";
const form = document.getElementById('form');
// const name = document.getElementById('nameInp');
// const email = document.getElementById('emailInp');
// const comment = document.getElementById('commentInp');
form.addEventListener('submit', saveData);