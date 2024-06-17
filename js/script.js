let $ = document;
let trashElements = $.querySelectorAll('.delete');
let plusElement = $.querySelector('.fa-plus');
let toDoList = $.querySelector('.list');
let inputElem = $.querySelector('.input');
let formElem = $.querySelector('.form');

// add a new to do function 
function removeToDo(event) {
    event.target.parentElement.remove();
};

// remove a to do function 
function addNewToDo() {

    let inputValue = inputElem.value.trim();
    
    if (inputValue) {
        let newToDoElem = $.createElement('li');
        newToDoElem.className = 'list_items';
        toDoList.append(newToDoElem);

        let newTodoName = $.createElement('span');
        newTodoName.innerHTML = inputElem.value.trim();
        toDoList.append(newTodoName);

        let newToDoTrash = $.createElement('i');
        newToDoTrash.className = 'fa fa-trash-o delete';
        toDoList.append(newToDoTrash);

        newToDoTrash.addEventListener('click', removeToDo)

        newToDoElem.append(newTodoName, newToDoTrash);

        inputElem.value = ''
    }
};

// trash icon event
trashElements.forEach(function (i) {
    i.addEventListener('click', removeToDo)
});

// plus icon event
plusElement.addEventListener('click', addNewToDo);

// prevent default
formElem.addEventListener('submit', function(event) {
    event.preventDefault()
})

// enter key event
inputElem.addEventListener('keydown', function(event) {
 
    if(event.key == 'Enter') {
        addNewToDo()
    }
})