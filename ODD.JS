const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter the number of terms (x): ', (input) => {  //user defiend
    const x = parseInt(input); //ip to str 
    let result = [];
    let number = 1;
    for (let i = 0; i < x; i++) {
        result.push(number);      
        number += 2;              
    }
    console.log('Output:', result.join(', '));
    readline.close();
});
