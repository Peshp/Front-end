extends class Manager extends Employee{
    constructor(name:string, age:number, divided:number){
        super(name, age);
        this.tasks.push(`${this.name} scheduled a meeting.`);
        this.tasks.push(`${name} is preparing a quarterly report.`);
        this.divided = divided;
    }

    divided:number; 

    public override work(): void {
        let currentTask: any = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(currentTask);
    }   

    public getSalary(): number{
        return this.salary + this.divided;
    }
}