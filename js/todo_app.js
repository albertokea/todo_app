let addTextInput = document.querySelector('#todoAdd input');
let addSelector = document.querySelector('#todoAdd select');
let addBtn = document.querySelector('#todoAdd button');
let saveArray = []

let searchSelector = document.querySelector('#todoSearch select')
let searchInput = document.querySelector('#todoSearch input');

let todoPrint = document.querySelector('#todoPrint')

printTodo(listaTareas)

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
    printTodo(listaTareas)
}

function printTodo(todoList) {
    todoPrint.innerHTML = ""
    todoList.forEach(todo => {
        let article = document.createElement('article');
        let p = document.createElement('p');
        let btn = document.createElement('button');
        p.innerHTML = todo.titulo;
        btn.innerText = 'Eliminar';
        article.appendChild(p);
        article.appendChild(btn);
        article.style.backgroundColor = todoColor(todo.prioridad);
        todoPrint.appendChild(article);
    });
}

function todoColor(priority) {
    switch (priority) {
        case 'urgente':
            return color = 'tomato';
        case 'diaria':
            return color = 'lightblue';
        case 'mensual':
            return color = 'greenyellow';
    }
}

searchSelector.addEventListener('change', filterByPriority)

function filterByPriority(event) {
    filteredList = listaTareas.filter(todo => todo.prioridad == event.target.value)
    printTodo(filteredList);
    if (event.target.value == "") printTodo(listaTareas)
}

searchInput.addEventListener('input', search)

function search(event) {
    filteredList = listaTareas.filter(todo => todo.titulo.includes(event.target.value))
        printTodo(filteredList);
if (event.target.value == ""){
    printTodo(listaTareas)
    } 
}