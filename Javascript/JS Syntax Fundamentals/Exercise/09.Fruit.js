function solve(fruit, grams, price){
    console.log(`I need $${price.toFixed(2)} to buy ${grams/1000} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);