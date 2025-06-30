/**
 * if-else
 * else-if 
 * switch-case
 * loop
 * 
 * decision making statements
 * 
 */

//if else

let age= 17;
if(age>=19){
    console.log("Adult")
}
else{
    console.log("child");
    
}

//print the day if is weekday or weekend or holiday.
//consider if, day is sunday or saturday => holiday
// if day is Friday => weekend
// any other day => weekday


//nesting if else example
let day= "friday";
if(day=="sunday" || day=="saturday"){
    console.log("its holiday");
}
else{
    if (day=="friday") {
        console.log("weekend");
    }
    else{
        console.log("weekday");       
    }
}

console.log("*********************************");

// get division and percentage of a student who scored 350 out of 500
// The division be based on percentage
// If percentafe is >=80, then division is => distinction
// if 


let marks = (150/500)*100;

if (marks>= 80) {
    console.log("Distinction");
} else if(marks>= 60){
    console.log("first Division");
}
else if(marks>=45) {
    console.log("Second division");
}

else if( marks>=32){
    console.log("Third Division");
    
}
else{
    console.log("Sorry! You are failed!");
    
}

console.log("************************************************");

/**
 * Switch case
 */

day="sunday";

switch(day){
    case "sunday", "Saturday":
        console.log("Holiday");
        break;
    // case "Saturday":
    //     console.log("Holiday");
    //     break;
    case "Friday":
        console.log("weekend");
        break;
    default:
        console.log("weekday");
        break;
        
}
