const allProducts =[
    {
        name: "product One",
        price: 100,
        discount: 10,
    },

    {
        name: "product two",
        price: 100,
        discount: 10,
    },

    {
        name: "product three",
        price: 100,
        discount: 10,
    }
];

//oneliner functions
// const getDiscountAmount = (price, discount) => ((price*discount)/100);
// const afterDiscountAmount = (price, disAmt) => (price-disAmt);

// for (let prod of allProducts) {
//     prod.disAmt = prod.price * prod.discount / 100;
//     prod.afterDis = prod.price - prod.disAmt;
// }

// console.log(allProducts);


//create a js array with atleast 7~10 data of students,
//eeach student should include name, scoreObt, scoreObt should be less than 500
// using js fucntions generate the percentage of each student and get the divion for each 
// the division should be based on the percenatage



const students = [
    { 
        name: "Alice",
        scoreObt: 420 
    },
    { 
        name: "Bob",
        scoreObt: 350 
    },
    { 
        name: "Charlie", 
        scoreObt: 275 
    },
    { 
        name: "Diana", 
        scoreObt: 490 
    },
    {
        name: "Ethan", 
        scoreObt: 310 
    },
    { 
        name: "Fiona", 
        scoreObt: 400 
    },
    { 
        name: "George", 
        scoreObt: 230 
    },
    { 
        name: "Hannah", 
        scoreObt: 380 
    },
    { 
        name: "Ian", 
        scoreObt: 295 
    },
    { 
        name: "Julia", 
        scoreObt: 445 
    }
];

const getPercentage = (obtainedMarks) => (obtainedMarks / 500 * 100);

const getDivision = (percentage) => {
    if (percentage >= 80) {
        return "Distinction";
    } else if (percentage >= 60) {
        return "First Division";
    } else if (percentage >= 45) {
        return "Second Division";
    } else if (percentage >= 32) {
        return "Third Division";
    } else {
        return "Sorry! You are failed!";
    }
};
for (let student of students) {
    const percentage = getPercentage(student.scoreObt);
    student.percentage = percentage;
    student.division = getDivision(percentage);
    console.log("Name: "+ student.name);
    console.log("Marks: "+ student.scoreObt);
    console.log("Percentage: "+ student.percentage);
    console.log("Division: "+ student.division);
    console.log("_________________________________________");
}
