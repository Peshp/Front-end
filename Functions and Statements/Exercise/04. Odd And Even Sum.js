function solve(num){
    let oddsum = 0;
    let evensum = 0;

    while (num > 0){
        let digit = num % 10;
        if(digit % 2 === 0){
            evensum += digit;
        } else{
            oddsum += digit;
        }

        num /= 10;
        num = Math.floor(num);
    }

    console.log(`Odd sum = ${oddsum}, Even sum = ${evensum}`);
}

solve( 1000435);