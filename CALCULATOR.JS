class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }

    sub() {
        return this.a - this.b;
    }

    mul() {
        return this.a * this.b;
    }
    div() {
        if (this.b !== 0) {
            return this.a / this.b;
        } else {
            return "Division by zero is not allowed.";
        }
    }
}
const readline = require('readline').createInterface({   //THIS IS A IMPORTINGS OF READLINE MODULE
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter first number (a): ', (inputA) => {
    readline.question('Enter second number (b): ', (inputB) => {
        readline.question('Enter operation (add / sub / mul / div): ', (operation) => {
            const a = parseFloat(inputA);   // IP TO FLOAT 
            const b = parseFloat(inputB);
            const calc = new Calculator(a, b);

            switch (operation.toLowerCase()) {
                case 'add':
                    console.log('Result:', calc.add());
                    break;
                case 'sub':
                    console.log('Result:', calc.sub());
                    break;
                case 'mul':
                    console.log('Result:', calc.mul());
                    break;
                case 'div':
                    console.log('Result:', calc.div());
                    break;
                default:
                    console.log('Invalid operation.');
            }
            readline.close();
        });
    });
});
