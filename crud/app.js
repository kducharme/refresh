
const showModal = () => {
    const printArea = document.querySelector('#content')

    const bg = document.createElement('div')
    bg.classList.add('bg')

    const modal = document.createElement('div')
    modal.classList.add('modal')
    
    bg.appendChild(modal)
    printArea.appendChild(bg)
}


document.querySelector('.addTask').addEventListener('click', showModal)