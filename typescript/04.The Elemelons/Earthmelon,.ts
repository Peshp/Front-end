export class Earthmelon extends Melon{
    constructor(weight:number, melonSort:string){
        super(weight, melonSort);
    }

    index:number = this.weight * this.melonSort.length;

    toStrung(): string{
        return `Element earth\n` +
               `Sort: ${this.melonSort}\n` +
               `Element index: ${this.index}`;
    }
}