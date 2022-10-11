class Person {
    favColor:string = "";
    logFavColor() {
            console.log("my fav color is " + this.favColor)
         }

    }

let person:Person = new Person();
    person.favColor = "Blue"

    person.logFavColor();
