// function dependency

// Built-in functions
// custom-user functions

//print 1 to 10 without using loop but only with a single function


// let Printnum = (i)=>{
//     console.log(i);
//     i++;
//     if (i <= 10) {
//         Printnum(i);
//     }
// }
// Printnum(1);


let printNum = (i, limit)=>{
    console.log(i);
    i++;
    if (i <= limit) {
        printNum(i, limit);
    }
}
printNum(1, 10);


