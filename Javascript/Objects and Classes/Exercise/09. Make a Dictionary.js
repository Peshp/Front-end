function solve(jsonArr) {
    let result = [];
    let arr = jsonArr.map(json => JSON.parse(json));

    arr.forEach((item) => {
        const [key, ...rest] = Object.entries(item).toString().split(',');
        const value = rest.join(',');

        result.push(`Term: ${key} => Definition: ${value}`);
    });

    console.log(result.sort().join('\n'));
}

solve([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
);