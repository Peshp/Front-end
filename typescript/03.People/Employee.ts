abstract class Employee{
    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    name: string;
    age: number;
    salary: number;
    tasks: string[];
    work(): void
    {
        
    }

    collectSalary() : void
    {
        console.log(`${this.name} has received ${this.getSalary()} this month`);
    }

    getSalary() : number{
        return this.salary;
    }
}