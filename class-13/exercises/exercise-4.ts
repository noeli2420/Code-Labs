class Human { 
    birthYear:number = 0;
 
    ageDifference (){
        console.log("The age diference between my animal and I is " + (human.birthYear - animal.birthYear))
    }
}
class Animal { 
    birthYear:number = 0;
}

let human:Human = new Human();
human.birthYear = 2000;


let animal:Animal = new Animal();
animal.birthYear = 2015;

