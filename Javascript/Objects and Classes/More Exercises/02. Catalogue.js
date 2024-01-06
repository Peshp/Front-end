function solve(arr) {
    const result = {};

    arr.sort().forEach((item) => {
        let [name, quantity] = item.split(' : ');
        let char = name.charAt(0);

        if (!result[char]) {
            result[char] = [];
        }

        result[char].push({ name, quantity });
    });

    Object.entries(result).forEach(([key, value]) => {
        console.log(key);
        value.forEach((item) => {
            console.log(`  ${item.name}: ${item.quantity}`);
        });
    });
}

solve([
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);