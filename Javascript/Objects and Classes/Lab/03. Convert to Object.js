const converToObj = (json) => {
    const obj = JSON.parse(json);
    Object.entries(obj).forEach(function ([key, value]){
        console.log(`${key}: ${value}`);
    });
}

converToObj('{"name": "George", "age": 40, "town": "Sofia"}');