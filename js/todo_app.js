let addTextInput = document.querySelector('#todoAdd input');
let addSelector = document.querySelector('#todoAdd select');
let addBtn = document.querySelector('#todoAdd button');
let saveArray = []

let searchSelector = document.querySelector('#todoSearch select')
let searchInput = document.querySelector('#todoSearch input');

let todoPrint = document.querySelector('#todoPrint')

let idCount = 0;

printTodo(listaTareas);

addBtn.addEventListener('click', saveTodo);

function saveTodo() {
    if (addTextInput.value != '') {
        idCount++
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
        article.classList.add('article' +todo.idTarea);
        p.innerHTML = todo.titulo;
        btn.innerText = 'Eliminar';
        btn.classList.add(todo.idTarea);
        article.appendChild(p);
        article.appendChild(btn);
        article.style.backgroundColor = todoColor(todo.prioridad);
        todoPrint.appendChild(article);
        btn.addEventListener('click', todoDelete);
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
    searchSelector.value = "";
    filteredList = listaTareas.filter(todo => todo.titulo.toLowerCase().includes(event.target.value))
    printTodo(filteredList);
    if (event.target.value == "") {
        printTodo(listaTareas)
    }
}

function todoDelete(event) {
    let articleToDelete = document.querySelector('.article'+ event.target.classList)
    articleToDelete.parentNode.removeChild(articleToDelete);
    listaTareas.forEach(todo =>{
        if(event.target.classList == todo.idTarea){
            var index = listaTareas.indexOf(todo.idTarea);
            listaTareas.splice(index, 1);
        }
    })
}