function solve(num1, num2, op){
    switch (op) {
        case '+': console.log(num1 + num2); break;
        case '-': console.log(Math.max(num1, num2) - Math.min(num1, num2)); break;
        case '*': console.log(num1 * num2); break;
        case '/': console.log(Math.max(num1, num2) / Math.min(num1, num2)); break;
        case '%': console.log(Math.max(num1, num2) % Math.min(num1, num2)); break;
        case '**': console.log(num1 ** num2); break;
    }
}

solve(3, 5.5, '**');