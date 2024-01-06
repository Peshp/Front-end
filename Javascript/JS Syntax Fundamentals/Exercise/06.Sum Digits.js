function solve(num){
    let result = 0;
    while (num > 0){
        let digit = num % 10;
        result += digit;
        num -= digit;
        num /= 10;
    }

    console.log(result);
}

solve(543);