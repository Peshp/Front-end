function createCity(city){
    Object.entries(city).forEach(function ([key, value]){
        console.log(key + ' -> ' + value);
    });
}

const city = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
};

createCity(city);