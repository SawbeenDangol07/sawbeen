console.log("Hello world");
/**
 * Multi line comment
 * Add more lines here
 */

// variable and constant
//vale changeable => variable
// once defined and is not changeable => constant

/**
 * @name: string
 * 
 * Global scope 
 * - var, let
 * 
 * Block scope 
 * - let
 */
var name = "sabin";
let email ="sabin@gmail.com";
console.log(name);
console.log(email);


/**
 * Global scope
 */

var a= 10;
console.log(a); //10
{
    //block
    var a = 20;
    console.log(a); //20
}

console.log(a); //20

/**
 * Block
 */


let b = 10;
console.log(b);
{
    let b = 20;
    console.log(b);
    
}

console.log(b);


// let FullName= "Sabin"
// let FullName="dangol"

console.log(FullName);


//hoisting
console.log(emailAddress); //undefined, error in letde
var emailAddress = "SabinDangol@gmail.com";


const PI = 3.14;

const GRAVITY = 9.8