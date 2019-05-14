const content = document.querySelector('#content');

const createPage = (content) => {
    const addNew = document.createElement('button')
    addNew.textContent = 'Hey'
    content.appendChild(addNew)
}

createPage(content)