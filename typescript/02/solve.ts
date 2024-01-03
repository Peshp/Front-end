class Road{
    constructor(destination: string, price: string, status: string){
        this.Destination = destination;
        this.Price = price;
        this.Status = status;
    }

    Destination: string;
    Price: string;
    Status: string;

    toString(): string{
        return `destination: '${this.Destination}'\n` + 
            `price: '${this.Price}'\n` + 
            `status: '${this.Status}'`;
    }
}

function solve(inputArr: string[], parameter: string): string[]{
    let result: string[] = [];
    let arr = inputArr.toString().split(',');
    for (let index = 0; index < arr.length; index++) {
        let destination: string = arr[index].split('|')[0];
        let price: string = arr[index].split('|')[1];
        let status: string = arr[index].split('|')[2];

        let road = new Road(destination, price, status);
        result.push(`Ticket ${road.toString()}`);
    }

    return result.sort();
}

solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
    ],
    'destination');