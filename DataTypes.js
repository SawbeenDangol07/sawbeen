// SOLID Principle of software development
// premitive data types

/**
 * a. string 
 * "", '', ``
 */

let a = "";
let b = '';
let c = ``;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


/**
 * b. Numbers
 * interger, floating point, bigINT
 * 
 * */

let d= 123;
let e= 12.3;
let f = 12e3;

/**
 * c. Boolean // flag
 * true, false
 */

let h= true;
let i = false;

/**
 * d. Null
 *  null 
 */

let j = null;
console.log(typeof j);  // objects


/**
 * e. undefined
 * 
 */

let k;  //undefined



//derived datatypes
/**
 * f. Array
 * - collection of data in coma seperated format enclosed by [] and stored in index value pair
 * - index starts from 0
 */


let l=[1,2,3,4,5,'a'];
console.log(l[0]);
console.log(typeof l); // array as objects

// user profile -> name,email, address, phone, .....

let userProfile=["Sabin", "sabindangoll@gmail.com", "Kathmandu", 987];

console.log("********************************************************");

console.log(userProfile[1]);
console.log(userProfile[2]);
console.log(userProfile[3]);
console.log(userProfile[3]);

console.log("********************************************************");
let allUserProfiles =[["Sabin", "sabindangoll@gmail.com", "Kathmandu", 987],["rabin", 978, "sabindangoll@gmail.com", "lalitpur"]];
console.log(allUserProfiles[0]);
console.log(allUserProfiles[0][0]);
console.log(allUserProfiles[0][1]);
console.log(allUserProfiles[0][2]);
console.log("********************************************************");
console.log(allUserProfiles[1][0]);
console.log(allUserProfiles[1][1]);
console.log(allUserProfiles[1][2]);
console.log(allUserProfiles[1][3]);

/**
 * Object / JSON
 */

let product= {
    name: "Product Name",
    category: "Category Name",
    price: 12345,
    discount: 10,
    stock:7,
    Brand: "Brand"
};

console.log(product.name);
console.log(product.price);
console.log(product['category']);

console.log("*********************************************************");

let allProduct=[{ name: "Sabin", sex: "Male", age: 20 }, { name: "rabin", sex: "Male", age: 22 } ]

console.log(allProduct[0].name);
console.log(allProduct[0].sex);
console.log(allProduct[0].age);

console.log(allProduct[0]['name']);


// console.log(allProduct[1].name);
// console.log(allProduct[1].sex);
// console.log(allProduct[1].age);



/**
 * Function
 * - block of reuseable code
 */

const getName = function(){
    
}



//set symbol
const numb1=[1,2,3,4,5];
const uniqueNumber = new setInterval(numb1)
console.log(typeof uniqueNumber)
console.log(uniqueNumber);

const symb = Symbol('a');
console.log(symb);

const userObj ={
    [symb]: "value",
    key: "override"
}

console.log(typeof symb);
console.log(userObj[symb]);

