import {saveData} from "./js-modules/form-send.js";
const form = document.getElementById('form');
form.addEventListener('submit', saveData);  

// document.addEventListener('DOMContentLoaded', () => {
//     const source = document.getElementById('menuBlock').innerHTML.trim();
//     const template = Handlebars.compile(source);

//     const date = {
//         title: 'Menu',
//         items: ['Home', 'About', 'Projects', 'Contacts'],
//     };

//     document.body.innerHTML += template(date);
// })

// import {countries} from "./js-modules/countries.js";

// document.addEventListener('DOMContentLoaded', () => {
//     const templateSource = document.getElementById('countryTemplate').innerHTML.trim();
//     const template = Handlebars.compile(templateSource);

//     const countriesContainer = document.getElementById('countriesContainer');
//     countriesContainer.innerHTML = '';

//     countries.forEach(country => {
//         const html = template(country);
//         countriesContainer.innerHTML += html;
//     })
// })