function solve(input){
    const towns = input.reduce((acc, curr) => {
        const [name, lat, long] = curr.split(' |');
        acc[name] = { lat, long };

        return acc;
    }, {});

    Object.entries(towns).forEach(function ([key, value]){
        let latitude = parseFloat(value.lat).toFixed(2);
        let longitude = parseFloat(value.long).toFixed(2);
        console.log(`{ town: '${key}', latitude: '${latitude}', longitude: '${longitude}' }`);
    })
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);