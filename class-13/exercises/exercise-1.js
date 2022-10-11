var User = /** @class */ (function () {
    function User() {
        this.name = "";
        this.age = 0;
        this.height = "";
    }
    return User;
}());
var user = new User();
user.name = "Amy";
user.age = 25;
user.height = "5'6";
console.log(user);
