function solve(num){
    let result = 0;
    let same = true;
    let temp = num % 10;

    while (num > 0){
        let num2 = num % 10;

        if(temp == Math.floor(num2)){
            same = true;
        } else{
            same = false;
        }

        result += num2;
        num -= num2;
        num /= 10;
    }
    console.log(same);
    console.log(result);
}

solve(1234);