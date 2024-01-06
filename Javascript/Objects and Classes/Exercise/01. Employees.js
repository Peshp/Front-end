class Employee{
    constructor(name, length) {
        this.name = name;
        this.length = length;
    }
}

function solve(arr){
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let employee = new Employee(arr[i], arr[i].length);
        result.push(`Name: ${employee.name} -- Personal Number: ${employee.length}`);
    }

    console.log(result.join('\n'));
}

solve([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
);