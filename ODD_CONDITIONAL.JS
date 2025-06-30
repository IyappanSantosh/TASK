const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter the number (x): ', (input) => {
    const x = parseInt(input);
    let result = [];
    let terms = x;
    if (x % 2 === 0) {
        terms = x - 1;
    }
    let number = 1;
    for (let i = 0; i < terms; i++) {
        result.push(number);  
        number += 2;         
    }
    console.log('Output:', result.join(', '));
    readline.close();
});
