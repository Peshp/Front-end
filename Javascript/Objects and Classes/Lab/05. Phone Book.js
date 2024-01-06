function phoneBook(arr){
    const phoneObj = arr.reduce((acc, curr) => {
        const [name, phone] = curr.split(' ');
        acc[name] = phone;

        return acc.sort();
    }, {});

    Object.entries(phoneObj).forEach(function ([key, value]){
        console.log(key + ' -> ' + value);
    });
}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);