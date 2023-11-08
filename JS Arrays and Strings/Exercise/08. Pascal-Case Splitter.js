function solve(text){
    let result = [];
    const matches = text.match(/[A-Z][a-z]*/g)
        .forEach(w => {
            result.push(w);
        });

    console.log(result.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');