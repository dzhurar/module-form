import {saveData} from "./js-modules/form-send.js";
const form = document.getElementById('form');
form.addEventListener('submit', saveData);