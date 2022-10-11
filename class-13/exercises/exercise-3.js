var Person = /** @class */ (function () {
    function Person() {
        this.favColor = "";
    }
    Person.prototype.logFavColor = function () {
        console.log("my fav color is " + this.favColor);
    };
    return Person;
}());
var person = new Person();
person.favColor = "Blue";
person.logFavColor();
