const allNum = [];

const print = () => {
    for (i = 0; i < 10; i++) {
        allNum.push(Math.random() * 10);
        content.textContent += `${allNum[i]}`;
    }
    console.log(content)
}

// print()