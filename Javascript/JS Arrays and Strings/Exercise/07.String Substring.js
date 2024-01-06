function solve(word, text){
    let found = false;
    text.split(' ').forEach(w => {
        if (w.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            found = true;
        }
    });

    if (!found) {
        console.log(`${word} not found`);
    }
}

solve('javascript', 'JavaScript javascipt');