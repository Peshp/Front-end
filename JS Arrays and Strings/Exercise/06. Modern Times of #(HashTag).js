function solve(text) {
    let words = text.match(/#[A-Za-z]+/g)
        .map(x => x.substring(1));

    console.log(words.join('\n'));
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');