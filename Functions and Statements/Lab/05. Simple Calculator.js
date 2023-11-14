const calculator = {
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
    add: (x, y) => x + y,
    substract: (x, y) => x - y,
};

const result = (num, num2, operator) => console.log(calculator[operator](num, num2));

result(5, 5, 'multiply');