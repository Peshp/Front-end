function solve(arr){
    let resultArr = [];
    arr.sort();
    while(arr.length > 0){
        let first = arr.shift();
        let second = arr.pop();

        resultArr.push(first);
        resultArr.push(second);
    }

    console.log(resultArr);
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);