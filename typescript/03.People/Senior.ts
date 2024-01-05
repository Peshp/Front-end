export class Senior extends Employee{
    constructor(name:string, age:number){
        super(name, age);
        this.tasks.push(`${this.name} is woking on a complicated task.`);
        this.tasks.push(`${this.name} is taking time off work.`);
        this.tasks.push(`${this.name} is supervising junior workers.`);
    }

    tasks = [`${this.name} is woking on a complicated task.`,
             `${this.name} is taking time off work.`,
             `${this.name} is supervising junior workers.`];

    public override work(): void {
        let currentTask: any = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(currentTask);
    }
}