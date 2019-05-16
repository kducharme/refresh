const print = () => {
    let printedNum = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            num = 'Chicken';
        }
        else if (i % 7 === 0) {
            num = 'Monkey';
        }
        else if (i % 5 === 0 && i % 7 === 0) {
            num = 'ChickenMonkey';
        }
        else {
            num = i;
        }
        printedNum += num;
        console.log(printedNum)
    }
}

print();
