const content = document.querySelector('#content');

const createPage = () => {
    const button = document.createElement('button')
    button.textContent = 'Get started'
    button.addEventListener('click', openModal)
    document.querySelector('.left').appendChild(button)
}

const openModal = () => {
    console.log('opened')
}

createPage(content)