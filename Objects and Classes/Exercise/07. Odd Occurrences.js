function solve(input){
    const finalResult = [];
    const result = {};
    let arr = input.toLowerCase().split(' ');

    arr.forEach((word) => {
        result[word] = 0;
        arr.forEach((item) => {
            if(word === item){
                result[word]++;
            }
        })
    })

    Object.entries(result)
        .sort((a,b) => b[1] - a[1])
        .forEach(([key, value]) => {
        if(value % 2 != 0){
            finalResult.push(key);
        }
    });

    console.log(finalResult.join(" "));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');