const convertToJson = function (firstName, lastName, color){
    const person = {
        firstName,
        lastName,
        color
    };

    console.log(JSON.stringify(person));
}

convertToJson('George', 'Jones', 'Brown')