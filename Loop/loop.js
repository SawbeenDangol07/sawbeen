/**
 * Do while loop
 */
// let i =0;
// do{
//     console.log("hello");
//     i++;
// }while (i<=5)

// do {
//     i++;
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// } while (i < 20)



/**
 * While
 */

// let i =1;
// while (i<= 10) {
//     console.log(i);
//     i++;        
// }
// let i =1;
// while (true) {
//     console.log(i);
//     i++;        
// }

/**
 * for loop
 */

// for(let i=1; i<=10; i++){
//     let j =1;
//     console.log(i);   
// }


/**CW
 * printing box
 * 1 2 3 4 5
 * 1 2 3 4 5
 * 1 2 3 4 5
 * 1 2 3 4 5
 * 1 2 3 4 5
 */
// for (let i = 1; i <= 5; i++) {
//     let prnt="";
//     for (let j = 1; j <= 5; j++) {
//         prnt += j+" ";
//     }
//     console.log(prnt);
// }

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j + " ";
    }
    console.log(line.trim());
}
console.log("");

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
for (let i = 5; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j + " ";
    }
    console.log(line.trim());
}
console.log("");

// 1 2 3 4 5
// 1       5
// 1       5
// 1       5
// 1 2 3 4 5
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= 5; j++) {
        if (i === 1 || i === 5) {
            line += j + " ";
        } else if (j === 1 || j === 5) {
            line += j + " ";
        } else {
            line += "  ";
        }
    }
    console.log(line.trim());
}
console.log("");

// p
// p r
// p r o
// p r o g
// p r o g r
// p r o g r a
// p r o g r a m
let str = "program";
for (let i = 1; i <= str.length; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
        line += str[j] + " ";
    }
    console.log(line.trim());
}


/**
 * Array or Objects
 * 
 */

let userInfo ={
    fullName: "",
    email: "",
    address: "",
    phone: "",
    password: ""
}

//Array of objects

let User =[
    {
        _id: 1,
    fullName: "Sabin Dangol",
    email: "sabin@gmail.com",
    address: "ktm",
    phone: 987655,
    password: "Admin"
    },
    {
        _id: 2,
    fullName: "shyam Dangol",
    email: "shyam@gmail.com",
    address: "lalitpur",
    phone: 987727655,
    password: "hi"
    },
    {
        _id: 3,
    fullName: "roshan Dangol",
    email: "rsh@gmail.com",
    address: "bhkt",
    phone: 9876121255,
    password: "roSUn"
    },
    {
        _id: 4,
    fullName: "prahsant",
    email: "prashant@gmail.com",
    address: "btl",
    phone: 9876512125,
    password: "btl"
    },
    {
        _id: 5,
    fullName: "rohan",
    email: "Rohan@gmail.com",
    address: "lalitpur",
    phone: 987655899,
    password: "password@12"
    },
    {
        _id: 6,
    fullName: "aayush shrestha",
    email: "aasyuh@gmail.com",
    address: "lalipur",
    phone: 98765572772,
    password: "dmin"
    },
    {
        _id: 7,
    fullName: "aayush napit",
    email: "Napit@gmail.com",
    address: "lalitpur",
    phone: 9876523235,
    password: "napit"
    },
    {
        _id: 8,
    fullName: "shrinkhala khatiwada",
    email: "shrink@gmail.com",
    address: "ktm",
    phone: 987658125,
    password: "sisan"
    },
    {
        _id: 9,
    fullName: "pratik ",
    email: "pratik@gmail.com",
    address: "ktm",
    phone: 987657875,
    password: "pratikksa"
    },
    {
        _id: 10,
    fullName: "roshni",
    email: "rose@gmail.com",
    address: "sundhara",
    phone: 987612155,
    password: "rose"
    }
];

for (let i = 0; i < User.length; i++) {
    console.log("Name: "+ User[i].fullName);
    console.log("Email: "+ User[i].email);
    console.log("Password: "+ User[i].password);
    console.log("Phone: "+ User[i].phone);
    console.log("Address: "+ User[i].address);
    console.log("**********************************");
}