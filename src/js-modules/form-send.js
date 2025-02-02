export const saveData = (event) => {
    event.preventDefault();

    dataBase.name = name.value;
    dataBase.email = email.value;
    dataBase.comment = comment.value;
    form.reset();
    console.log(dataBase.name, dataBase.email, dataBase.comment);
}
const name = document.getElementById('nameInp');
const email = document.getElementById('emailInp');
const comment = document.getElementById('commentInp');
const dataBase = {
    name: '',
    email: '',
    comment: '',
}