function addressBook(input){
    const addresses = input.reduce((acc, curr) => {
        const [name, address] = curr.split(':');
        acc[name] = address;

        return acc
    }, {});

    Object.entries(addresses).forEach(function ([key, value]){
        console.log(key + ' -> ' + value)
    });
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);