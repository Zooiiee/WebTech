//A2) Handle events using Event Emitter class 

//ArrayEvent.js 

var e = require('events');
var event = new e.EventEmitter();
var A = [23,12,56,10,48,13];
var str = ['a','m','i','o','d','c'];


//Function to Sort an Array of elements
function SortArray()
{
    console.log("Array Before Sorting");
    console.log(str);
    str.sort();
    console.log("Array After Sorting");
    console.log(str);
}
//Function to calculate sum of Even elements
function sumOfEvenEl()
{
    var sum = 0;
    for( i=0; i<A.length;i++)
    {
        if(i%2==0)
        {
            sum+=A[i];
        }
    }
    console.log("Sum of even Elements in the array is : "+ sum);
}
//Function to calculate sum of Odd elements
function sumOfOddEl()
{
    var sum = 0;
    for( i=0; i<A.length;i++)
    {
        if(i%2!=0)
        {
            sum+=A[i];
        }
    }
    console.log("Sum of odd Elements in the array is : "+ sum);
}


var SearchArray = function(ch)
{
    flag = false;
    for(i=0;i<str.lenght;i++)
    {
        if (str[i]==ch)
        {
            flag = true;
            break;
        }
    }
    if (flag)
        {
            console.log(ch + " is Found in the Array!! ");
        }
        else
        {
            console.log(ch + " is Not Found in the Array!! ");
        }
}
event.addListener("Sort",SortArray);
event.on("SumEven", sumOfEvenEl);
event.on("SumOdd", sumOfOddEl);
event.on("SearchArray", SearchArray);
console.log("***Sorting an Array***");
event.emit("Sort");
console.log("\n***Sum Of Even Elements***");
event.emit("SumEven");
console.log("\n***Sum Of Odd Elements***");
event.emit("SumOdd");
console.log("\n***Searching an Array ***");
event.emit("SearchArray","i");
console.log("\n***Searching an Array ***");
event.emit("SearchArray","z");



//B) Event chaining in node js

//TeaEvent.js 

var e = require('events');
var event = new e.EventEmitter();

function Tea()
{
    console.log("Making Tea");
    event.emit("GasOn");
}
event.addListener("Tea",Tea);

function GasOn()
{
    console.log("1.Put the Gas on....");
    event.emit("BoilWater");
}
event.addListener("GasOn",GasOn);


function BoilWater()
{
    console.log("2.Let the Water Boil....");
    event.emit("AddTea");
}
event.addListener("BoilWater",BoilWater);


function AddTea()
{
    console.log("3.Add Tea to the Boiling Water....");
    event.emit("MilkandSugar");
}
event.addListener("AddTea",AddTea);


function MilkandSugar()
{
    console.log("4.Adding Milk and Sugar....");
    console.log("5.Tea is Ready!!!!!!!!!!!!!!");
}
event.addListener("MilkandSugar",MilkandSugar);
event.emit("Tea");



//A1) Handle events using Event Emitter class 
//events.js 

var e = require('events');
const { EventEmitter } = require('stream');
var event = new e.EventEmitter();
function CreateFile()
{
    console.log("Creating a File");
}
function Read()
{
    console.log("Reading a File");
}
function Write()
{
    console.log("Writing a File");
}
event.addListener("IOoperations",Write);
event.addListener("IOoperations",Read);
event.once("CreateIO", CreateFile);
console.log(event.listenerCount("CreateIO"));
event.emit("CreateIO");
event.emit("IOoperations");
event.emit("IOoperations");
console.log(event.rawListeners("IOoperations"));
console.log(event.listenerCount("IOoperations"));
event.removeListener("IOoperations", Read);
event.emit("IOoperations");
console.log(event.listenerCount("IOoperations"));
event.emit("CreateIO");
console.log(event.listenerCount("CreateIO"));
