// Gets todo data
const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(posts => getUserData(posts))
}

// Gets full user data
const getUserData = (posts) => {
    posts.forEach((post) => {
        const structure = document.createElement('div');
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(response => response.json())
            .then(user => {
                post.user = user;
                generateTodoContent(post)
                console.log(post)
            })
    })
}

// Generates printable todo
const generateTodoContent = (data) => {
    const post = document.createElement('div');
    let postTitle = createParagraph(data.title),
        postBody = createParagraph(data.body),
        postUserName = createParagraph(data.user.name),
        postUserEmail = createParagraph(data.user.email);
    post.appendChild(postTitle);
    post.appendChild(postBody);
    post.appendChild(postUserName);
    post.appendChild(postUserEmail);
    printPost(post)
}

const createParagraph = (postData) => {
    const p = document.createElement('p');
    p.textContent = postData;
    return p;
}


// Prints todo to DOM
const printPost = (post) => {
    const printArea = document.querySelector('#content');
    printArea.appendChild(post)
}
getPosts();