export class Airmelon extends Melon{
    constructor(weight:number, melonSort:string){
        super(weight, melonSort);
    }

    index:number = this.weight * this.melonSort.length;

    toStrung(): string{
        return `Element air\n` +
               `Sort: ${this.melonSort}\n` +
               `Element index: ${this.index}`;
    }
}