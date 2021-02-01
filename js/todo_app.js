let addTextInput = document.querySelector('#todoAdd input');
let addSelector = document.querySelector('#todoAdd select');
let addBtn = document.querySelector('#todoAdd button');
let saveArray = []

let searchInput = document.querySelector('#todoSearch input');
let searchBtn = document.querySelector('#todoSearch button');

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

function todoColor(priority){
    switch(priority){
        case 'urgente':
            return color = 'tomato';
        case 'diaria':
            return color = 'lightblue';
        case 'mensual':
            return color = 'greenyellow';
    }
}