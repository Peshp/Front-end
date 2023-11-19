function solve(arr){
    let word = arr.shift().split(' ');
    let result = {};

    word.forEach((word) =>{
        result[word] = 0;
        arr.forEach((item) => {
            if(word === item){
                result[word]++;
            }
        })
    })
    result = Object.entries(result).sort((a,b) => b[1] - a[1]);

    for (const [key, value] of result) {
        console.log(`${key} - ${value}`);
    }
}

solve([
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
);