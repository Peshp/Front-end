class Calculator{
    num1: number;
    sym: symbol;
    num2: number;

    constructor(num: number, sym: symbol, num2: number){
        this.num1 = num;
        this.sym = sym;
        this.num2 = num2
    }

    odd(): number{
        return this.num1 + this.num2;
    }

    substract(): number{
        return Math.max(this.num1, this.num2) - Math.min(this.num1, this.num2);
    }

    multiply(): number{
        return this.num1 * this.num2;
    }

    divide(): number{
        return Math.max(this.num1, this.num2) / Math.min(this.num1, this.num2);
    }
}