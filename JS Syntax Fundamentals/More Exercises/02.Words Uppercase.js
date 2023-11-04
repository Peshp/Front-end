function solve(text){
    const arr = text.split(" ");
    const flattenedArr = [].concat(...arr.map(word => word.match(/\w+(?:'\w+)*/g).map(w => w.toUpperCase())));
    const result = flattenedArr.join(', ');
    console.log(result);
}

solve('Hi, how are you?');