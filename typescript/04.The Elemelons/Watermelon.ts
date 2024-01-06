export class Watermelom extends Melon{
    constructor(weight:number, melonSort:string){
        super(weight, melonSort);
    }

    index:number = this.weight * this.melonSort.length;

    toString(): string{
        return `Element water\n` +
               `Sort: ${this.melonSort}\n` +
               `Element index: ${this.index}`;
    }
}