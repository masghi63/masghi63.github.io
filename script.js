const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')


todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)




function addTodo(event) {
    event.preventDefault()
    // add new div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    // add new list
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    //add completed button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)
    //add delete button
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add("delete-btn")
    todoDiv.appendChild(deleteButton)
    // input list to div
    todoList.appendChild(todoDiv)
    todoInput.value = ''
}

function deleteCheck(event) {
    const item = event.target
    //delete list
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement
        todo.classList.add("fall")
        todo.addEventListener("transitionend", function () {
            todo.remove()
        })
    }
    //completing list
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement
        todo.classList.toggle("completed")
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes
    todos.forEach(function (todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = 'flex'
                break
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = "none"
                }
                break
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = "none"
                }
                break
        }
    })
}