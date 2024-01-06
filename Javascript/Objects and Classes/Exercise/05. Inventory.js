function solve(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let [name, level, items] = arr[i].split(" / ");
        const hero = {
            name: name,
            level: Number(level),
            items: items
        }
        result.push(hero);
    };

    result.sort((a, b) => a.level - b.level);

    for (const hero of result) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

solve([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);