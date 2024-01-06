export class Firemelon extends Melon{
    constructor(weight:number, melonSort:string){
        super(weight, melonSort);
    }

    index:number = this.weight * this.melonSort.length;

    toStrung(): string{
        return `Element fire\n` +
               `Sort: ${this.melonSort}\n` +
               `Element index: ${this.index}`;
    }
}