function solve(num1, num2){
    let firstFact = 1;
    let secondDact = 1;

    for (let i = 1; i <= num1; i++) {
        firstFact *= i;
    }
    for (let i = 1; i <= num2; i++) {
        secondDact *= i;
    }

    let result = firstFact / secondDact;

    console.log(result.toFixed(2));
}

solve(5, 2);