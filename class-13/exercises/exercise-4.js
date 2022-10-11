var Human = /** @class */ (function () {
    function Human() {
        this.birthYear = 0;
    }
    Human.prototype.ageDifference = function () {
        console.log("The age diference between my animal and I is " + (human.birthYear - animal.birthYear));
    };
    return Human;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.birthYear = 0;
    }
    return Animal;
}());
var human = new Human();
human.birthYear = 2000;
var animal = new Animal();
animal.birthYear = 2015;
console.log(Human);
