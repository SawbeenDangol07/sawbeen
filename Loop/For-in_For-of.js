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

// for (let i = 0; i < User.length; i++) {
//     console.log("Name: "+ User[i].fullName);
//     console.log("Email: "+ User[i].email);
//     console.log("Password: "+ User[i].password);
//     console.log("Phone: "+ User[i].phone);
//     console.log("Address: "+ User[i].address);
//     console.log("**********************************");
// }

//for in is for the index whereas the for of is for the 

// for (let i in User) {
//     let userObj = User[i];
//     console.log("Name: "+ User[i].fullName);
//     console.log("Email: "+ User[i].email);
//     console.log("Password: "+ User[i].password);
//     console.log("Phone: "+ User[i].phone);
//     console.log("Address: "+ User[i].address);
//     console.log("**********************************");
// }

// for (let userObj of User) {
    
//     console.log("Name: "+ User.fullName);
//     console.log("Email: "+ User.email);
//     console.log("Password: "+ User.password);
//     console.log("Phone: "+ User.phone);
//     console.log("Address: "+ User.address);
//     console.log("**********************************");
// }



let products = [
    { 
        name: "Laptop", 
        brand: "Dell", 
        price: 800, 
        discount: 10 
    },

    {
         name: "Smartphone",
         brand: "Samsung",
         price: 600,
         discount: 15 
    },

    {
         name: "Headphones",
         brand: "Sony",
         price: 120,
         discount: 5 
    },

    {
         name: "Smartwatch",
         brand: "Apple",
         price: 350,
         discount: 8 
    },

    {
         name: "Tablet",
         brand: "Lenovo",
         price: 250,
         discount: 12 
    },

    {
         name: "Monitor",
         brand: "LG",
         price: 200,
         discount: 7 
    },

    {
         name: "Keyboard",
         brand: "Logitech",
         price: 50,
         discount: 10 
    },

    {
         name: "Mouse",
         brand: "HP",
         price: 30,
         discount: 6
    },

    {
         name: "Speaker",
         brand: "JBL",
         price: 90,
         discount: 9
    },

    {
         name: "Camera",
         brand: "Canon",
         price: 500,
         discount: 13
    }
];

for(let i in products){
    
    let afterDiscount = products[i].price - discountAmt;
    let discountAmt = (products[i].price * products[i].discount) / 100;

    console.log("Product Name: "+ products[i].name);
    console.log("Product Brand: "+ products[i].brand);
    console.log("Product Price: "+ products[i].price);
    console.log("Product Discount: "+ products[i].discount);
    console.log("Discount Received: " + discountAmt);
    console.log("After Discount: " + afterDiscount);
    console.log("********************************************");
}
