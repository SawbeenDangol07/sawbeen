// code block
/**
 * 1. General functions hoisting possible*/
// function addTwoNumbers(a,b ){
//     // task definition
//     let c = a +b;
//     return c;
// }

// const result = addTwoNumbers(1,2);

// console.log(result);

//2. arrow function

// const addTwoNumbers = (a, b) =>{
//     let c = a+b;
//     return c;s
// }
// let result = addTwoNumbers(1,5);
// console.log(result);


const calculation ={
    addTwoNumbers:function(a,b){
        let c = a+b;
        return c; 
    },
    addTwoNumbers2(a,b){
        let c = a+b;
        return c; 
    },
    addTwoNumbers3:(a,b)=>{
        let c = a+b;
        return c; 
    }
}