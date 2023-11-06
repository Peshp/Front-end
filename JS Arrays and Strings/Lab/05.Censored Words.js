function solve(sentence, expectation){
    while(sentence.includes(expectation)){
        sentence = sentence.replace(expectation, "*".repeat(expectation.length));
    }

    console.log(sentence);
}

solve('A small sentence with some words', 'small');