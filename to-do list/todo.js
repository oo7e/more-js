let todos = GetArrayFromLS("todos") || []

let todosDiv = document.getElementsByClassName("todos")[0]
let addInput = document.getElementById("addInput")
let addButton = document.getElementById("addButton")
let searchText = ""
let searchInput = document.getElementById("searchInput")
searchInput.addEventListener("input", function () {
    searchText = searchInput.value
    renderTodos()
})

function SaveArrayToLS(key, arr) {
    let stringified = JSON.stringify(arr)
    localStorage.setItem(key, stringified)
}

function GetArrayFromLS(key) {
    return JSON.parse(localStorage.getItem(key))
}

function removeTodo(index) {
    let confirmDelete = confirm(`do you want to delete this todo?`)
    confirmDelete ? todos.splice(index, 1) : null
    renderTodos()
}
function checkComp(index) {
    todos[index].completed = !todos[index].completed
    renderTodos()
}

function editTodo(index, text) {

    text.innerHTML = `<form action="" id="editForm"> <input type="text" id="editInput" value="${todos[index].name}"> <input type="submit" value="save"> </form>`
    let editInput = document.getElementById("editInput")
    let editForm = document.getElementById("editForm")
    editForm.addEventListener("submit", function (event) {
        event.preventDefault()
        todos[index].name = editInput.value
        renderTodos()
    })
}


function renderTodos() {
    todosDiv.innerHTML = ""
    
    let filteredTodos = todos.filter( todo => todo.name.toLowerCase().includes(searchText.toLowerCase()) )
    
    filteredTodos.forEach((todo, index) => {

        //main
        
        let todoDiv = document.createElement("div")
        todoDiv.innerHTML = `
            <div class="todo" ${todo.completed ? ` style="color:gray;" ` : null}>
                <input type="checkbox" class="checkComp" ${todo.completed ? "checked" : null} >
                <span class="textSpan" ${todo.completed ? `style="text-decoration: line-through;"` : null}>${todo.name}</span>
                <button class="editButton"">edit</button>
                <button class="deleteButton"">x</button>
            </div>`
        todosDiv.appendChild(todoDiv)

        // additional
        let deleteButton = todoDiv.querySelector(".deleteButton")
        let checkInput = todoDiv.querySelector(".checkComp")
        let editButton = todoDiv.querySelector(".editButton")
        let textSpan = todoDiv.querySelector(".textSpan")
        deleteButton.addEventListener('click', () => {removeTodo(index)})
        checkInput.addEventListener("click", () => {checkComp(index)})
        editButton.addEventListener("click", () => {editTodo(index, textSpan)})


    })
    let completedTodos = todos.filter((todo) => todo.completed) || 0
    let completedCounter = document.createElement("span")
    completedCounter.innerHTML = `
    ${completedTodos.length} / ${todos.length} to dos completed`
    todosDiv.appendChild(completedCounter)

    let removeCompletedButton = document.createElement("button")
    removeCompletedButton.innerHTML = `remove completed`
    removeCompletedButton.addEventListener("click", function() {
        todos.filter( todo => todo.completed )
    })



    SaveArrayToLS("todos", todos)
}
renderTodos()

addButton.addEventListener("click", function (event) {
    event.preventDefault()
    if (addInput.value !== "") {
        todos.push({
            name: addInput.value,
            completed: false
        })
        renderTodos()
        addInput.value = ""
    }
    else {
        alert("Todo name cannot be empty")
    }
})

