let inputArray = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
let result = {}; //EMPTY OBJ STOR RESULR
for (let i = 1; i <= 9; i++) {
    let count = 0;  
    for (let j = 0; j < inputArray.length; j++) {
        if (inputArray[j] % i === 0) {  //* * OF I
            count++;  
        }
    }
    result[i] = count;
}
console.log('Output:', result);
