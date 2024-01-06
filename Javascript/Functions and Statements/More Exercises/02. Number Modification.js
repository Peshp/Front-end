function solve(num){
    let sum = 0;
    let count = 0;

    while(true){
        let num2 = num;

        while (num2 > 0){
            let digit = num2 % 10;
            sum += digit;
            num2 /= 10;
            num2 = Math.floor(num2)
            count++;
        }

        if(sum / count > 5){
            num2 = num;
            console.log(num2);
            break;
        }

        num = num + '' + 9;
        count = 0;
        sum = 0;
    }
}

solve(5835);