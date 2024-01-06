function solve(arr, rots){
    while(rots > 0){
        let element = arr.shift();
        arr.push(element);
        rots--;
    }

    console.log(arr.join(" "));
}

solve([32, 21, 61, 1], 4);