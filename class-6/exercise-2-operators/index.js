//addition
console.groupCollasped("addition");
console.log(2+2);
console.log("good" + "day")
console.log(2 + "day"); 
console.log(2 + "2");
console.groupEnd();

//subtraction
console.groupCollapsed("Subtraction");
console.log(4 - 2); 
console.log("good" - "night"); 
console.log("good" - 2);
console.log(2 - "2"); 
console.groupEnd();

//multiplication
console.groupCollapsed("Multiplication");
console.log(2 * 2);
console.log(2 + 2 * 7);
console.groupEnd();

//division
console.groupCollapsed("Division");
console.log(4 / 2); 
console.log(4 / 0); 
console.log(0 / 4); 
console.groupEnd();

//incremeting
const a = 10;
let b =20;
console.groupCollasped("intcrementing");
console.log(a + 1); 
console.log(b++, b++); 
console.groupEnd();

// * Decrementing *
const c = 30;
let d = 40;
console.groupCollapsed("Decrementing");
console.log(c - 1); 
console.log(d--, d--);
console.groupEnd();