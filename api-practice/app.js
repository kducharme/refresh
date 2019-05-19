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
            })
        generateTodoContent(todo)
    })
}

// Generates printable todo
const genereateTodoContent = (data) => {
    const todo = document.createElement('div');
    let todoTitle = data.title,
        todoStatus = data.completed,
        todoUserName = data.user.name,
        todoUserEmail = data.user.email;
    
    

}


// Prints todo to DOM
const printTodo = (todo) => {
    const printArea = document.querySelector('#content');
}
getTodos();