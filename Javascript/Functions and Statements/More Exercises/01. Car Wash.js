const commands  = {
    'soap': (value) => value + 10,
    'water': (value) => value * 1.2,
    'vacuum cleaner': (value) => value * 1.25,
    'mud': (value) => value * 0.9,
};

function solve(input){
    let value = 0;

    for (let i = 0; i < input.length; i++) {
        let command  = input[i];
        value = commands[command](value);
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);