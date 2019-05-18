const getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(todos => displayTodos(todos))
    }
    
    const displayTodos = (todos) => {
        const printArea = document.querySelector('#content');
        todos.forEach((todo) => {
            const structure = document.createElement('div');
            const user = getUser(todo.userId);
            console.log(user)
        })
    }
    
const getUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(user => {
            return user;
        })
}


getTodos();