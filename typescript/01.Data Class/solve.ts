
var Data = /** @class */ (function () {
    function Data(method, url, version, message) {
        this.Method = method;
        this.Url = url;
        this.Version = version;
        this.Message = message;
        this.Response = 'undefined';
        this.Fulfilled = false;
    }
    Data.prototype.toString = function () {
        return "method: '".concat(this.Method, "'\n") +
            "url: '".concat(this.Url, "']\n") +
            "version: '".concat(this.Version, "'\n") +
            "message: '".concat(this.Message, "'\n") +
            "response: '".concat(this.Message, "'\n") +
            "fulfilled: '".concat(this.Fulfilled, "'");
    };
    return Data;
}());
var myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData.toString);