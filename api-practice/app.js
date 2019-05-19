// Gets todo data
const getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(todos => getUserData(todos))
}

// Gets full user data
const getUserData = (todos) => {
    todos.forEach((todo) => {
        const structure = document.createElement('div');
        fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)
            .then(response => response.json())
            .then(user => {
                todo.user = user;
                generateTodoContent(todo)
            })
    })
}

// Generates printable todo
const generateTodoContent = (data) => {
    const todo = document.createElement('div');
    let todoTitle = createParagraph(data.title),
        todoStatus = createParagraph(data.completed),
        todoUserName = createParagraph(data.user.name),
        todoUserEmail = createParagraph(data.user.email);
    todo.appendChild(todoTitle);
    todo.appendChild(todoStatus);
    todo.appendChild(todoUserName);
    todo.appendChild(todoUserEmail);
    printTodo(todo)
}

const createParagraph = (todoData) => {
    const p = document.createElement('p');
    p.textContent = todoData;
    return p;
}


// Prints todo to DOM
const printTodo = (todo) => {
    const printArea = document.querySelector('#content');
    printArea.appendChild(todo)
}
getTodos();