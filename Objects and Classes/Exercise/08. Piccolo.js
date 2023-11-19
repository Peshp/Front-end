function solve(arr){
    let result = [];

    arr.forEach((item) => {
        if(item.includes('IN')){
            result.push(item.split(', ')[1]);
        } else if(item.includes('OUT')){
            let car = item.split('OUT, ');
            const index = arr.indexOf(car);

            result.splice(index, 1);
        }
    });

    if(result.length === 0){
        console.log('Parking Lot is Empty');
    } else{
        result.sort();
        console.log(result.join('\n'));
    }
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']

);