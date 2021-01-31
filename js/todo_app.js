let headerTextInput = document.querySelector('header input');
let headerSelector = document.querySelector('#todoSelector');
let headerBtn = document.querySelector('header button');
let saveArray = []

headerBtn.addEventListener('click', saveTodo);

function saveTodo(event) {
    let todo = [
        {
            idTarea: listaTareas.length,
            titulo: headerTextInput.value,
            prioridad: headerSelector.value,
        }]

    listaTareas.push(todo[0]);
}