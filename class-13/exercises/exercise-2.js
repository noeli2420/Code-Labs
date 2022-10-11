var Logger = /** @class */ (function () {
    function Logger() {
        this.randomNumber = Math.floor(Math.random() * 10) + 1;
        this.randomColor = "";
        this.to100 = Math.floor(Math.random() * 100);
    }
    ;
    return Logger;
}());
var logger = new Logger;
