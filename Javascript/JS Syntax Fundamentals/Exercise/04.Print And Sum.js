function sum(num1, num2){
    let numbersString = '';
    let result = 0;
    for (i = num1; i <= num2; i++){
        numbersString += `${i} `;
        result += i;
    }
    console.log(numbersString);
    console.log(`Sum: ${result}`);
}

sum(5, 10);