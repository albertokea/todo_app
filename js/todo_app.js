let addTextInput = document.querySelector('#todoAdd input');
let addSelector = document.querySelector('#todoAdd select');
let addBtn = document.querySelector('#todoAdd button');
let saveArray = []

let searchInput = document.querySelector('#todoSearch input');
let searchBtn = document.querySelector('#todoSearch button');

addBtn.addEventListener('click', saveTodo);

function saveTodo() {
    if (addTextInput.value != '') {
        let todo = [
            {
                idTarea: listaTareas.length,
                titulo: addTextInput.value,
                prioridad: addSelector.value,
            }]

        listaTareas.push(todo[0]);
    } else {
        alert('Introduzca algún valor en el campo "Introduzca tarea"')
    }
}

function printTodo() {

}