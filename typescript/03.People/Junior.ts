export class Junior extends Employee{
    constructor(name:string, age:number){
        super(name, age);
        this.tasks.push(`${this.name} is working on a simple task.`);
    }

    public override work(): void {
        let currentTask: any = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(currentTask);
    }
}