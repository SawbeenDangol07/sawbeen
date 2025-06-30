/**CW
 * printing box
 * 1 2 3 4 5
 * 1 2 3 4 5
 * 1 2 3 4 5
 * 1 2 3 4 5
 * 1 2 3 4 5
 */
for (let i = 1; i <= 5; i++) {
    let prnt="";
    for (let j = 1; j <= 5; j++) {
        prnt += j+" ";
    }
    console.log(prnt);
}

console.log("*******************************************************");


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
console.log("*******************************************************");

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
console.log("*******************************************************");

// 1 2 3 4 5
// 1       5
// 1       5
// 1       5
// 1 2 3 4 5
for (let i = 1; i <= 5; i++) {
    let prnt="";
    for (let j = 1; j <= 5; j++) {
       if ((i>=2 && i<=4)&&(i>=2 && i<=4)) {
        prnt += "   ";
       }
       else{
        prnt+= j + "  ";
       }
    }
    console.log(prnt);
}
console.log("*******************************************************");

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
console.log("*******************************************************");