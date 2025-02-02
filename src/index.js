import {saveData} from "./js-modules/form-send";
const form = document.getElementById('form');
form.addEventListener('submit', saveData);