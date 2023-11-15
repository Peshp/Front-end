function solve(num){
    num /= 10;
    let result = [];

    for (let i = 0; i < num; i++) {
        result.push('%');
    }
    if(num < 10){
        for (let i = num; i < 10; i++) {
            result.push('.')
        }
    }

    if(num < 10){
        console.log(`${num * 10}% [${result.join('')}]`);
        console.log('Still loading...');
    } else{
        console.log('100% Complete!');
        console.log(result.join(''));
    }
}

solve(100);