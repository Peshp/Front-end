function solve(stock, ordered){
    let totalProducts = [...stock, ...ordered];
    let result = [];

    for (let i = 0; i < totalProducts.length; i+=2) {
        const name = totalProducts[i];
        const price = Number(totalProducts[i + 1]);

        if (result.hasOwnProperty(name)) {
            result[name] += price;
        } else {
            result[name] = price;
        }
    }

    for (const [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value}`);
    }
}

solve([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);