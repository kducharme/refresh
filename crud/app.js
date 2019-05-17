
const showModal = () => {
    const printArea = document.querySelector('#content')

    const bg = document.createElement('div')
    bg.classList.add('bg')

    const modal = document.createElement('div')
    modal.classList.add('modal')
    
    bg.appendChild(modal)
    printArea.appendChild(bg)

    buildModal(modal)
}

const buildModal = (modal) => {
    const inputs = ['Title','Description','Tags'];
    for (let i = 0; i < inputs.length; i++){
        const input = document.createElement('input')
        input.setAttribute('placeholder', inputs[i])
        input.setAttribute('id', inputs[i])
        modal.appendChild(input)
    }
    const createNew = document.createElement('button');
    createNew.textContent = 'Save task'
    createNew.addEventListener('click', () => {
        const task = {
            title: document.querySelector('#Title').value,
            description: document.querySelector('#Description').value,
            tag: document.querySelector('#Tags').value
        }
        createTask(task)
    })
    modal.appendChild(createNew)
}

const createTask = (task) => {
    console.log(task)
}


document.querySelector('.addTask').addEventListener('click', showModal)