const allTasks = [];
const printArea = document.querySelector('#content')


const showModal = () => {
    const bg = document.createElement('div')
    bg.classList.add('bg')

    const modal = document.createElement('div')
    modal.classList.add('modal')
    
    bg.appendChild(modal)
    printArea.appendChild(bg)

    addInputs(modal)
}

const addInputs = (modal) => {
    const inputs = ['Title','Description','Tags'];
    for (let i = 0; i < inputs.length; i++){
        const input = document.createElement('input')
        input.setAttribute('placeholder', inputs[i])
        input.setAttribute('id', inputs[i])
        modal.appendChild(input)
    }
    const createNew = document.createElement('button');
    createNew.textContent = 'Save task'
    createNew.addEventListener('click', createTask)
    modal.appendChild(createNew)
}

const createTask = () => {
    const task = {
        title: document.querySelector('#Title').value,
        description: document.querySelector('#Description').value,
        tag: document.querySelector('#Tags').value
    }
    closeModal();
    printTask(task);
    allTasks.push(task);
}

const printTask = (task) => {
    const structure = document.createElement('div');
    structure.classList.add('task')
    for (let i in task) {
        const data = document.createElement('p')
        data.textContent = task[i]
        structure.appendChild(data)
    }
    printArea.appendChild(structure)
}

const closeModal = () => {
    document.querySelector('#content').removeChild(document.querySelector('.bg'))
}




document.querySelector('.addTask').addEventListener('click', showModal)