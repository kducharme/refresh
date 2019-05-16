// write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

const action = () => {
    const printArea = document.querySelector('#content')
    const button = document.createElement('button');
    button.addEventListener('click', addBand);
    button.textContent = 'Add band'
    printArea.appendChild(button);
}

const allBands = [];

const addBand = () => {
    let bandName = prompt('Enter band name'),
        bandCount = allBands.length + 1;
    allBands.push(bandName);
    console.log(`New band (${bandName}) added. There are now ${bandCount} bands.`)
}

action()