var Road = /** @class */ (function () {
    function Road(destination, price, status) {
        this.Destination = destination;
        this.Price = price;
        this.Status = status;
    }
    Road.prototype.toString = function () {
        return "destination: '".concat(this.Destination, "'\n") +
            "price: '".concat(this.Price, "'\n") +
            "status: '".concat(this.Status, "'");
    };
    return Road;
}());
function solve(inputArr, parameter) {
    var result = [];
    var arr = inputArr.toString().split(',');
    for (var index = 0; index < arr.length; index++) {
        var destination = arr[index].split('|')[0];
        var price = arr[index].split('|')[1];
        var status_1 = arr[index].split('|')[2];
        var road = new Road(destination, price, status_1);
        result.push("Ticket ".concat(road.toString()));
    }
    return result.sort();
}
solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');