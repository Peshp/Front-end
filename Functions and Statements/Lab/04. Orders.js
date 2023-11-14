const prices = {
    coffee: (a) => a * 1.50,
    water: (a) => a * 1.00,
    coke: (a) => a * 1.40,
    snacks: (a) => a * 2.00,
}

function orders(product, quantity){
    console.log(`${prices[product](quantity).toFixed(2)}`);
}

orders("water", 5);