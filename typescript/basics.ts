// primatives: number, string, boolean 
// more complex types: arrays, objects
// function types, parameters

//primitives 

let age: number; 
age = 12;

let userName: string; 
userName = 'Max';

let isInstructor: boolean; 
isInstructor = true; 

//more complex types 
let hobbies: string[]; 
hobbies = ['sports','cooking'];

type Person = {
    name: string;
    age:number;
}; 

let person:  {
    name: string;
    age:number;
}; 
person = {
    name: 'Max',
    age: 32
};

let people: Person[];

//type inference

let course: string | number = 'react - the complete guide';
course = 1234;

function addition (a:number, b:number){
    return a + b; 
}

function print(value: any) {
    console.log(value);
}

//Generics 

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = {value, ...array};
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); 
const stringArray =  insertAtBeginning(['a','b','c'], 'd')
        // updatedArray[0].split('');



class Student {
    // firstName: string; 
    // lastName: string;
    // age:number; 
    // courses: string[];

    constructor(
        public firstName:string, 
        public lastName:string, 
        public age:number, 
        private courses:string[]) {
        
    }
    enroll(courseName: string) {
        this.courses.push(courseName);
    }
    listCourse() {
        return this.courses.slice();
    }
}
const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enroll('React');

 interface Human {
    firstName: string; 
    age: number; 

    greet: () => void; 
 }

 let max: Human; 
 max = { 
    firstName: 'max',
    age: 32, 
    greet(){
        console.log('hello');
    },
 };

 class Instructor implements Human { 
    firstName: string; 
    age: number; 
    greet () {
        console.log('hello');
    }
 }