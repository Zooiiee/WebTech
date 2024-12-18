//A) Event CustomerInfo which emits by passing values

//eventHandlingCustomer.js

var e = require('events');
var event = new e.EventEmitter();
var customerInfo = function(code,cname,city,email)
{
    console.log("***Customer Information***");
    console.log("Customer Number : "+code);
    console.log("Customer Name : "+cname);
    console.log("City : "+city);
    console.log("Email : "+email);
}


event.on("customerInfo",customerInfo);
event.emit("customerInfo",1,"Zoya","Bandra","zoieej@gmail.com");
event.emit("customerInfo",2,"Srushti","Badlapur","srugaikwad111@gmail.com");
event.emit("customerInfo",3,"Anita","Dockyard","anitaverma09@gmail.com");




//B) Event Salary registered using arrow function

//eventHandlingSalary.js

var e = require('events');
var event = new e.EventEmitter();
event.on("calSal",(basic) =>
{
    var hra = basic * 60/100;
    var da = basic;
    var pt =200;
    var it = basic * 30/100;
    var gross = basic + hra + da + pt + it;
    var net = gross - (pt+it);
    console.log("\n***Employee Salary***");
    console.log(`\nBasic Salary : ${basic}`);
    console.log(`Dearness Allowance : ${da}`);
    console.log(`HRA : ${hra}`);
    console.log(`Profession Tax : ${pt}`);
    console.log(`Income Tax : ${it}`);
    console.log(`Gross Salary : ${gross}`);
    console.log(`Net Salary : ${net}`);
});
event.emit('calSal',15000);
event.emit('calSal',28000);





// C) Event Calculator using arrow function

//eventHandlingCalculator.js

var e = require('events');


var event = new e.EventEmitter();
console.log("\n***Basic Calculator***\n");
event.on("add", (x, y) => {
    console.log(`Addition : ${x} + ${y} = ${x + y}`);
});
event.on("sub", (x, y) => {
    console.log(`Subtraction : ${x} - ${y} = ${x - y}`);
});
event.on("mul", (x, y) => {
    console.log(`Multiplication : ${x} * ${y} = ${x * y}`);
});
event.on("div", (x, y) => {
    console.log(`Division : ${x} / ${y} = ${x / y}`);
});
event.on("mod", (x, y) => {
    console.log(`Modulo Division : ${x} % ${y} = ${x % y}`);
});
event.on("sqrt", (x) => {
    console.log(`SquareRoot of ${x} = ${Math.sqrt(x)}`);
});


event.emit("add", 10, 20);
event.emit("sub", 120, 20);
event.emit("mul", 9, 20);
event.emit("div", 125, 5);
event.emit("mod", 125, 4);
event.emit("sqrt", 81);
