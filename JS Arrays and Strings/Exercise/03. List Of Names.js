function solve(names){
    for (let name of names.sort()) {
        console.log(`${names.indexOf(name) + 1}.${name}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);