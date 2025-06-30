/**
 * Arthimetic/ mathematical operators
 * +,-,*,/,%
 * Incremental or decremental 
 * ++, --
 */

let a= 10;
let b=20;

let c= a/b;
let d=a%b;


let e=1;
e=e+1;
e++;
++e;

console.log(e++);//e=4 //output 4, e=e+1
console.log(++e);//e=6 // e=e+1, output: 6

/**
 * Assignment operator
 * =, +=, -=, /-, %=
 */


let f =1
f=f+1
f+=1;
console.log(f);

/**
 * String/concatination operator
 * +
 */

let g=10
let h= '10'

let i
let j= g+i
// let k=h+i
// console.log(k);

console.log(j);

console.log(g+h);
console.log('***********************************************************************');

/**
 * comparision operator
 * <, >, ,<=, >=, ==, !=, ===, !==
 * 
 */

let k = 10;
let l='10';
console.log(k==l);
console.log(k===l);
console.log(k!=l);
console.log(k!==l);
console.log(k<l);
console.log(k<=l);
console.log(k>l);
console.log(k>=l);

console.log("*******************************************************************************");

/**
 * logical operator
 * &&, ||, !
 * - if all the expression in && operation are true than the result is true
 * - if any one of the expression in || operation is true than the result is true
 * - if negating true => is false and vice-versa
 */

console.log(!true);
console.log(!false);

console.log((k<l) && (k!==l) && (k>=l));
console.log((k<l) || (k!==l) || (k>=l));


/**
 * condition or ternary
 * (exp) ? true condition : false condition
 * one line if else statement
 * nullish colleaching
 * expressionValue ?? defaultValue
 */

let age=14;
let ageGroup = age >= 18 ? 'adult' : 'child';
console.log(ageGroup);

let ageValue = age ?? null;


/**
 * Destructure
 * Array, object
 */
// let full = ["sabin", "Dangol"];

// let firstName= full[0];
// let lastName= full[1];
let [firstName, lastName]=["sabin", "Dangol"];

console.log("Your first name is "+firstName+" "+'Your lastname is  '+lastName);
console.log(lastName);


// let userObj = {
//     name : "Sabin Dangol",
//     email: "Sabindangol440@gmail.com",
//     address: "Kathmandu",
//     phone: 9768448941
// }

// // let {name, email}= userObj;
// let {name, email:Email}= userObj;
// console.log(name, Email);
 
/**
 * Spread and Rest Operator
 * ...
 */
//deepcopy shallow copy

let userObj = {
    name : "Sabin Dangol",
    email: "Sabindangol440@gmail.com",
    address: "Kathmandu",
    phone: 9768448941
}

let userObj1= {...userObj}

console.log(userObj);
console.log(userObj1);

let{name, email, ...contactInfo} = userObj;

/**
 * Template liretrals
 * '', "", ``
 */

let template = `your name is: ${name}. your email is: ${email}`;
console.log(template);
